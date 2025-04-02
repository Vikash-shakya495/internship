import React from 'react'
import restaurant from '../assets/restaurant.avif';

function About() {
    return (
        <section 
            id="about" 
            className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center p-8"
            style={{ backgroundImage: `url(${restaurant})` }}
        >
            <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg">
                    Since its inception, <span className="font-semibold">[Restaurant Name]</span> has been a haven for food lovers.
                    With a mission to serve authentic and delicious dishes, we combine tradition with innovation 
                    to bring you an unforgettable dining experience. Our chefs handpick the freshest ingredients 
                    to craft meals that satisfy your taste buds while maintaining the warmth of homemade cooking. 
                    Join us and indulge in a delightful culinary journey!
                </p>
            </div>
        </section>
    );
}

export default About;

