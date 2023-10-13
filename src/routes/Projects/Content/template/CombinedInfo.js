import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"
import HR from "../../../../components/HR/HR"
// import placeholder1 from './placeholder1.jpg'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"

const title = "Template"
export const Thumbnail = (props) => {
    const description = "Longer description goes here"
 
    return (
        // <ThumbnailTemplate title={title} description={description} image={placeholder1} link={props.link}/>
        <div>Delete this</div>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">More info coming soon!</P>
        
            {/* <ImageWithCaption image={placeholder1} number={value()} caption="Template Caption"/> */}
            
        </div>
    )
}