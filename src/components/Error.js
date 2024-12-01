import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error("error", error);
  return (
    <div className="error">
      <h1>Oops !! </h1>
      <h2>something went wrong!!!!</h2>
      <h3>
        <div>
          {error.status}: {error.statusText}
        </div>
      </h3>
    </div>
  );
};
export default Error;
