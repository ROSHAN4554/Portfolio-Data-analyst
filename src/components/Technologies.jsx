import {animate, motion} from 'framer-motion';
import Pic from '../assets/tailwind-logo.png';

const iconvariants = (duration)=>({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
        }
    }
})

function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl text-white">Technologies</motion.h1>
            <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap justify-center items-center gap-4">
                <motion.div
                    variants={iconvariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <i className="fa-brands fa-react text-7xl text-cyan-400"></i>
                </motion.div>
                <motion.div 
                    variants={iconvariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <i className="fa-brands fa-node text-7xl text-green-500"></i>
                </motion.div>
                <motion.div 
                    variants={iconvariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <i className="fa-brands fa-js text-7xl text-yellow-400"></i>
                </motion.div>
                <motion.div 
                    variants={iconvariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <i className="fa-brands fa-java  text-7xl text-orange-400"></i>
                </motion.div>
                <motion.div 
                    variants={iconvariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <i className="fa-brands fa-envira fa-rotate-by text-7xl text-green-900 mongo"></i>
                </motion.div>
                <motion.div 
                    variants={iconvariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <i className="fa-brands fa-bootstrap text-7xl text-violet-950"></i>
                </motion.div>
                <motion.div 
                    variants={iconvariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img className='tailwind' src={Pic} alt='tailwind' width="75px" height="90px" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
