import { createBrowserRouter, Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import { Provider } from "react-redux";
import appStore from "./redux-store/appStore";

import Chat from "./components/Chat";
import { lazy, Suspense } from "react";

const CreateUser = lazy(() => import("./components/CreateUser"))

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="flex h-[100vh]">
        <SideMenu />
        <div className="w-[85%] bg-black text-white overflow-x-scroll">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};

const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/character/new", element: <Suspense fallback={"...loading"}> <CreateUser /> </Suspense> },
      { path: "/chat/:id"  , element: <Chat/>}
    ],
  },
]);

export default App;
