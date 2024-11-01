import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Jobs = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-4">
      <div>
        <Navbar/>
        </div>
        <br/>
        <br/>
        <br/>
      
            {/* Header */}
            <header className="flex items-center space-x-4 mb-6">
                <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                    <FontAwesomeIcon icon={faStar} />
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">My jobs</button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Preferences</button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Post a free job</button>
            </header>

            {/* Job Picks Section */}
            <section className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-4">Job picks for you</h2>

                {/* Job Card */}
                <div className="border-b py-4 flex justify-between items-start">
                    <div className="flex space-x-4">
                        <img
                            src="https://techbullion.com/wp-content/uploads/2024/01/AC-Services-In-Riyadh.jpg"
                            alt="Company Logo"
                            className="w-12 h-12"
                        />
                        <div>
                            <h3 className="font-semibold">HVAC Technician</h3>
                            <p className="text-gray-500">The Indus Hospital</p>
                            <p className="text-gray-500 text-sm">Karachi Division, Sindh, Pakistan (On-site)</p>
                            <p className="text-gray-500 text-sm">2 school alumni work here</p>
                            <p className="text-gray-400 text-xs">3 days ago</p>
                        </div>
                    </div>
                    <button className="text-gray-500">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {/* Additional Job Cards */}
                <div className="border-b py-4 flex justify-between items-start">
                    <div className="flex space-x-4">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Company Logo"
                            className="w-12 h-12"
                        />
                        <div>
                            <h3 className="font-semibold">Trainee Database Administrator</h3>
                            <p className="text-gray-500">Contour Software</p>
                            <p className="text-gray-500 text-sm">Karachi, Sindh, Pakistan (On-site)</p>
                            <p className="text-gray-400 text-xs">2 months ago</p>
                        </div>
                    </div>
                    <button className="text-gray-500">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="border-b py-4 flex justify-between items-start">
                    <div className="flex space-x-4">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Company Logo"
                            className="w-12 h-12"
                        />
                        <div>
                            <h3 className="font-semibold">Database Administrator</h3>
                            <p className="text-gray-500">Contour Software</p>
                            <p className="text-gray-500 text-sm">Karachi, Sindh, Pakistan (On-site)</p>
                            <p className="text-gray-400 text-xs">2 months ago</p>
                        </div>
                    </div>
                    <button className="text-gray-500">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {/* Show all button */}
                <div className="text-center py-4">
                    <button className="text-blue-600 font-semibold">Show all →</button>
                </div>
            </section>
            <div>
              <Footer/>
            </div>
        </div>
        
    );
};

export default Jobs;