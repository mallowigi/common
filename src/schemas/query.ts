import { IsString } from 'class-validator';
import { IQuery }   from '../types/users';

export class Query implements IQuery {
  @IsString()
  authorId?: string;
}
