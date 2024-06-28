import { DiJavascript } from "react-icons/di"
import { FaDocker, FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiKubernetes, SiPrisma, SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion";

const iconVariants =(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:'linear',
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
    




const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <TbBrandNextjs className="text-7xl text-slate-300"/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaNodeJs className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <SiTypescript className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div variants={iconVariants(9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <DiJavascript className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div variants={iconVariants(11)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaDocker className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div variants={iconVariants(13)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <SiKubernetes className="text-7xl text-blue-500"/>
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <SiPrisma className="text-7xl text-black"/>
            </div>
        </div>
    </div>
  )
}

export default Tech