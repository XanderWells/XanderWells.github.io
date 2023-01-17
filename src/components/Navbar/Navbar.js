import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex items-center p-2 mb-2">
            <Logo />
            <Links/>
        </nav>
    )
}

const Logo = () => {
    return (
        <Link to="/">
            <span className="bg-white text-2xl pt-[1px] font-semibold w-11 h-11 rounded-full text-gray-800 flex items-center justify-center select-none">
                <span className="relative left-[2px]">X</span>
                <span>W</span>
            </span>
        </Link>
    )
}

const Links = () => {
    return (
        <div className="ml-auto">
            
        </div>
    )
}

export default Navbar