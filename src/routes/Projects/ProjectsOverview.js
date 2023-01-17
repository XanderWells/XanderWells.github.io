import ListingContainer from "../../components/Listing/ListingContainer"

import React from "react"
import { Suspense } from "react"

import Loading from "../../components/Loading/Loading"

const ProjectsOverview = () => {
    const listingsInOverview = ["rocketfins","softjawmanufacturing","foamcorepaneltesting","compositelayups","miscprojects","mycat"]

    // const ProjectsToList = listingsInOverview.map((listingName) => {
    //     return React.lazy(() => import(`./Content/${listingName}/PreviewListing`))
    // }) 


    const ProjectsToList = listingsInOverview.map((listingName) => {
        return (React.lazy(() => {
            return Promise.all([
                import(`./Content/${listingName}/PreviewListing`),
                new Promise(resolve => setTimeout(resolve, 175))
            ])
                .then(([moduleExports]) => moduleExports);
        })
        )
    }) 

    
    return (
        <Suspense fallback={<Loading />}>
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