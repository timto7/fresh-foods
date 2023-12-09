import { useEffect } from 'react';

import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import Card from '../components/Card';
import Content from '../components/Content';
import Typography from '../components/Typography';

const Error = () => {
  useEffect(() => {
    document.title = 'An error occurred';
  }, []);

  const error = useRouteError();

  return (
    <Content>
      <Card style={{ marginTop: 20 }}>
        <Typography variant="heading">An error occurred</Typography>
        <Typography>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpected error occurred.'}
        </Typography>
      </Card>
    </Content>
  );
};

export default Error;
