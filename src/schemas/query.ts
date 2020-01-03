import { IsString } from 'class-validator';

export class Query {
  @IsString()
  authorId?: string;
}
