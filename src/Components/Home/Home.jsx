import { FaDownload, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"

const Home = () => {

    return (
        <div>
            <div className='flex items-center'>
                <div>
                    <p className='text-2xl'>Assalamu Alaikum, I am</p>
                    <p className='text-5xl my-2'>Md. Ashiqur Rahman Tonmoy</p>
                    <div className='flex pr-52'>
                        <Marquee>
                            <p className='font-normal text-xl'>Front-end Web Developer</p>
                        </Marquee>
                        <Marquee>
                            <p className='font-normal text-xl'>Junior Web Developer</p>
                        </Marquee>
                    </div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md bg-orange-700 mt-2 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900  p-3 rounded-lg ml-2 hover:text-white"><FaDownload></FaDownload>Resume</button>
                    <Link to={'/contact'}>
                        <button className="btn btn-xs sm:btn-sm md:btn-md mt-2 ml-2 bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 hover:text-white"><FaPhone></FaPhone> Contact</button>
                    </Link>
                </div>
                <div className='bg-photo'>
                    <img src="https://i.ibb.co/LxZzDGC/my-photo-no-back.png" alt="" />
                </div>
            </div>
            <div className='text-center mt-14'>
                <motion.div className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                    <Link to={'/about'} className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900  p-3 rounded-lg ml-2 hover:text-white">Know About Me</Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;