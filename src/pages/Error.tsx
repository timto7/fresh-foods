import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h1>An error occurred</h1>
      <p>
        {isRouteErrorResponse(error)
          ? 'This page does not exist.'
          : 'An unexpected error occurred.'}
      </p>
    </>
  );
};

export default Error;
