import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import './Navbar.css'
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {

    const navOptions =
        <>
            <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={'/'}><li><span className="hover:bg-gradient-to-r from-slate-900 to-orange-900  p-3 rounded-lg ml-2 hover:text-white">HOME</span></li></NavLink>
            </motion.div>
            <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={'/about'}><li> <span className="hover:bg-gradient-to-r from-slate-900 to-orange-900  p-3 rounded-lg ml-2 hover:text-white">ABOUT</span></li></NavLink>
            </motion.div>
            <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={'/skills'}><li><span className="hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white">SKILLS</span></li></NavLink>
            </motion.div>
            <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={'/projects'}><li> <span className="hover:bg-gradient-to-r from-slate-900 to-orange-900  p-3 rounded-lg ml-2 hover:text-white">PROJECTS</span></li></NavLink>
            </motion.div>
            <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={'/contact'}><li> <span className="hover:bg-gradient-to-r from-slate-900 to-orange-900  p-3 rounded-lg ml-2 hover:text-white">CONTACT</span></li></NavLink>
            </motion.div>
        </>

    return (
        <div className="navbar bg-orange-100 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <p className="text-3xl">TO<span className="text-orange-700">NM</span>OY</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    <a href="https://www.linkedin.com/in/md-ashiqur-rahman-tonmoy-ab1569278/"><FaLinkedinIn className="h-10 w-5 mx-2 text-orange-700"></FaLinkedinIn></a>
                    <a href="https://github.com/T-0-N-M-0-Y"><FaGithub className="w-5 h-10 mr-2 text-orange-700"></FaGithub></a>
                    <a href="https://www.facebook.com/profile.php?id=100090913276553"><FaFacebook className="h-10 w-5 text-orange-700"></FaFacebook></a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;