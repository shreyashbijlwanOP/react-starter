import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HanumanChalisa from "../pages/HanumanChalisa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [{ path: "/hanuman-chalisa", element: <HanumanChalisa /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
