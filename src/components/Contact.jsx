import {motion} from 'framer-motion'

function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20 text-white">
            <motion.h1 
            initial={{opacity:0,y: -100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1}}
            className="my-10 text-center text-4xl">Contact</motion.h1>
            <div
            className="text-center tracking-tighter">
                <motion.p 
                initial={{opacity:0,x: -100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration: 1}}
                className="my-4">Kolhapur, Maharashtra, India 416212</motion.p>
                <motion.a 
                initial={{opacity:0,x: -100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration: 1}}
                className="text-white">pratikkumbhar008@gmail.com</motion.a>
            </div>
        </div>
    )
}

export default Contact