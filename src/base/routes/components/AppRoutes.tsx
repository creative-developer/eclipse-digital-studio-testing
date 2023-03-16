import { Routes, Route, Navigate, NavigateProps } from 'react-router-dom';

import RouteHelper from '../helpers/RouteHelper';
import { IRoutes, IRoute } from '../interfaces/RouteInterfaces';
import { RoleKeys } from '../types/RouteTypes';

interface IRoutesProps {
  routes: IRoutes;
  role?: RoleKeys;
  disableRedirect?: boolean;
  redirectProps?: { to: NavigateProps['to'] };
}

export const AppRoutes: React.FC<IRoutesProps> = ({ routes, role, disableRedirect, redirectProps }) => {
  const routesList = RouteHelper.getRoutesWithCheckedRoles(routes, role);

  const renderRouteChildren = (route: IRoute) => {
    const { element } = route;

    if (element) {
      return <>{element}</>;
    }

    return <></>;
  };

  return (
    <main>
      <Routes>
        {routesList.map(route => {
          const { element, path, ...rest } = route;

          return <Route key={path} path={path} element={renderRouteChildren(route)} {...rest} />;
        })}

        {!disableRedirect && <Route path="*" element={<Navigate to={redirectProps ? redirectProps.to : routes.NotFoundScreen.path} />} />}
      </Routes>
    </main>
  );
};
