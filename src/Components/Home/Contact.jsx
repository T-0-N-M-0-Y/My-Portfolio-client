import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Lottie from "lottie-react";
import email from '../../../email-template.json'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zhj3he7', 'template_osftikb', form.current, '7Mvl3Q6mDRfontGIK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        window.location.reload();
    };

    return (
        <div className='bg-orange-100 lg:px-24 h-full'>
            <div className="hero bg-orange-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={email} loop={true} />
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-xl bg-orange-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="text" name="message" className="textarea textarea-bordered textarea-lg w-full max-w-xl" />
                            </div>
                            <input className='bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg mt-5 hover:text-white' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='text-center p-14'>
                <motion.div className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                    <Link to={'/'} className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white">Home</Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;