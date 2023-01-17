import Listing from "../../../../components/Listing/Listing";
import comp1 from "./comp1.jpg"

const PreviewListing = () => {
    const description = "One of the great things about joining Purdue Solar Racing (PSR) is the level at which we work on composites. Through this club, I have had multiple oppportunities to work on projects at the Purdue Composite Manufacturing and Simulation Center (CMSC), which is an opportunity that no other club can offer. Through my dedication, I've become my team's composite lead, and I've also been hired at CMSC as a part-time undergraduate manufacturing and composite research intern."

    return (
        <Listing title="Composite Layups" description={description} image={comp1}/>
    )
}

export default PreviewListing