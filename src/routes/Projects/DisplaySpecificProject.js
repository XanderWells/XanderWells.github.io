import { useParams, Link } from "react-router-dom"

const DisplaySpecificProject = () => {

    const { projectName } = useParams()

    return (
        <div>
            This will display an specific project with name:

            {projectName} 
            <div>
                <Link to="/">Go Back Home</Link>
            </div>
        </div>
    )
}

export default DisplaySpecificProject