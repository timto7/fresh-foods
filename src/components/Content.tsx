import { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 1440,
        padding: '0 1em',
      }}
    >
      {children}
    </div>
  );
};

export default Content;
