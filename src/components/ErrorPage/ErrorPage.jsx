import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
        <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}</p>
      {error.status===404 && <div>
        <h2 className="text-red-600 font-bold">Page not found!</h2>
        </div>}
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <Link to="/" className="btn btn-accent">Go Back to Home</Link>
      
    </div>
  );
};

export default ErrorPage;