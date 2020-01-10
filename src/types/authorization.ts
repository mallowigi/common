//region Actions
import { ActionType, RoleType, SubjectType } from '../schemas';

export const actionNames = {
  manage: 'manage',
  read:   'read',
  create: 'create',
  update: 'update',
  delete: 'delete',
};

export type ActionNames = keyof typeof actionNames;

export declare interface IAction {
  name: ActionNames | string;
  type: ActionType;
}

export declare interface ActionTypes {
  [index: string]: IAction;
}

//endregion

//region Subjects

export const subjectNames = {
  all:      'all',
  articles: 'articles',
  comments: 'comments',
  users:    'users',
};

export type SubjectNames = keyof typeof subjectNames;

export declare interface ISubject {
  name: SubjectNames | string;
  type: SubjectType;
  actions?: ActionType[];
  conditionFieldName?: string;
}

export declare interface Subjects {
  [index: string]: ISubject;
}

//endregion

//region Permissions
export declare interface IPermission {
  subject: ISubject;
  actions: ActionType[];
}

//endregion

//region Roles

export declare interface IRole {
  id?: string;
  userId: string;
  type: RoleType;
  permissions: IPermission[];
}

export declare interface IPredefRole {
  type: RoleType;
  permissions: IPermission[];
}

export declare interface IRoles {
  [index: string]: IPredefRole;
}

//endregion

//region Protocol for Authorization and roles
export declare interface CanRequest {
  userId: string;
  action: string;
  subject: SubjectNames;
}

export declare interface CanResponse {
  yes: boolean;
}

export declare interface CanOnInstanceRequest {
  userId: string;
  action: string;
  subject: SubjectNames;
  subjectId: string;
}

export declare interface CanOnInstanceResponse {
  yes: boolean;
}

export declare interface CreateRoleRequest {
  userId: string;
  type: RoleType;
}

export declare interface CreateRoleResponse<T extends IRole> {
  role: T;
}

export declare interface GetRolesRequest {
  userId: string;
}

export declare interface GetRolesResponse<T extends IRole> {
  roles: T[];
}

export declare interface IRolesService<T extends IRole> {
  can(req: CanRequest): Promise<CanResponse>;

  canOnInstance(req: CanOnInstanceRequest): Promise<CanOnInstanceResponse>;

  createRole(req: CreateRoleRequest): Promise<CreateRoleResponse<T>>;

  getRoles(req: GetRolesRequest): Promise<GetRolesResponse<T>>;
}

//endregion
