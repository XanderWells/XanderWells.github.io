import Listing from "../../../../components/Listing/Listing";
import misc5 from "./misc5.jpg"

const PreviewListing = () => {
    const description = "I've worked on a lot of other projects as well. Not all of them deserve a full, dedicated section, but together, the magnitude of these projects adds up to results I am proud of and that I think make a difference. These projects range from being for clubs, for work, or just as a personal project."

    return (
        <Listing title="Misc Projects" description={description} image={misc5} />
    )
}

export default PreviewListing