import { Link, useLocation, Navigate } from "react-router-dom";
import { options } from "../data/nav";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatRouteParam = (param) => {
    return param.replace(/-/g, " ").replace(/%20/g, " ");
  };

  // Check if the current path corresponds to any href in the options array
  const isValidPath = options.some(
    (option) => option.href === pathnames[pathnames.length - 1]
  );

  if (!isValidPath) {
    // Redirect to error page if the path is not valid
    return <Navigate to="/error" />;
  }

  return (
    <nav className="bg-gray-200 py-2 px-4">
      <ol className="list-reset flex text-xs text-gray-600 font-bold font-Nunito uppercase text-violet-dark">
        <li>
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <span className="mx-2 ">/</span>
        </li>
        {pathnames.map((path, index) => {
          const routeTo = `/${formatRouteParam(path)}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={path}>
              {isLast ? (
                <span className=" text-xs text-gray-800">
                  {formatRouteParam(path)}
                </span>
              ) : (
                <>
                  <Link
                    to={routeTo}
                    className="text-xs text-blue-500 hover:underline"
                  >
                    {formatRouteParam(path)}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
