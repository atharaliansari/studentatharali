import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Comment from './comment';
import Post from './post';
import Photos from './photos';
import Todos from './todos';
import Albums from './albums';
import Users from './users';
import { FiMenu } from 'react-icons/fi';  // For mobile menu icon

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to close sidebar on link click
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden p-4"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <FiMenu size={24} />
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 transform ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:static w-64 bg-gray-800 text-white z-10 transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4 font-bold text-xl">Dashboard</div>
                <nav className="mt-4 space-y-2">
                    <Link to="/DashBoard/Post" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={closeSidebar}>Post</Link>
                    <Link to="/DashBoard/Comment" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={closeSidebar}>Comments</Link>
                    <Link to="/DashBoard/Albums" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={closeSidebar}>Albums</Link>
                    <Link to="/DashBoard/Photos" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={closeSidebar}>Photos</Link>
                    <Link to="/DashBoard/Todos" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={closeSidebar}>Todos</Link>
                    <Link to="/DashBoard/Users" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={closeSidebar}>Users</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:ml-64">
                <Routes>
                    <Route path="/Comment" element={<Comment />} />
                    <Route path="/Post" element={<Post />} />
                    <Route path="/Photos" element={<Photos />} />
                    <Route path="/Todos" element={<Todos />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/Albums" element={<Albums />} />
                </Routes>
            </main>
        </div>
    );
}

export default Dashboard;
