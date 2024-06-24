import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_tkruytm', 'template_oqrpv9d', form.current, 'ct4mlKTZVaHwy82w4')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset(); // Reset the form fields after successful email send
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className='min-h-screen w-full bg-gray-900 flex items-center justify-center '>
            <form
                ref={form}
                onSubmit={sendEmail}
                className='bg-gray-800 p-6 rounded-lg shadow-lg w-full space-y-6 animate-fadeIn'
            >
                <h2 className='text-3xl text-white text-center'>Contact Us</h2>
                <div className='w-full'>
                    <label className='block w-full text-sm font-medium text-gray-300 mb-2'>Name</label>
                    <input
                        type='text'
                        name='user_name'
                        className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>Email</label>
                    <input
                        type='email'
                        name='user_email'
                        className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>Message</label>
                    <textarea
                        name='message'
                        className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        rows='4'
                        required
                    ></textarea>
                </div>
                <div className='flex justify-center'>
                    <input
                        className='px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-300'
                        type='submit'
                        value='Send'
                    />
                </div>
            </form>
        </div>
    );
}

export default Contact;
