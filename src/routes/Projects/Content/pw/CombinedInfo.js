import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import pratt1 from './pratt1.jpg'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"

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
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">More info coming soon!</P>
        
            <ImageWithCaption image={pratt1} number={value()} caption="Here I am!"/>
            
        </div>
    )
}