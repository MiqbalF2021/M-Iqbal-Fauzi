import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
        <h1 className="text-3xl font-bold">Opsss!!</h1>
        <p className="text-slate-500">No One</p>
        <p className="text-slate-500">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage