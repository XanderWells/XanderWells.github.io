import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import Image from "../../../../components/Image/Image"

import andres1 from './andres1.jpg'
import andres2 from './andres2.jpg'
import andres3 from './andres3.jpg'
import andres4 from './andres4.jpg'
import andres5 from './andres5.jpg'
import andres6 from './andres6.jpg'
import andres7 from './andres7.jpg'
import andres8 from './andres8.jpg'
import andres9 from './andres9.jpg'
import andres10 from './andres10.jpg'
import andres11 from './andres11.jpg'

const Content = () => {
    return (
        <div>
            Andrés photos:

            <ImageWithCaption image={andres1}/>
            <ImageWithCaption image={andres2}/>
            <ImageWithCaption image={andres3}/>
            <ImageWithCaption image={andres4}/>
            <ImageWithCaption image={andres5}/>
            <ImageWithCaption image={andres6}/>
            <ImageWithCaption image={andres7}/>
            <ImageWithCaption image={andres8}/>
            <ImageWithCaption image={andres9}/>
            <ImageWithCaption image={andres10}/>
            <ImageWithCaption image={andres11}/>
            
        </div>
    )
}

export default Content