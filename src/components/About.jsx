import {motion} from 'framer-motion'

function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity:1,x: 0}}
                initial={{x:100,opacity:0}}
                transition={{duration: 1}}
                className="my-20 text-center text-4xl text-white">About Me</motion.h1>
            <div className="flex flex-wrap">
                <div className="w-full  lg:p-8">
                    <motion.div 
                        initial={{x: -100,opacity: 0}}
                        whileInView={{x: 0,opacity: 1}}
                        transition={{duration: 1}}
                        className="flex justify-center lg:justify-start w-full">
                        <p className="text-white text-center">I’m Roshan , a data analyst with a passion for turning complex datasets into actionable insights. With expertise in data visualization, statistical analysis, and programming languages like Python and SQL, I specialize in uncovering trends and optimizing business decisions. Outside of development,
                            I enjoy Gaming.<br/><br/>Let’s connect and explore how we can bring your ideas to life!</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
