import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Question2 } from "./question2";
import { Question3 } from "./question3";
import { Question4 } from "./question4";
import { Question5 } from "./question5";
import { Question6 } from "./question6";
import "../index.css";

export const HorizontalScroll = ({ scrollToInspiration, sendRequestToBackend }) => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({target: targetRef});
    const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"])

    const questionRefs = [
        useRef(null), // question 2 ref, index 0
        useRef(null), // question 3 ref, index 1
        useRef(null), // question 4 ref, index 2
        useRef(null), // question 5 ref, index 3
        useRef(null), // question 6 ref, index 4
    ];

    const scrollToQuestion = (index) => {
        const questionRef = questionRefs[index]
        questionRef.current.scrollIntoView();
    }

    return (
        <>
        <div className="carousel" ref={targetRef}>
            <div className="horizontalQuestionContainer">
                <motion.div className="horizontalQuestions" style={{ x }}>
                    <div ref={questionRefs[0]}>
                        <Question2 scrollToNext={() => scrollToQuestion(1)}/>
                    </div>
                    <div ref={questionRefs[1]}>
                        <Question3 scrollToNext={() => scrollToQuestion(2)} scrollToPrevious={() => scrollToQuestion(0)}/>
                    </div>
                    <div ref={questionRefs[2]}>
                        <Question4 scrollToNext={() => scrollToQuestion(3)} scrollToPrevious={() => scrollToQuestion(1)}/>
                    </div>
                    <div ref={questionRefs[3]}>
                        <Question5 scrollToNext={() => scrollToQuestion(4)} scrollToPrevious={() => scrollToQuestion(2)}/>
                    </div>
                    <div ref={questionRefs[4]}>
                        <Question6 scrollToNext={scrollToInspiration} scrollToPrevious={() => scrollToQuestion(3)} sendRequestToBackend={sendRequestToBackend}/>
                    </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};