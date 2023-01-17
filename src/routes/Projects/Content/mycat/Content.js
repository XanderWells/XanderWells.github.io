import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import Image from "../../../../components/Image/Image"
import P from "../../../../components/Text/P"

import andres1 from './andres1.jpg'
import andres2 from './andres2.jpg'
import andres3 from './andres3.jpg'
import andres4 from './andres4.jpg'
import andres5 from './andres5.jpg'
import andres6 from './andres6.jpg'
import andres7 from './andres7.jpg'
import andres8 from './andres8.jpg'
import andres9 from './andres9.jpg'
import andres11 from './andres11.jpg'

const Content = () => {
    return (
        <div>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">Andrés is 10 and a half years old, and we've had him since he was 4. At 15 lbs, it might sound that he's overweight, but actually, he's just...tall... as in, he can reach from the ground all the way to our kitchen counter by standing. But yeah, he's very adorable.</P>
            

            <ImageWithCaption image={andres1} caption="Kitten!"/>
            <ImageWithCaption image={andres2} caption="Laundry hamper i.e. a cat's paradise"/>
            <ImageWithCaption image={andres3} caption="Rollin' around"/>
            <ImageWithCaption image={andres4} caption="Sleepin'"/>
            <ImageWithCaption image={andres5} caption="Quite majestic here"/>
            <ImageWithCaption image={andres6} caption="Him being carried"/>
            <ImageWithCaption image={andres7} caption="All curled up"/>
            <ImageWithCaption image={andres8} caption="Play time!"/>
            <ImageWithCaption image={andres9} caption="I wonder what he's thinking..."/>
         
            <ImageWithCaption image={andres11} caption="His favorite chair"/>
            
        </div>
    )
}

export default Content