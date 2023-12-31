import React from "react"
import Tilt from "react-parallax-tilt"

import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { me } from "../assets"

const About = () => {
    return (
        <div id="about">
            <div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>About.</h2>
            </div>

            <div
                variants={fadeIn("", "", 0.1, 1)}
                className="flex items-center min-[1000px]:flex-row flex-col-reverse"
            >
                <p className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
                    Hai! Saya Fayzil. Berusia 30 tahun dan memiliki pengalaman
                    selama 5 tahun di bidang pemasaran. Selain itu, saya
                    memiliki keahlian di bidang IT karena basic saya di dunia
                    IT.
                    <br /> Saya sangat menikmati bekerja dalam tim dan juga bisa
                    berkerja secara individu.
                    <br /> Sebagai seorang Junior Front End Web Developer, saya
                    berdedikasi untuk menciptakan pengalaman pengguna yang
                    menarik dan responsif. Keahlian saya dalam HTML, CSS,
                    JavaScript serta penggunaan Framework dan Librarynya
                    memungkinkan saya menerjemahkan desain menjadi kode yang
                    fungsional dan estetis. <br /> Saya bersemangat untuk terus
                    mengembangkan diri dan memberikan kontribusi pada
                    proyek-proyek menarik berikutnya.
                    <br /> Ayo terhubung dan jelajahi bagaimana kita bisa
                    bekerja sama.
                </p>

                <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
                    <div className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                        <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
                            <img
                                src={me}
                                title="Fayzil"
                                alt="MyPhoto"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about")
