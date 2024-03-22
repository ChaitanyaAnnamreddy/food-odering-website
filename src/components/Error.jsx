import { useRouteError } from "react-router-dom";

const Error = () => {
  const { error } = useRouteError();
  return (
    <div className="error-container">
      <h1>Oops!!!</h1>
      <p>Something went wrong!</p>
      <h1>Error: {error.message}</h1>
    </div>
  );
};

export default Error;
