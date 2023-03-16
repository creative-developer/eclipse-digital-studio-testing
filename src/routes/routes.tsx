import { screens } from 'screens';

import { RoutesType } from 'base/routes/types/RouteTypes';

type RoutesKeys = keyof typeof screens;
export const routes: RoutesType<RoutesKeys> = {
  MainScreen: {
    path: '/',
    element: <screens.MainScreen />,
  },
  NotFoundScreen: {
    path: '*',
    element: <screens.NotFoundScreen />,
  },
};
