import { FaCalendarAlt, FaGamepad, FaGraduationCap, FaHome, FaMailBulk, FaPhoneAlt, FaUniversity, FaUser } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const About = () => {

    return (
        <div className='bg-orange-100 lg:px-24 px-5 lg:py-10 py-2 h-full'>
            <div className="about-me">
                <h3 className="lg:text-3xl text-lg uppercase text-orange-700 lg:my-10">A Bit About Me</h3>
                <p className="font-normal text-sm lg:text-xl">I am a passionate junior web developer with a strong foundation in software engineering. I recently graduated from Daffodil International University, where I gained expertise in various web technologies. I enjoy developing simple, clean and slick websites that provide real value to the end user. I am a lifelong learner, continuously expanding my knowledge and staying up-to-date with the latest trends in web development. I am passionate about creating exceptional user experiences.</p>
                <div className="lg:flex justify-between mt-4 lg:mt-14 font-normal">
                    <div>
                        <div className="lg:mb-10 mb-4 text-center lg:text-xl text-sm">
                            <div className="mr-5 flex items-center">
                                <p className="mr-2 text-orange-700 flex items-center"><FaUser className="mr-2"></FaUser> Name:</p>
                                <p className="about-info-para">Md. Ashiqur Rahman Tonmoy</p>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-2 text-orange-700 flex items-center"><FaMailBulk className="mr-2"></FaMailBulk> Email:</p>
                                <p className="about-info-para">ashiqurtonmoy.official@gmail.com</p>
                            </div>
                            <div className="mr-5 flex items-center">
                                <p className="mr-2 text-orange-700 flex items-center"><FaPhoneAlt className="mr-2"></FaPhoneAlt> Phone:</p>
                                <p className="about-info-para">01784707310</p>
                            </div>
                            <div className="flex items-center">
                                <p className="about-info-title mr-2 text-orange-700 flex items-center"><FaHome className="mr-2"></FaHome> Home: </p>
                                <p className="about-info-para">Rajbari, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10 text-center lg:text-xl text-sm">
                            <div className="flex items-center">
                                <p className="mr-2 text-orange-700 flex items-center"><FaGraduationCap className="mr-2"></FaGraduationCap> Degree:</p>
                                <p>B.S.C in Software Engineering</p>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-2 text-orange-700 flex items-center"><FaUniversity className="mr-2"></FaUniversity> University:</p>
                                <p>Daffodil International University</p>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-2 text-orange-700 flex items-center"><FaCalendarAlt className="mr-2"></FaCalendarAlt> Birthday:</p>
                                <p>13th November, 2000</p>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-2 text-orange-700 flex items-center"><FaGamepad className="mr-2"></FaGamepad> Hobby:</p>
                                <p>Books, Cricket, Video Games</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-28'>
                <motion.div className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                    <Link to={'/skills'} className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900  p-3 rounded-lg ml-2 hover:text-white">See My Skills</Link>
                </motion.div>
            </div>
        </div>
    );
};

export default About;