import { ActionType, RoleType, SubjectType } from '../schemas';
export declare interface IAction {
    type: ActionType;
}
export declare interface ActionTypes {
    [index: string]: IAction;
}
export declare interface ISubject {
    type: SubjectType;
    actions?: ActionType[];
    conditionFieldName?: string;
}
export declare interface Subjects {
    [index: string]: ISubject;
}
export declare interface IPermission {
    subject: ISubject;
    actions: ActionType[];
}
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
