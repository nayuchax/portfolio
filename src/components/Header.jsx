import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul className="flex justify-between border-b border-blue-500 mb-4 shadow-md">
                <li className="text-center w-1/3 p-6">
                    <Link to="/" className="font-bold text-md text-blue-500 hover:text-blue-800">Home</Link>
                </li>
                <li className="text-center w-1/3 p-6">
                    <Link to="/about" className="font-bold text-md text-blue-500 hover:text-blue-800">About</Link>
                </li>
                <li className="text-center w-1/3 p-6">
                    <Link to="/works" className="font-bold text-md text-blue-500 hover:text-blue-800">Works</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;