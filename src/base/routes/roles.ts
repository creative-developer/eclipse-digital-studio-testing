import { RoleKeys } from './types/RouteTypes';

export const roles = {};
export const EVERYBODY = Object.keys(roles).map(key => roles[key as RoleKeys]);
