import { LayoutRouteProps } from 'react-router-dom';

import { Param } from '../types/RouteTypes';

// Roles
export interface IRole {
  role: string;
  label: string;
}

// Routes
export interface IRoute extends LayoutRouteProps {
  path: string;
  credentials?: IRole[];
  props?: any;
}

export interface IRoutes {
  [key: string]: IRoute;
}

// Params types
export interface ParamObj {
  p: string;
  v: Param;
}
