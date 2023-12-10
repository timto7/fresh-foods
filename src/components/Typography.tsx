import { PropsWithChildren, useMemo } from 'react';

import styled from 'styled-components';

interface TypographyProps extends PropsWithChildren {
  variant?: 'body' | 'heading' | 'span';
}

const Body = styled.p`
  color: ${(props) => props.theme.colors.text.main};
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.text.solid};
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.text.main};
`;

const Typography = ({
  children,
  variant = 'body',
  ...props
}: TypographyProps) => {
  const Component = useMemo(() => {
    switch (variant) {
      case 'heading':
        return Heading;

      case 'span':
        return Span;

      default:
        return Body;
    }
  }, [variant]);

  return <Component {...props}>{children}</Component>;
};

export default Typography;
