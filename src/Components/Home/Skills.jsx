import { Link } from "react-router-dom";
import useSkills from "../../Hooks/useSkills";
import { motion } from "framer-motion"

const Skills = () => {

    const [skills] = useSkills();
    console.log(skills);

    return (
        <div className='bg-orange-100 lg:px-24 px-5 lg:py-14 py-2 h-full'>
            <h3 className="lg:text-3xl text-xl uppercase text-orange-700 lg:my-10 my-4 text-center">My Skills</h3>
            <p className="font-normal lg:text-md text-sm">
                EXPERTISE: HTML5 || CSS3 || Bootstrap || TailwindCSS || DaisyUI || JavaScript || ES6 || React || React Router <br />
                COMFORTABLE: Firebase || REST API || Express JS || MongoDB || React Hook Form <br />
                FAMILIAR: Node.js || JWT || Stripe || TanStack Query || Axios <br />
                TOOLS: Windows ||VS Code || Git & Github || Figma || Netlify || Vercel</p>
            <div className="grid lg:grid-cols-10 grid-cols-5 gap-3 lg:my-10 my-4">
                {
                    skills.map(skill => <img key={skill._id} src={skill.image} className="lg:h-24 h-10 w-10 lg:w-full rounded-xl"></img>)
                }
            </div>
            <div className='text-center py-14'>
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