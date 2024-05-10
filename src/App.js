import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
