import { useRouterError } from "react-router-dom";

const Error = () => {
  const error = useRouterError();

  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <p>Please try again later.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
