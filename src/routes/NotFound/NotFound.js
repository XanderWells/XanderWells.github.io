import { Link } from "react-router-dom"
import H1 from "../../components/Text/H1"

const NotFound = () => {
    return (
        <div className="flex items-center justify-center flex-col mt-52">
            
            <H1>404 Unknown URL :(</H1>
            <button className="mt-5 mb-14 text-xl border-[3px] border-orange-400 text-orange-400 p-3 rounded-md hover:bg-orange-400 hover:bg-opacity-10 transition-all"><Link to="/">Return To Home</Link></button>
        </div>
    )
}

export default NotFound