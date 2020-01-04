export declare interface LoginUser {
  id: string;
  username: string;
}

export declare interface GetUserRequest {
  token: string;
}

export declare interface GetUserResponse<> {
  user: LoginUser;
}

export declare interface LoginRequest {
  username: string;
  password: string;
}

export declare interface LoginResponse {
  token: string;
}

export declare interface IAuthService {
  login(req: LoginRequest): Promise<LoginResponse>;

  getUser(req: GetUserRequest): Promise<GetUserResponse>;
}
