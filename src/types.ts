export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
export interface PermissionStore extends Store {
  can: DefaultTypes.AnyFunction;
  canAccessGuildSettings: DefaultTypes.AnyFunction;
  canBasicChannel: DefaultTypes.AnyFunction;
  canImpersonateRole: DefaultTypes.AnyFunction;
  canManageUser: DefaultTypes.AnyFunction;
  canWithPartialContext: DefaultTypes.AnyFunction;
  computePermissions: DefaultTypes.AnyFunction;
  getChannelPermissions: DefaultTypes.AnyFunction;
  getChannelsVersion: DefaultTypes.AnyFunction;
  getGuildPermissionProps: DefaultTypes.AnyFunction;
  getPermissionUtils: DefaultTypes.AnyFunction;
  getGuildVersion: DefaultTypes.AnyFunction;
  getHighestRole: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isRoleHigher: DefaultTypes.AnyFunction;
  clearVars: DefaultTypes.AnyFunction;
}
export interface openWarningPopout {
  valid: boolean;
  failureReason?: string;
}
export interface Settings {
  inviteConfirmation: boolean;
  inviteTrigger: number;
  slowmodeConfirmation: boolean;
  slowmodeTrigger: number;
  uploadConfirmation: boolean;
  uploadTrigger: number;
  mentionConfirmation: boolean;
  mentionTrigger: number;
  linkConfirmation: boolean;
  linkTrigger: number;
}
export * as default from "./types";
