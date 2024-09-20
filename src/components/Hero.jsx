import Pic from '../assets/HERO-GIF.webp'
import { motion } from "framer-motion"

const container = (delay)=>({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

function Hero() {
    return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        whileInView="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">Pratik Kumbhar</motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">FullStack Developer</motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        whileInView="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-white">Hi, I’m a passionate Full Stack Developer with expertise in both front-end and back-end technologies. I love creating seamless and efficient web applications that deliver great user experiences. My goal is to combine my technical skills with a keen eye for design to build innovative solutions.</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{x:100 ,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration: 1, delay: 1.2}}
                        src={Pic} alt="Hero Img" className='w-70 h-96 rounded-2xl bg-transparent'/>
                </div>
            </div>
        </div>
    </div>
    )   
}

export default Hero
