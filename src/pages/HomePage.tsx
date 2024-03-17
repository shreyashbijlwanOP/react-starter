import { NavLink, Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center text-4xl font-medium py-8 border-b-2">
          <NavLink to="/">Dharma Links</NavLink>
        </h1>
        <ul className="p-6">
          <NavLink to="/hanuman-chalisa">
            <li className=" text-2xl   bg-indigo-500 inline-block px-3 py-2 rounded-md text-white hover:ring-4 ring-offset-2 transition duration-150 active:bg-indigo-300">
              Hanuman Chalisa
            </li>
          </NavLink>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
