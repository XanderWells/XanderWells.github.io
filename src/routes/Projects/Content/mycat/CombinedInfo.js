import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import andres1 from './andres1.webp'
import andres2 from './andres2.webp'
import andres3 from './andres3.webp'
import andres4 from './andres4.webp'
import andres5 from './andres5.webp'
import andres6 from './andres6.webp'
import andres7 from './andres7.webp'
import andres8 from './andres8.webp'
import andres9 from './andres9.webp'
import andres11 from './andres11.webp'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"
const title = "My Cat"
export const Thumbnail = (props) => {
    const description = "My family has an adorable cat named Andrés. I feel the need to spread his cuteness everywhere"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={andres1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">Andrés is 10 and a half years old, and we've had him since he was 4. At 15 lbs, it might sound that he's overweight, but actually, he's just...tall... as in, he can reach from the ground all the way to our kitchen counter by standing. But yeah, he's very adorable</P>
            

            <ImageWithCaption image={andres1} number={value()} caption="Kitten!"/>
            <ImageWithCaption image={andres2} number={value()} caption="Laundry hamper i.e. a cat's paradise"/>
            <ImageWithCaption image={andres3} number={value()} caption="Rollin' around"/>
            <ImageWithCaption image={andres4} number={value()} caption="Sleepin'"/>
            <ImageWithCaption image={andres5} number={value()} caption="Quite majestic here"/>
            <ImageWithCaption image={andres6} number={value()} caption="Him being carried"/>
            <ImageWithCaption image={andres7} number={value()} caption="All curled up"/>
            <ImageWithCaption image={andres8} number={value()} caption="Play time!"/>
            <ImageWithCaption image={andres9} number={value()} caption="I wonder what he's thinking..."/>
         
            <ImageWithCaption image={andres11} number={value()} caption="His favorite chair"/>
            
        </div>
    )
}