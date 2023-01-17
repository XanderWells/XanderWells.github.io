import comp1 from "./comp1.jpg"
import comp2 from "./comp2.jpg"
import comp3 from "./comp3.jpg"
import comp4 from "./comp4.jpg"
import comp5 from "./comp5.jpg"
import comp6 from "./comp6.jpg"
import comp7 from "./comp7.jpg"
import comp8 from "./comp8.jpg"
import comp10 from "./comp10.jpg"
import comp11 from "./comp11.jpg"
import comp12 from "./comp12.jpg"
import comp13 from "./comp13.jpg"
import comp14 from "./comp14.jpg"
import comp15 from "./comp15.jpg"

import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import HR from "../../../../components/HR/HR"
import H3 from "../../../../components/Text/H3"

const Content = () => {
    return (
        <div>
            <H3>These are some of my composite projects. Note that due to the sticky nature of working with epoxy resin I haven't been able to capture as many photos as I wish I could, since I can't risk ruining my phone.</H3>
            <HR />
            <ImageWithCaption image={comp1} caption="This was one of the first layups I did - a Purdue license plate. This was done at CMSC using prepreg patchwork on an aluminum mold, cured under vacuum in an autoclave - a great learning experience."/>
            <HR />
            <H3 className="text-center">CMS Particle Detector Mount Prototype:</H3>
            <ImageWithCaption image={comp2} caption="This is a prototype of a part that will be used for the Compact Muon Solenoid at CERN in Switzerland. The final part will be the full length of this mold."/>
            <ImageWithCaption image={comp3} caption="Using prepreg lets you cut your cloth ahead of time and store it indefinitely in a freezer. There is a cut sheet of everything needed, and the plies are all numbered to avoid confusion."/>
            <ImageWithCaption image={comp4} caption="When it comes time to perform the layup, the backing is peeled off and the fiber is stuck onto the mold. This unidiretional prepreg has very little epoxy in it, which adds an extra layer of difficulty by making it difficult to stick the fiber to the mold."/>
            <HR />
            <H3 className="text-center">Test Layups for PSR Car Aeroshell:</H3>
            <ImageWithCaption image={comp15} caption="This is the mold for our current PSR Car, Apollo. This mold is worth ~$30k of sponsor materials and will require thousands worth of carbon fiber, release compound, vacuum bagging, and so on. As such, we are practicing using a smaller mold that was used beforehand by researchers at CMSC."/>
            <ImageWithCaption image={comp5} caption="We start by 'painting' epoxy on the fiber, which creates a pseudo prepreg at a fraction of the cost."/>
            <ImageWithCaption image={comp6} caption="We then transfer the fiber to the mold."/>
            <ImageWithCaption image={comp7} caption="After tacking down the outermost side, we peel back the release film."/>
            <ImageWithCaption image={comp8} caption="It is then a slow process of aligning the fiber and getting it to shear towards the smaller arc. "/>
            <ImageWithCaption image={comp11} caption="After awhile though, we reach a point where the fiber matches the desired surface very closely and can then be pressed into the mold."/>
            <ImageWithCaption image={comp12} caption="The final step is to apply a vacuum to press the fiber tightly against the mold and squeeze out any air bubbles. This process involves release film to prevent the vacuum bag from sticking to the epoxy, as well as an in-between layer of breather film, which helps the vacuum permeate from the pump to the entire mold."/>
            <ImageWithCaption image={comp13} caption="A day later and with a buddy on the camera, I can begin the debagging process."/>
            <ImageWithCaption image={comp14} caption="Looking at the final result, the fiber is properly saturated with epoxy. However, the creases and crinkles from the vacuum bag transferred to the surface of the part, which isn't ideal. In the future, we hope to solve this by adding more layers of breather material in order to hopefully smooth these creases out."/>
        </div>
    )
}

export default Content