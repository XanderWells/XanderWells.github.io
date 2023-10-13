import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import bidc1 from './bidc1.jpg'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"
import H1 from "../../../../components/Text/H1"
import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";

const title = "BIDC"
export const Thumbnail = (props) => {
    const description = "Purdue Bechtel Innovation Design Center Manufacturing Teaching Assistant - Oct 2021 to Nov 2022"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={bidc1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">More info coming soon!</P>
        
            <ImageWithCaption image={bidc1} number={value()} caption="Haas VF4 w/ Trunion"/>
            
        </div>
    )
}