import React from "react"
import Tilt from "react-parallax-tilt"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { award } from "../constants"

const AwardCard = ({ name, description, tags, image }) => {
    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl select-none"
                />
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 select-none">
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    )
}

const Award = () => {
    return (
        <>
            <div id="award">
                <h2 className={`${styles.sectionHeadText}`}>Award.</h2>

                <div className="w-full flex">
                    <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        Berikut merupakan Penghargaan berupa sertifikat yang
                        saya dapatkan setelah saya selesai mengikuti
                        pelatihan-pelatihan Pemrograman Web secara Daring untuk
                        meningkatkan skill saya dalam dunia Pemrograman Web:
                    </p>
                </div>

                <div className="mt-20 flex flex-wrap gap-7 justify-center">
                    {award.map((award) => (
                        <AwardCard key={`award-${award.name}`} {...award} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(Award, "award")
