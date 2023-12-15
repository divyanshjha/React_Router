import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//WE DONT USE <A> TAG BCZ IT WILL RELODE THE WHOLE PAGE AGAIN INSTED OF <A> TAG WE USE LINK
// 

function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium 
                            rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg 
                            text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    /* {isActive} IS FOR THE URL IS ACTIVE OR NOT, THE USER ON THE HOME PAGE IT WILL CHANGE TO ORANGE
                                    AND WHEN USER IS NOT ON THE PAGE HE WANTS IT WILL CHANGE TO GRAY
                                    */

                                    /*firing the call back in the class name for the naviLinks bcz of the effect of the isActive */
                                    className={(isActive) =>
                                        ` ${isActive ? "text-gray-700" : "text-orange-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b
                                      border-gray-100 
                                      hover:bg-gray-50 lg:hover:bg-transparent 
                                      lg:border-0 hover:text-orange-700 
                                     only:lg:p-0`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    /* {isActive} IS FOR THE URL IS ACTIVE OR NOT, THE USER ON THE HOME PAGE IT WILL CHANGE TO ORANGE
                                    AND WHEN USER IS NOT ON THE PAGE HE WANTS IT WILL CHANGE TO GRAY
                                    */

                                    /*firing the call back in the class name for the naviLinks bcz of the effect of the isActive */
                                    className={(isActive) =>
                                        ` ${isActive ? "text-gray-700" : "text-orange-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b
                                      border-gray-100 
                                      hover:bg-gray-50 lg:hover:bg-transparent 
                                      lg:border-0 hover:text-orange-700 
                                     only:lg:p-0`}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    /* {isActive} IS FOR THE URL IS ACTIVE OR NOT, THE USER ON THE HOME PAGE IT WILL CHANGE TO ORANGE
                                    AND WHEN USER IS NOT ON THE PAGE HE WANTS IT WILL CHANGE TO GRAY
                                    */

                                    /*firing the call back in the class name for the naviLinks bcz of the effect of the isActive */
                                    className={(isActive) =>
                                        ` ${isActive ? "text-gray-700" : "text-orange-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b
                                      border-gray-100 
                                      hover:bg-gray-50 lg:hover:bg-transparent 
                                      lg:border-0 hover:text-orange-700 
                                     only:lg:p-0`}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Github"
                                    /* {isActive} IS FOR THE URL IS ACTIVE OR NOT, THE USER ON THE HOME PAGE IT WILL CHANGE TO ORANGE
                                    AND WHEN USER IS NOT ON THE PAGE HE WANTS IT WILL CHANGE TO GRAY
                                    */

                                    /*firing the call back in the class name for the naviLinks bcz of the effect of the isActive */
                                    className={(isActive) =>
                                        ` ${isActive ? "text-gray-700" : "text-orange-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b
                                      border-gray-100 
                                      hover:bg-gray-50 lg:hover:bg-transparent 
                                      lg:border-0 hover:text-orange-700 
                                     only:lg:p-0`}>
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header
