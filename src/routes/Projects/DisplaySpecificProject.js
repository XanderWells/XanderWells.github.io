import { useParams, Link } from "react-router-dom"
import { Suspense } from "react"
import React from "react"

import P from "../../components/Text/P"
import Loading from "../../components/Loading/Loading"

const DisplaySpecificProject = () => {

    const { projectName } = useParams()

    //const Content = React.lazy(() => import(`./Content/${projectName}/Content`))
    const ContentHeader = React.lazy(() => import(`./Content/${projectName}/Header`))

    const Content = React.lazy(() => {
        return Promise.all([
            import(`./Content/${projectName}/Content`),
            new Promise(resolve => setTimeout(resolve, 500))
        ])
            .then(([moduleExports]) => moduleExports);
    });


    return (
        <div className="flex flex-col ">

            <Link className="text-orange-400 underline hover:text-orange-500 transition-all 
            ml-4 mb-2 md:ml-6 md:mb-3 lg:ml-8 lg:mb-4" to="/">
                <P>← Back To Home</P>
            </Link>

            <Suspense fallback={<Loading />}>
                <ContentHeader />
                <div className="bg-gray-900 md:rounded lg:rounded-md mb-4 lg:mb-8 p-4 lg:p-8 shadow-lg shadow-gray-900">
                    < Content />
                </div>
            </Suspense>
            <Link className="text-orange-400 underline hover:text-orange-500 transition-all 
            ml-4 mb-4 md:ml-6 md:mb-5 lg:ml-8 lg:mb-7" to="/">
                <P>← Back To Home</P>
            </Link>
        </div>
    )
}

export default DisplaySpecificProject