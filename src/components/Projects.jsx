import { PROJECTS } from "../constants"
import {motion} from "framer-motion"

function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
            initial={{opacity:0,y: -100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1}}
            className="my-20 text-center text-4xl text-white">Projects</motion.h1>
            <div >
                {PROJECTS.map((project,index)=>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        initial={{opacity:0,x: -100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl">
                            <h6 className="text-white mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech,index)=>(
                                <span key={index} className="mr-2 p-1 rounded bg-neutral-900 text-purple-900 text-sm font-medium">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects