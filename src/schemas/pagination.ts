import { IsInt, Min }  from 'class-validator';
import { IPagination } from '../types/users';

export class Pagination implements IPagination {
  @IsInt()
  @Min(1)
  limit: number;

  @IsInt()
  @Min(1)
  page: number;
}
