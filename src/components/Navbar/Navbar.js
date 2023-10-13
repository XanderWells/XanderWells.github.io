import { Link } from "react-router-dom"
import { useContext } from "react"
import NumberContext from "../Contexts/NumberContext"

const Navbar = () => {
    return (
        <nav className="z-50 sticky top-0 flex items-center p-2 mb-2 select-none bg-gray-800">
            <Logo />
            <Links/>
            <ToggleNumbers/>
        </nav>
    )
}

const Logo = () => {
    return (
        <Link to="/">
            <span className="bg-white text-2xl pt-[1px] font-semibold w-11 h-11 md:w-12 md:h-12 md:m-1 lg:w-14 lg:h-14 lg:text-3xl lg:m-2 rounded-full text-gray-800 flex items-center justify-center shadow-sm shadow-white">
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

const ToggleNumbers = () => {
    const {num, setNum} = useContext(NumberContext)
    const handleChange = () => {
        setNum(!num)
    }

    return (
        <div className="flex items-center">
            
            <label className=" inline-flex items-center cursor-pointer">
                
            

            <p className="text-xs text-center mr-2">Numbered<br />Images</p>
                
                <div className="relative">
                <input type="checkbox" checked={num} onChange={handleChange} className="sr-only peer" />
                <div className="shadow shadow-black w-11 h-7 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full duration-500
                 after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-gray-200 after:border after:shadow after:shadow-black
                   after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </div>
                
                
            </label>

        </div>
    )
}

export default Navbar