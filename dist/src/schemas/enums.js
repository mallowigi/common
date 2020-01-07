"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubjectType;
(function (SubjectType) {
    SubjectType[SubjectType["All"] = 0] = "All";
    SubjectType[SubjectType["Articles"] = 1] = "Articles";
    SubjectType[SubjectType["Comments"] = 2] = "Comments";
    SubjectType[SubjectType["Users"] = 3] = "Users";
})(SubjectType = exports.SubjectType || (exports.SubjectType = {}));
var ActionType;
(function (ActionType) {
    ActionType[ActionType["Manage"] = 0] = "Manage";
    ActionType[ActionType["Read"] = 1] = "Read";
    ActionType[ActionType["Create"] = 2] = "Create";
    ActionType[ActionType["Update"] = 3] = "Update";
    ActionType[ActionType["Delete"] = 4] = "Delete";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var RoleType;
(function (RoleType) {
    RoleType[RoleType["Admin"] = 0] = "Admin";
    RoleType[RoleType["User"] = 1] = "User";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
//# sourceMappingURL=enums.js.map