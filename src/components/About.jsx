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
                        <p className="text-white text-center">I’m Pratik, a Full Stack Developer with a passion for crafting responsive and engaging web applications. With experience in both front-end technologies like React and Vue.js and back-end frameworks like Node.js and Django, I enjoy building end-to-end solutions that enhance user experiences.
I believe in the importance of clean code and collaborative problem-solving. Constantly seeking to learn and grow, I stay updated with the latest industry trends and technologies. Outside of development, I enjoy Gaming.<br/><br/>Let’s connect and explore how we can bring your ideas to life!</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About