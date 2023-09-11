import { FaDownload, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"

const Home = () => {

    return (
        <div className='bg-orange-100 lg:px-24 px-2 lg:py-10 h-screen'>
            <div className='lg:flex items-center'>
                <div>
                    <p className='lg:text-2xl text-sm'>Assalamu Alaikum, I am</p>
                    <p className='lg:text-5xl text-xl my-2'>Md. Ashiqur Rahman Tonmoy</p>
                    <div className='flex lg:pr-52'>
                        <Marquee>
                            <p className='font-normal lg:text-xl text-xs'>MERN Stack Developer</p>
                        </Marquee>
                        <Marquee>
                            <p className='font-normal lg:text-xl text-xs'>Junior Web Developer</p>
                        </Marquee>
                    </div>
                    <div className="flex items-center justify-start mt-2">
                        <a href='https://drive.usercontent.google.com/download?id=1UaiJsfMHLIBOVObL7nEEPhPSoIU0e3yn&export=download&authuser=2&confirm=t&uuid=5aff10c6-5bb3-4269-b85e-229fe13ead1a&at=APZUnTUaDx8vPsOFUY-IeMWldsGD:1694448895048' className="btn btn-sm md:btn-md bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 rounded-lg hover:text-white"><FaDownload></FaDownload>Resume</a>
                        <Link to={'/contact'}>
                            <button className="btn btn-sm md:btn-md ml-2 bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 hover:text-white"><FaPhone></FaPhone> Contact</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/LxZzDGC/my-photo-no-back.png" className='w-full lg:h-full h-96' alt="" />
                </div>
            </div>
            <div className='text-center py-8'>
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