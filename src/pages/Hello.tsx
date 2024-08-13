import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Hello: React.FC = () => {
    return (
        <div>
            <p>it's hello page</p>
            <Link to='/'>
                Go Home!
            </Link>
            <NavLink to='hello' className={({ isActive }) => (isActive) ? 'text-blue-500' : 'text-black'}>
                Hello
            </NavLink>
            <Outlet />
        </div>
    )
}

export default Hello;