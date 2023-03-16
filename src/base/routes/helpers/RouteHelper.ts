import { ParamObj, IRoutes, IRoute } from '../interfaces/RouteInterfaces';
import { Param, RoleKeys } from '../types/RouteTypes';

export default class RouteHelper {
  static makePath = (path: string, params: Param | ParamObj[] | null): string => {
    if (!params) {
      console.error('makePath: param is null');
      return '';
    }

    if (Array.isArray(params)) {
      let outputPath = path;

      for (let i = 0; i < params.length; i++) {
        outputPath = outputPath.replace(`:${params[i].p}`, String(params[i].v));
      }

      return outputPath;
    }

    return path.replace(/:\w+/gm, String(params));
  };

  static getRoutesWithCheckedRoles = (routesData: IRoutes, currentRole?: RoleKeys): IRoute[] => {
    const routes = Object.values(routesData);
    const result: IRoute[] = [];

    for (let i = 0; i < routes.length; i++) {
      if (routes[i]?.credentials && currentRole) {
        const findedRole = routes[i].credentials?.find(({ role }) => role === currentRole);

        if (findedRole?.role === currentRole) {
          result.push(routes[i]);
        }
      } else {
        result.push(routes[i]);
      }
    }

    return result;
  };
}
