import { Observable } from 'rxjs';

export declare interface IQuery {
  authorId?: string;
}

export declare interface IPagination {
  limit: number;
  page: number;
}

export declare interface IUser {
  id?: string;
  username: string;
  password: string;
}

export declare interface ListUsersRequest {
  query?: IQuery;
  pagination?: IPagination;
}

export declare interface GetUserRequest {
  id: string;
}

export declare interface CreateUserRequest<T extends IUser> {
  username: string;
  password: string;
}

export declare interface CreateUserResponse<T> {
  user: T;
}

export declare interface IUsersService {
  list(req: ListUsersRequest): Observable<IUser>;

  get(req: GetUserRequest): Promise<IUser>;

  create(req: CreateUserRequest<IUser>): Promise<CreateUserResponse<IUser>>;
}
