export declare interface IQuery {
  authorId?: string;
}

export declare interface IPagination {
  limit: number;
  page: number;
}

export declare interface ListRequest {
  query?: IQuery;
  pagination?: IPagination;
}

export declare interface IUser {
  id?: string;
  username: string;
  password: string;
}

export declare interface GetRequest {
  id: string;
}

export declare interface CreateRequest<T extends IUser> {
  username: string;
  password: string;
}

export declare interface CreateResponse<T> {
  user: T;
}

export declare interface IUsersService {
  list(req: ListRequest): Promise<IUser[]>;

  get(req: GetRequest): Promise<IUser>;

  create(req: CreateRequest<IUser>): Promise<CreateResponse<IUser>>;
}
