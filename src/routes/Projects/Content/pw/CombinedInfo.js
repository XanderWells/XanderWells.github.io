import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import pratt1 from './pratt1.webp'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"
import H4 from "../../../../components/Text/H4"
import HR from "../../../../components/HR/HR"
import Resume from "../../../Resume/Resume"

const title = "Pratt & Whitney"
export const Thumbnail = (props) => {
    const description = "Manufacturing / Industrial Engineering Intern within the Turbine Manufacturing Facility - Summer 2022"

    return (
        <ThumbnailTemplate title={title} description={description} image={pratt1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            {/* <P className="mb-4 px-2 md:mb-4 lg:mb-8">More info coming soon!</P> */}
        
            <ImageWithCaption image={pratt1} number={value()} caption="Here I am!"/>
            <HR></HR>
            <H4 className="text-center">Resume bullet points:</H4>
            <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>
                    <P> Identified an 80% disparity between actual vs system-reported statuses for 18 PVD machines through extensive system
                    monitoring. Created action plan to improve operator performance by 25%. Automated all associated data entry with VBA</P>
                </li>
                <li>
                    <P>Developed online time logging system, simplifying a tedious, frustrating task and saving 30-60 minutes / user / week</P>
                </li>
                <li>
                    <P>Created VBA interface to assist categorization and transfer of 900+ time standards to online management database</P>
                </li>
                <li>
                    <P>Calculated average lead-times of 230k+ operations across 4 parts & 100+ op. types. Cut runtime from 1 week to 1 hour</P>
                </li>
            </ul>
            <Resume></Resume>
        </div>
    )
}