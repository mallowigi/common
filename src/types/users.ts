import { Observable } from 'rxjs';

export declare interface IUserQuery {
  authorId?: string;
  username?: string;
  password?: string;
}

export declare interface IUserPagination {
  limit: number;
  page: number;
}

export declare interface IUser {
  id?: string;
  username: string;
  password: string;
}

export declare interface ListUsersRequest {
  query?: IUserQuery;
  pagination?: IUserPagination;
}

export declare interface GetUserByIdRequest {
  id: string;
}

export declare interface CreateUserRequest {
  username: string;
  password: string;
}

export declare interface CreateUserResponse<T extends IUser> {
  user: T;
}

export declare interface IUsersService {
  list(req: ListUsersRequest): Promise<Observable<IUser>>;

  get(req: GetUserByIdRequest): Promise<IUser>;

  create(req: CreateUserRequest): Promise<CreateUserResponse<IUser>>;
}
