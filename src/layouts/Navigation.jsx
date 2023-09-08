import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navigation = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <header className="container bg-primary-color relative w-full flex justify-center   items-start md:items-center flex-col md:flex-row md:bg-black">
                <nav className=" relative w-full flex justify-between items-center p-4 max-w-[1140px]">
                    <div>
                        <h4 className="text-white md:text-primary-color text-xl font-semibold md:font-normal md:text-3xl uppercase">
                            Hotel Galaxy
                        </h4>
                    </div>

                    <div className=" md:hidden block">
                        {showNavbar ? (
                            <button
                                className=" flex justify-center items-center"
                                onClick={() => {
                                    setShowNavbar(
                                        (prevShowNavbar) => !prevShowNavbar,
                                    );
                                }}
                            >
                                <RxCross2 className=" text-white text-3xl" />
                            </button>
                        ) : (
                            <button
                                className=" flex justify-center items-center"
                                onClick={() => {
                                    setShowNavbar(
                                        (prevShowNavbar) => !prevShowNavbar,
                                    );
                                }}
                            >
                                <RxHamburgerMenu className=" text-white text-3xl" />
                            </button>
                        )}
                    </div>

                    {/* ===================navigation bar================================= */}
                    <div className=" hidden md:flex justify-center items-center gap-8 ">
                        <ul className=" text-white flex justify-center items-center gap-5 text-xl font-semibold font-['Josefin_Sans'] cursor-pointer">
                            <li>Home</li>
                            <li>About</li>
                            <li>Rooms</li>
                            <li>Meetings & Events</li>
                            <li>Contact</li>
                        </ul>
                        <button className=" bg-primary-color px-6 py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide">
                            Book Now
                        </button>
                    </div>
                    {/* ===================navigation bar================================= */}
                </nav>
            </header>
            {/* =================toggle navigation bar===================== */}
            {showNavbar && (
                <div className=" relative w-full bg-[#f8f8f8f] container">
                    <ul className=" w-full flex flex-col justify-center items-start text-lg  font-semibold font-['Josefin_Sans'] cursor-pointer">
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-gray-200 hover:font-bold">
                            Home
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-gray-200 hover:font-bold">
                            About
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-gray-200 hover:font-bold">
                            Rooms
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-gray-200 hover:font-bold">
                            Meetings & Events
                        </li>
                        <li className="w-full p-4 border-b border-solid border-b-[#ddd] hover:bg-gray-200 hover:font-bold">
                            Contact
                        </li>
                    </ul>
                </div>
            )}
            {/* =================toggle navigation bar===================== */}
        </>
    );
};

export default Navigation;