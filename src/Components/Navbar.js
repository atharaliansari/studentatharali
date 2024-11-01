import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsFillPlusSquareFill, BsChatSquareDotsFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

function Navbar() {
    return (
        <div className="flex justify-between items-center px-5 py-2 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            {/* Left Section - LinkedIn Logo and Search */}
            <div className="flex items-center space-x-4">
                <FaLinkedin color="#0077b5" size={35} />
                <div className="flex items-center bg-gray-100 rounded-md p-2 px-3">
                    <IoSearchSharp className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent focus:outline-none ml-2 w-full"
                    />
                </div>
            </div>

            {/* Right Section - Navigation Icons */}
            <div className="flex space-x-4 items-center text-gray-600">
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <BsFillPlusSquareFill size={25} />
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <BsChatSquareDotsFill size={25} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
