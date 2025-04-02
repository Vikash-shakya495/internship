
import React,  { useState }  from 'react'


function Contact() {
    const [submitted, setSubmitted] = useState(false);
    return (
        <section id="contact" className="py-12 px-6 bg-gray-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            {!submitted ? (
                <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-700 text-white focus:ring focus:ring-yellow-400" required />
                    <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white focus:ring focus:ring-yellow-400" required />
                    <textarea placeholder="Message" className="w-full p-2 rounded bg-gray-700 text-white focus:ring focus:ring-yellow-400" required></textarea>
                    <button type="submit" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded hover:bg-yellow-400">Submit</button>
                </form>
            ) : (
                <p className="text-lg">Thank you for reaching out! We will get back to you soon.</p>
            )}
        </section>
    );
}

export default Contact
