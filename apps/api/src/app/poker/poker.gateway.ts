import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import {
  Client,
  ClientType,
  GameStateBroadcastDto,
  GameStates,
  JoinRequestDto,
  SocketEvents,
  UsersResponseDto,
  UserStatuses,
  Vote
} from '@planning-poker/api-interfaces';
import { Server, Socket } from 'socket.io';
import { PokerService } from './poker.service';
import { Room } from './room';

@WebSocketGateway()
export class PokerGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() public server: Server;

  constructor(private pokerService: PokerService) {
  }

  public handleConnection(client: Socket): void {
    this.pokerService.addClient({
      id: client.id
    });
  }

  public handleDisconnect(client: Socket): void {
    const clientId: string = client.id;
    const clientData: Client = this.pokerService.getClientById(clientId);
    const roomId: string = clientData.room;
    const room: Room = this.pokerService.getRoomById(roomId);

    if (!room) {
      return;
    }

    const clientInRoom: Client = room.getClientFromRoom(clientId);

    if (clientInRoom.type === ClientType.HOST) {
      this.pokerService.removeRoom(clientData.room);
      this.server.to(roomId).emit(SocketEvents.ROOM_REMOVED);
    } else if (room) {
      room.removeClientFromFrom(client.id);
    }

    this.pokerService.removeClient(client.id);

    this.emitUsersChangeToRoom(clientData.room);
  }

  @SubscribeMessage(SocketEvents.VOTE)
  public onVote(client: Socket, message: Vote): void {
    const room: Room = this.pokerService.getRoomById(message.room);
    const clientData: Client = room.getClientFromRoom(client.id);
    clientData.card = message.card;
    clientData.status = UserStatuses.VOTED;
    room.updateClientInRoom(clientData);
    this.emitUsersChangeToRoom(message.room);
  }

  @SubscribeMessage(SocketEvents.STATE)
  public onState(client: Socket, roomId: string): void {
    const state: GameStates = this.pokerService.toggleRoomGameState(roomId);
    const broadcastMessage: GameStateBroadcastDto = {
      state
    };

    this.server.to(roomId).emit(SocketEvents.STATE, broadcastMessage);

    if (state === GameStates.IN_PROGRESS) {
      this.pokerService.resetVotingForRoom(roomId);
      this.emitUsersChangeToRoom(roomId);
    }
  }

  @SubscribeMessage(SocketEvents.JOIN)
  public onJoin(client: Socket, message: JoinRequestDto): void {
    const roomId: string = message.room;
    const room: Room = this.pokerService.getRoomById(roomId);
    room.addClientToRoom({
      id: client.id,
      name: message.name,
      type: message.type
    });

    client.join(roomId);
    this.pokerService.setClientARoom(client.id, roomId);
    this.emitUsersChangeToRoom(roomId);
  }

  public emitUsersChangeToRoom(roomId: string): void {
    const room: Room = this.pokerService.getRoomById(roomId);

    if (!room) {
      return;
    }

    const clients: Client[] = Array.from(room.clients.values())
      .sort((clientA: Client, clientB: Client) => clientB.date - clientA.date);

    const clientsResponse: UsersResponseDto = {
      clients
    };

    this.server.to(roomId).emit(SocketEvents.USERS, clientsResponse);
  }
}