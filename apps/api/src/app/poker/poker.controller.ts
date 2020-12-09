import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import {
  AppInfoDtoInterface,
  CreateRoomDto,
  JoinRoomCodeRequestDto,
  JoinRoomCodeResponseDto,
  PlayerType,
  RoomInfo
} from '@planning-poker/api-interfaces';

import { version } from '../../../../../package.json';
import { PokerService } from './poker.service';
import { Room } from './room';

@Controller()
export class PokerController {

  constructor(private readonly pokerService: PokerService) {
  }

  @Post('create-room')
  public createRoom(@Body() request: CreateRoomDto): RoomInfo {
    // todo create secure http only cookie here with client id

    const room: Room = this.pokerService.createRoom();

    room.addPlayer({
      id: request.clientId,
      type: PlayerType.HOST
    });

    return {
      id: room.id,
      gameState: room.state
    };
  }

  @Post('join-room-code')
  public joinRoomCode(@Body() request: JoinRoomCodeRequestDto): JoinRoomCodeResponseDto {
    return {
      valid: this.pokerService.checkIsRoomExists(request.id)
    };
  }

  @Post('room-info')
  public roomInfo(@Body() request: JoinRoomCodeRequestDto): RoomInfo {
    const room: Room = this.pokerService.getRoom(request.id);

    return {
      id: room.id,
      gameState: room.state
    };
  }

  @Get('check-player-in-room/:playerId/:roomNumber')
  public checkPlayerInRoom(@Param('playerId') playerId: string, @Param('roomNumber') roomNumber: string): boolean {
    const room: Room | null = this.pokerService.findPlayerRoom(playerId);
    return room ? room.id === roomNumber : false;
  }

  @Get('check-host-of-room/:playerId/:roomNumber')
  public checkHostOfRoom(@Param('playerId') playerId: string, @Param('roomNumber') roomNumber: string): boolean {
    const room: Room | null = this.pokerService.getRoom(roomNumber);
    return room ? room.host.id === playerId : false;
  }

  @Get('app-info')
  public getAppInfo(): AppInfoDtoInterface {
    return {
      info: 'version ' + version
    };
  }
}
