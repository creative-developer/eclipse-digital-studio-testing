import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { routes } from 'routes/routes';

import { AppRoutes } from 'base/routes/components/AppRoutes';
import { BaseLayout } from 'components/Layouts/BaseLayout';

export const App: React.FC = () => {
  return (
    <>
      <BaseLayout>
        <AppRoutes routes={routes} />
      </BaseLayout>
      <ReactNotifications />
    </>
  );
};
