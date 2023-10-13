import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import cmsc1 from './cmsc1.jpg'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"

const title = "CMSC"
export const Thumbnail = (props) => {
    const description = "Purdue Composites Manufacturing and Simulation Center Research Intern - Jan 2022 to Present"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={cmsc1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">More info coming soon!</P>
        
            <ImageWithCaption image={cmsc1} number={value()} caption="Somehow I keep finding myself up here..."/>
            
        </div>
    )
}