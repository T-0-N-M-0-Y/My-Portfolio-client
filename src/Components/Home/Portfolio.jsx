import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import './Projects.css'
import image1 from '../../assets/Sports-Zone.png'
import image2 from '../../assets/Toy-Cars.png'
import image3 from '../../assets/Food-Experts.png'

const Portfolio = () => {
    return (
        <div className='bg-orange-100 lg:px-24 px-5 lg:py-10 py-2 h-full'>
            <h3 className="lg:text-3xl text-xl uppercase text-orange-700 lg:my-10 my-4 text-center">My Projects</h3>

            <div className="grid lg:grid-cols-3 gap-3">

                {/* project 1 */}
                <div className="card w-full h-96 bg-base-100 shadow-xl">
                    <figure><img src={image1} alt="Shoes" className="w-full h-full object-cover object-top hover:object-bottom transition-all ease-in image-container" /></figure>
                    <div className="card-body text-xs font-normal">
                        <h2 className="card-title">SPORTS ZONE!</h2>
                        <p>This is a about a Sports Based Training Center Where Any Students can Enroll and Train in their desired Sports with their Favourite Instructors!</p>
                        <label htmlFor="my_modal_1" className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white w-full text-center mt-4">Details</label>
                        <input type="checkbox" id="my_modal_1" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box text-lg">
                                <h3 className="font-bold text-lg mb-5">Sports Zone</h3>
                                <p className="mb-2">This is a about a Sports Based Training Center Where Any Students can Enroll and Train in their desired Sports with their Favourite Instructors!</p>
                                <p>* There are 3 Dashboard! For Students, Instructors & Admin each</p>
                                <p>* Admin Can Make An User Instructor or Admin.</p>
                                <p>* Instructors Can add their Classes for Students</p>
                                <p>* Responsive Design</p>
                                <p>* Technologies: TailswindCSS | DaisyUI | React | React Router | Firebase | JWT | Express JS | MongoDB | Stripe | VS Code | Git | Vercel</p>
                                <div className="flex justify-between mt-4">
                                    <a className="text-blue-700 underline" href="https://sports-zone-app.netlify.app">Live Demo</a>
                                    <div className="flex items-center">
                                        <p>Github:</p>
                                        <a className="text-blue-700 underline" href="https://github.com/T-0-N-M-0-Y/Sports-Zone-Client">Client</a> ||
                                        <a className="text-blue-700 underline" href="https://github.com/T-0-N-M-0-Y/Sports-Zone-Server">server</a>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <motion.div className="box"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: .9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                        <label htmlFor="my_modal_1" className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white text-center">Close!</label>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2  */}
                <div className="card w-full h-96 bg-base-100 shadow-xl">
                    <figure><img src={image2} alt="Shoes" className="w-full h-full pl-3 object-cover object-top hover:object-bottom transition-all ease-in image-container" /></figure>
                    <div className="card-body text-xs font-normal">
                        <h2 className="card-title uppercase">Toy Cars!</h2>
                        <p>This is an Online Show Room for Toy of Cars! Anyone can upload and Show their Toys to the Users!</p>
                        <label htmlFor="my_modal_2" className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white w-full text-center mt-4">Details</label>
                        <input type="checkbox" id="my_modal_2" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box text-lg">
                                <h3 className="font-bold text-lg mb-5">Toy Cars</h3>
                                <p className="mb-2">This is an Online Show Room for Toy of Cars! Anyone can upload and Show their Toys to the Users!</p>
                                <p>* Find your Favourite Cars.</p>
                                <p>* Explore Category of Cars</p>
                                <p>* Eye Catching Design of Cars.</p>
                                <p>* Responsive Design</p>
                                <p>* Technologies: TailswindCSS | DaisyUI | React | React Router | Firebase | Express JS | MongoDB | VS Code | Git | Vercel</p>
                                <div className="flex justify-between mt-4">
                                    <a className="text-blue-700 underline" href="https://assingment-11-toy-cars.web.app">Live Demo</a>
                                    <div className="flex items-center">
                                        <p>Github:</p>
                                        <a className="text-blue-700 underline" href="https://github.com/T-0-N-M-0-Y/Toy-Cars-Client">Client</a> ||
                                        <a className="text-blue-700 underline" href="https://github.com/T-0-N-M-0-Y/Toy-Cars-Server">server</a>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <motion.div className="box"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: .9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                        <label htmlFor="my_modal_2" className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white text-center">Close!</label>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3  */}
                <div className="card w-full h-96 bg-base-100 shadow-xl">
                    <figure><img src={image3} alt="Shoes" className="w-full h-full pl-3 object-cover object-top hover:object-bottom transition-all ease-in image-container" /></figure>
                    <div className="card-body text-xs font-normal">
                        <h2 className="card-title uppercase">Food Experts!</h2>
                        <p>This is a Website for Thai Food Lovers!!</p>
                        <label htmlFor="my_modal_3" className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white w-full text-center mt-4">Details</label>
                        <input type="checkbox" id="my_modal_3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box text-lg">
                                <h3 className="font-bold text-lg mb-5">Food Experts</h3>
                                <p className="mb-2">This is a Website for Thai Food Lovers!</p>
                                <p>* Find Your Favourite Thai Foods Here!</p>
                                <p>* Recipes by Best Chefs Over the World!</p>
                                <p>* Bookmark Your Favourites!</p>
                                <p>* Responsive Design!</p>
                                <p>* Technologies: TailswindCSS | DaisyUI | React | React Router | Firebase | Express JS | MongoDB | VS Code | Git | Vercel</p>
                                <div className="flex justify-between mt-4">
                                    <a className="text-blue-700 underline" href="https://assignment-10-chef-recipe-hunt.web.app">Live Demo</a>
                                    <div className="flex items-center">
                                        <p>Github:</p>
                                        <a className="text-blue-700 underline" href="https://github.com/T-0-N-M-0-Y/Food-Experts">Client</a> ||
                                        <a className="text-blue-700 underline" href="https://github.com/T-0-N-M-0-Y/Food-Experts-Server">server</a>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <motion.div className="box"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: .9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                        <label htmlFor="my_modal_3" className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white text-center">Close!</label>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center py-14'>
                <motion.div className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                    <Link to={'/contact'} className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white">Contact Me</Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;