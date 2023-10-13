import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import lux1 from './lux1.png'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"
import H1 from "../../../../components/Text/H1"
import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
const title = "LUX"
export const Thumbnail = (props) => {
    const description = "Purdue Solar Racing's upcoming car, intended to race from one side of the US to the other on a single starting charge in the 2024 American Solar Challenge. Currently at the near final design phase, I am responsible for chassis and mold design, managing progress for all other composites designs, and ensuring all composite structures integrate properly with the rest of the car"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={lux1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>     
            <H1 className="text-center">{title}</H1>   
            <ImageWithCaption image={lux1} number={value()} caption="Template Caption"/>
            
        </div>
    )
}