export declare type SubjectType = 'all' | 'articles' | 'comments' | 'users';

export declare interface Subject {
  type: SubjectType;
  conditionFieldName: string;
}

export declare type ActionType = 'manage' | 'read' | 'create' | 'update' | 'delete';

export declare interface Permission {
  subject: Subject;
  actions: ActionType[];
}

export declare type RoleType = 'admin' | 'user';

export declare interface Role {
  id?: string;
  userId: string;
  type: RoleType;
  permissions: Permission[];
}

export declare interface CanRequest {
  userId: string;
  action: string;
  subject: string;
}

export declare interface CanResponse {
  yes: boolean;
}

export declare interface CanOnInstanceRequest {
  userId: string;
  action: string;
  subject: string;
  subjectId: string;
}

export declare interface CanOnInstanceResponse {
  yes: boolean;
}

export declare interface CreateRoleRequest {
  userId: string;
  type: RoleType;
}

export declare interface CreateRoleResponse<T extends Role> {
  role: T;
}

export declare interface GetRolesRequest {
  userId: string;
}

export declare interface GetRolesResponse<T extends Role> {
  roles: T[];
}

export declare interface IRolesService<T extends Role> {
  can(req: CanRequest): Promise<CanResponse>;

  canOnInstance(req: CanOnInstanceRequest): Promise<CanOnInstanceResponse>;

  createRole(req: CreateRoleRequest): Promise<CreateRoleResponse<T>>;

  getRoles(req: GetRolesRequest): Promise<GetRolesResponse<T>>;
}
