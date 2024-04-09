import { createBrowserRouter, Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import {Provider} from 'react-redux' 
import appStore from "./redux-store/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="flex min-h-[100vh]">
      <SideMenu />
      <div className="w-[85%] bg-black text-white">
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
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default App;
