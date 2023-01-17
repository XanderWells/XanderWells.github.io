import ListingContainer from "../../components/Listing/ListingContainer"

import React from "react"
import { Suspense } from "react"

const ProjectsOverview = () => {
    const listingsInOverview = ["rocketfins","softjawmanufacturing","foamcorepaneltesting","compositelayups","miscprojects"]

    const ProjectsToList = listingsInOverview.map((listingName) => {
        return React.lazy(() => import(`./Content/${listingName}/PreviewListing`))
    }) 

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ListingContainer>
                {
                    ProjectsToList.map((ItemToDisplay, index) => {
                        return <ItemToDisplay key={index}/>
                    })
                }
            </ListingContainer>
        </Suspense>
    )
}

export default ProjectsOverview