import React from "react"
import { Suspense } from "react"
import { Link } from "react-router-dom"
import P from "../../components/Text/P"
import H4 from "../../components/Text/H4"

import Loading from "../../components/Loading/Loading"
import H5 from "../../components/Text/H5"

const SectionOverview = (props) => {
    const section = props.section

    const ThumbnailsToList = section.urlsInOverview.map((listingName) => {
        return (React.lazy(() => {
            return Promise.all([
                import(`./Content/${listingName}/Thumbnail`),
                new Promise(resolve => setTimeout(resolve, 50))
            ])
                .then(([moduleExports]) => moduleExports);
        })
        )
    })


    return (
        <Suspense fallback={<Loading />}>
            <div className="">
                <div className="md:px-4 mt-1 flex items-center sticky top-[3.7rem] md:top-5 md:ml-12 lg:top-7 md:z-[60] lg:ml-12 md:mr-48 z-40 bg-gray-800">
                    <span className="text-orange-400 font-extrabold text-xl md:text-2xl mx-2 mb-3 md:mb-3 lg:mb-6 lg:mx-2 select-none">{">>"}</span>

                    <H4 className="text-lg underline">{section.name}</H4>
                    <P className="text-sm mb-2 ml-1 md:mb-3 lg:mb-5">{` - ${section.overviewDescription}`}</P>
                    <span className="text-orange-400 font-extrabold text-xl md:text-2xl mx-2 mb-3 md:mb-3 lg:mb-6 lg:mx-2 select-none">{"<<"}</span>
                </div>
                <div>
                {
                    ThumbnailsToList.map((Thumbnail, index) => {
                        return <Thumbnail key={index} link={`/${section.sectionURL}/${section.urlsInOverview[index]}`} />
                    })
                }
                </div>
                
                <Link className="text-orange-400 underline hover:text-orange-500 transition-all select-none" to={`/${section.sectionURL}`}>
                    <H4 className="text-center font-bold mb-10">{section.seeAllDescription}</H4>
                </Link>
            </div>
        </Suspense>
    )
}

export default SectionOverview