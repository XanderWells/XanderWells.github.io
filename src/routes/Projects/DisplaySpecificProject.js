import { useParams, Link } from "react-router-dom"
import { Suspense } from "react"
import React from "react"

import P from "../../components/Text/P"

const DisplaySpecificProject = () => {

    const { projectName } = useParams()

    const Content = React.lazy(() => import(`./Content/${projectName}/Content`))
    const ContentHeader = React.lazy(() => import(`./Content/${projectName}/Header`))

    return (
        <div className="flex flex-col ">

            <Link className="text-orange-400 underline hover:text-orange-500 transition-all 
            ml-4 mb-2 md:ml-6 md:mb-3 lg:ml-8 lg:mb-4" to="/">
                <P>← Back To Home</P>
            </Link>

            <Suspense fallback={<div>Loading...</div>}>
                <ContentHeader />
                <div className="bg-gray-900 md:rounded lg:rounded-md mb-4 lg:mb-8 p-4 lg:p-8 shadow-lg shadow-gray-900">
                    < Content />
                </div>
            </Suspense>
        </div>
    )
}

export default DisplaySpecificProject