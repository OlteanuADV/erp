import React from 'react';

import Header from './Header';
import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container mx-auto px-4 py-4'>
                <nav className="p-5 pb-10 flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <i className='fa fa-home mr-2'></i>
                                Acasa
                            </Link>
                        </li>
                        <li className="inline-flex items-center text-gray-700 dark:text-gray-400">
                            /
                        </li>
                        <li className="inline-flex items-center">
                            <Link to="/seap" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <i className='fa fa-bank mr-2'></i>
                                SEAP
                            </Link>
                        </li>
                        <li className="inline-flex items-center text-gray-700 dark:text-gray-400">
                            /
                        </li>
                        <li className="inline-flex items-center">
                            <Link to="/invoices" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <i className='fa fa-file mr-2'></i>
                                Invoices
                            </Link>
                        </li>
                        <li className="inline-flex items-center text-gray-700 dark:text-gray-400">
                            /
                        </li>
                        <li className="inline-flex items-center">
                            <Link to="/documents" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <i className='fa fa-file-alt mr-2'></i>
                                Other documents
                            </Link>
                        </li>
                    </ol>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default Layout;