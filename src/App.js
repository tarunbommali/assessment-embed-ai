import { createBrowserRouter, Outlet, useMatch } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import { Provider } from "react-redux";
import appStore from "./redux-store/appStore";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Chat from "./components/Chat";
import { lazy, Suspense, useState, useEffect } from "react";

const CreateUser = lazy(() => import("./components/CreateUser"));

const AppLayout = () => {
  const [displaySideMenu, setDisplaySideMenu] = useState(true);

  // Function to toggle side menu based on screen size
  const handleToggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  // UseMatch to detect smaller screen sizes
  const isSmallerScreen = useMatch({
    // Add the breakpoint for smaller screen here, for example '/mobile'
    path: '/mobile',
  });

  // UseEffect to set displaySideMenu based on screen size
  useEffect(() => {
    if (isSmallerScreen) {
      setDisplaySideMenu(false); // Hide side menu for smaller screens
    } else {
      setDisplaySideMenu(true); // Show side menu for larger screens
    }
  }, [isSmallerScreen]); // Trigger effect on screen size changes

  return (
    <Provider store={appStore}>
      <div className="flex h-screen justify-center bg-[#18181b]">
        {/* Side menu */}
        <div className={`${displaySideMenu ? "block" : "hidden"} w-[60%] md:w-[20%] bg-[#131316] text-white border-l border-2 px-4 border-[#26272b] overflow-x-scroll absolute md:static translate-x-2;
 top-0 left-0 bottom-0`}>
          <SideMenu setDisplaySideMenu={handleToggleSideMenu} />
        </div>
        {/* Hamburger icon for smaller screens */}
        {!displaySideMenu && (
          <HiOutlineMenuAlt2 className="top-0 left-0 m-4 cursor-pointer text-white" onClick={handleToggleSideMenu} />
        )}
        {/* Main content */}
        <div className="bg-black text-white overflow-x-scroll w-full">
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
      {
        path: "/character/new",
        element: (
          <Suspense fallback={"...loading"}>
            <CreateUser />
          </Suspense>
        ),
      },
      { path: "/chat/:id", element: <Chat /> },
    ],
  },
]);

export default App;
