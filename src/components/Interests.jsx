import React from "react"
import Tilt from "react-parallax-tilt"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card select-none">
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />

                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </div>
        </Tilt>
    )
}
const Interests = () => {
    return (
        <>
            <div id="interests" className="pt-[105px]">
                <div variants={textVariant()}>
                    <h2 className={`${styles.sectionHeadText} text-center`}>
                        Interests.
                    </h2>
                </div>
                <div className="mt-20 flex flex-wrap gap-10 justify-center">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            index={index}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(Interests, "")
