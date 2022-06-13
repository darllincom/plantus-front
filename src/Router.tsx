import { useContext } from "react";
import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import { LoginContext } from "./context/auth-provider";
import Main from "./pages/main";
import Loader from "./components/loader";
import NotFound from "./pages/notfound";

type PrivateRouteType = {
  isPrivate: boolean
}

type PrivateRouteProps = PrivateRouteType & RouteProps

function PrivateRoute({ isPrivate, ...rest }: PrivateRouteProps ) {
  const { authenticate, loading } = useContext(LoginContext)

  if (loading) {
    return (
      <Loader />
    )
  }

  if (isPrivate && !authenticate) {
    return <Navigate to="/" replace />
  }

  return <Route {...rest} />
}

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}