import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul className="flex gap-4 mb-8">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='hello'>Hello</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="mt-8">
                <p>@ 2024 My Website</p>
            </footer>
        </div>
    )
}

export default Root;