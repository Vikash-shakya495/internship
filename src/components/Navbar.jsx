import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 text-white flex justify-around z-10">
                <a href="#about" className="hover:underline">About Us</a>
                <a href="#menu" className="hover:underline">Menu</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar
