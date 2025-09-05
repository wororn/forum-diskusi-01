import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Component/Navigation.js";
import Home from "./Section/Home";
import Billboard from "./Section/Billboard.js";
import NewPage from "./Section/NewPage";
import Detail from "./Section/Detail";
import LoginPage from "./Section/Login";
import Register from "./Section/Register";
import LoadingIndicator from "./Component/LoadingIndicator.js";
import { useDispatch, useSelector } from "react-redux";
import { asyncUnsetAuthUser } from "./Action/Authentic/action";
import { asyncPreloadProcess } from "./Action/isPreload/action.js";

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return <LoadingIndicator />;
  }

  // Authenticated routes
  const AuthenticatedApp = () => (
    <div className="w-10/12 m-auto bg-slate-900 h-[100vh] flex">
      <Navigation authUser={authUser} logout={onLogout} />
      <main className="flex-1" aria-label="Main content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboards" element={<Billboard />} />
          <Route path="/create" element={<NewPage />} />
          <Route path="/threads/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );

  // Unauthenticated routes
  const UnauthenticatedApp = () => (
    <main
      className="w-6/12 m-auto h-[100vh] flex items-center justify-center"
      aria-label="Auth content"
    >
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    </main>
  );

  return authUser ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

// Simple 404 page
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-300">Page Not Found</p>
      <a href="/" className="text-blue-400 underline mt-2">
        Go Home
      </a>
    </div>
  );
}

export default App;
