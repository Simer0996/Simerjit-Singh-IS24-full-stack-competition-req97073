import { Link } from "react-router-dom"

const PrimaryNav = () => {
    return (
        <div
            className="sticky w-full m-auto block z-10 ease-in duration-300 border-b-[0.1px] border-gray-500" >
            <div className="max-w-[98%] m-auto flex justify-center items-center p-.5 ">
                <ul className="hidden sm:flex">
                    <li className="p-4 hover:text-[blue] text-xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 hover:text-[blue] text-xl ">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div >

    )
}

export default PrimaryNav