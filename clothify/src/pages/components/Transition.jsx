import { motion } from "framer-motion"


const Transition =(OgComponent)=>{
    return()=>(
        <>
        <OgComponent/>
        <motion.div className="slide-in  fixed top-0 left-0 w-[100%] h-[100vh] bg-white  transform origin-bottom dark:bg-black "  initial={{scaleY:0}} animate={{scaleY:0}} exit={{scaleY:1}} transition={{duration: 2,ease:[0.22,1,0.36,1]}}/>
        <motion.div  className="slide-out fixed top-0 left-0 w-[100%] h-[100vh] bg-[white] transform origin-top dark:bg-stone-950 " initial={{scaleY:1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration: 2,ease:[0.22,1,0.36,1]}}/>
        </>
    )
}
export default Transition