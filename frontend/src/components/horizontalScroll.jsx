import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Question2 } from "./question2";
import { Question3 } from "./question3";
import { Question4 } from "./question4";
import { Question5 } from "./question5";
import { Question6 } from "./question6";
import "../index.css";


export const HorizontalScroll = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({target: targetRef});
    const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"])


    return (
        <>
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="components" style={{ x }}>
                    <div>
                        <Question2 />
                    </div>
                    <div>
                        <Question3 />
                    </div>
                    <div>
                        <Question4 />
                    </div>
                    <div>
                        <Question5 />
                    </div>
                    <div>
                        <Question6 />
                    </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};