import React from "react";
import { useGlobalContext } from "../../Helper/context";
import "./about.css";

function About() {
    const { closeNavBar } = useGlobalContext();
    return (
        <section onClick={closeNavBar} className='about_section'>
            <h1 className='about__title'>About</h1>
            <p className='about__desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                totam nesciunt? Ratione id eaque fuga optio at fugiat quos
                quasi, reprehenderit eveniet asperiores perspiciatis sint
                pariatur, nemo non quibusdam atque. Repudiandae dolorem sit
                repellendus officia nihil iusto doloribus ea id neque modi?
                Dolorum autem, necessitatibus sequi eum corporis impedit aliquam
                cupiditate nesciunt. Officiis aspernatur ratione minus maiores
                hic, dicta consectetur!
            </p>
        </section>
    );
}

export default About;
