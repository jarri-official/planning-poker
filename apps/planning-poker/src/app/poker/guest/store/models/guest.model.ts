import { Cards } from '@planning-poker/api-interfaces';
import { BaseModel } from '@store/model/base.model';

export interface GuestModel extends BaseModel {
  name: string;
  card: Cards;
  isRoomNumberValid: boolean;
  availableCards: Cards[];
}
