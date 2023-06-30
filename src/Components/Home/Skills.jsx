import { Link } from "react-router-dom";
import useSkills from "../../Hooks/useSkills";
import { motion } from "framer-motion"

const Skills = () => {

    const [skills] = useSkills();
    console.log(skills);

    return (
        <div>
            <h3 className="text-3xl uppercase text-orange-700 my-10 text-center">My Skills</h3>
            <p className="font-normal text-md">
                EXPERTISE: HTML5 || CSS3 || Bootstrap || TailwindCSS || DaisyUI || JavaScript || ES6 || React || React Router <br />
                COMFORTABLE: Firebase || REST API || Express JS || MongoDB || React Hook Form <br />
                FAMILIAR: Node.js || JWT || Stripe || TanStack Query || Axios <br />
                TOOLS: Windows ||VS Code || Git & Github || Figma || Netlify || Vercel</p>
            <div className="grid grid-cols-10 gap-3 my-10">
                {
                    skills.map(skill => <img key={skill._id} src={skill.image} className="h-24 w-full rounded-full"></img>)
                }
            </div>
            <div className='text-center mt-32'>
                <motion.div className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                    <Link to={'/projects'} className="bg-orange-700 text-white hover:bg-gradient-to-r from-slate-900 to-orange-900 p-3 rounded-lg ml-2 hover:text-white">Explore My Projects</Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;