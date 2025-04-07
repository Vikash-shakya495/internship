import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
    const navItems = [
        { name: 'Home', to: '/'},
        { name: 'About Us', to: '/about' },
        { name: 'Menu', to: '/menu' },
        { name: 'Cart', to: '/cart' },
        { name: 'Contact', to: '/#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 shadow-md px-8 py-4 flex justify-between items-center z-50">
            {/* Logo */}
            <NavLink to="/">
                <img src={logo} alt="Logo" className="h-12 hover:scale-105 transition-transform duration-300" />
            </NavLink>

            {/* Nav Links */}
            <div className="space-x-6 flex text-gray-700 font-medium text-lg">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                            `relative group transition duration-300 ${
                                isActive ? 'text-orange-500' : ''
                            }`
                        }
                    >
                        {item.name}
                        <span className="block h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
