import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage authentication status
    const navigate = useNavigate();

    // Function to handle logout
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email");
        setIsLoggedIn(false); // Update authentication state
        navigate("/login"); // Redirect to login page after logout
    };

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy
                </Link>
                <span>.</span>
            </div>
            <div className="nav__links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/appointments">Appointments</Link></li>
                    {isLoggedIn ? ( // Render logout button if user is logged in
                        <li><button onClick={handleLogout}>Logout</button></li>
                    ) : (
                        <>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
