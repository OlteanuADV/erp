import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../redux/context/AuthContext';

function Header() {
    const [user, setUser] = React.useState({});
    const { t, i18n } = useTranslation();
    const defaultTitle = "ERP";
    const location = useLocation();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);
    const [isThemeOpen, setIsThemeOpen] = React.useState(false);
    const { logout } = React.useContext(AuthContext)

    const pageLinks = [
        {
            "name": "Home",
            "url": "/",
            "icon": "fas fa-home"
        },
        {
            "name": "SEAP",
            "url": "/seap",
            "icon": "fa fa-bank"
        },
        {
            "name": "Invoices",
            "url": "/invoices",
            "icon": "fas fa-file"
        },
        {
            "name": "Other documents",
            "url": "/documents",
            "icon": "fas fa-briefcase"
        },
        {
            "name": "Admin",
            "url": "/admin",
            "icon": "fas fa-user-shield"
        }

    ];

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    }, []);

    const renderLinks = () => {
        return pageLinks.map((page, index) => {
            return (
                <Link key={"pageLink_" + index} to={page.url} className={(page.url === location.pathname) ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} aria-current="page">
                    {(page.icon) ? (<i className={page.icon}></i>) : (<span></span>)} {t(page.name)}
                </Link>
            )
        })
    }

    const handleLogout = () => {
        logout();
        window.location.href = "/login";
    }

    const renderMobileLinks = () => {
        return pageLinks.map((page, index) => {
            return (
                <Link key={"pageLink_" + index} to={page.url} className={(page.url === location.pathname) ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"} aria-current="page">
                    {(page.icon) ? (<i className={page.icon}></i>) : (<span></span>)} {t(page.name)}
                </Link>
            )
        })
    }

    const handleOpenMobile = () => {
        setIsMobileOpen(!isMobileOpen);
    }

    const handleOpenUser = () => {
        setIsOpen(!isOpen);
    }

    const handleOpenTheme = () => {
        setIsThemeOpen(!isThemeOpen);
    }

    const handleChangeTheme = (theme) => {
        document.body.classList.contains('dark') ? document.body.classList.remove('dark') : document.body.classList.add('dark');
    }

    useEffect(() => {
        pageLinks.map((page) => {
            if (page.url == location.pathname) {
                document.title = defaultTitle + " - " + page.name;
            }
        });
    }, [])

    return (
        <nav className="sticky top-0 z-50 bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={handleOpenMobile} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-8 w-auto lg:hidden" src="https://flowbite.com/docs/images/logo.svg" alt="Your Company" />
                            <img className="hidden h-8 w-auto lg:block" src="https://flowbite.com/docs/images/logo.svg" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {renderLinks()}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3 mr-5">
                            <div>
                                <button onClick={handleChangeTheme} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Change theme</span>
                                    <i className='text-white fa fa-brush'></i>
                                </button>
                            </div>
                        </div>
                        <div className="relative ml-3">
                            <div>
                                <button onClick={handleOpenUser} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <i className='text-white fa fa-user'></i>
                                    {/* <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                                </button>
                            </div>
                            <div className={(isOpen) ? "absolute right-0 z-10 mt-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div className="font-medium ">Normal user</div>
                                    <div className="truncate">{ user.email }</div>
                                </div>
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-900 dark:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</Link>
                                {/* <div className="border-t border-gray-100"></div>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-900 dark:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a> */}
                                <div className="border-t border-gray-100"></div>
                                <a href="#" onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-900 dark:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-2">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className={isMobileOpen ? "space-y-1 px-2 pb-3 pt-2" : "hidden"}>
                        {renderMobileLinks()}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;