
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className="text-center mt-48">
      <h2>Oppes!!!</h2>
      <p>{error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
          <h3>Page not found</h3>
          <Link><button className="btn">Go home</button></Link>
        </div>
      }
    </div>
  );
};

export default ErrorPage;