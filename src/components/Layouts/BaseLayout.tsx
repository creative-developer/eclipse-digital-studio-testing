import { PropsWithChildren } from 'react';

import { Header } from 'components/Header';

interface IBaseLayoutProps {}

export const BaseLayout: React.FC<PropsWithChildren<IBaseLayoutProps>> = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
