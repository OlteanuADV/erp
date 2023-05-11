import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'

function Exams() {

    return (
        <Layout>
            <div className='grid grid.cols-1 md:grid-cols-2 gap-1 gap-y-8'>
                <div>
                    <div className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
                        <h3 className='text-center text-lg text-center text-gray-800 dark:text-gray-50'>
                            <i className='fa fa-calendar mr-1'></i>
                            Urmatoarele simulari de etapa
                        </h3>
                        <div className='p-2'>
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-green-500 dark:text-green-900">
                                        Simulare de etapa - dermatologie
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        <i className='fa fa-clock mr-1'></i>
                                        16.04.2023, 12:00
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Simularea consta in rezolvarea a 28 de intrebari, de tip complemten simplu si multiplu, in 28 de minute.
                                    </p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-gray-700">
                                        <i className="fa fa-eye mr-1"></i>
                                        Incepe!
                                    </a>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-red-500 dark:text-red-900">
                                        Simulare de etapa
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        <i className='fa fa-clock mr-1'></i>
                                        14.04.2023, 12:00
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Simularea consta in rezolvarea a 28 de intrebari, de tip complemten simplu si multiplu, in 2 ore.
                                    </p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-gray-700">
                                        <i className="fa fa-eye mr-1"></i>
                                        Rezolva acum!
                                    </a>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-red-500 dark:text-red-900">
                                        Simulare de etapa
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        <i className='fa fa-clock mr-1'></i>
                                        12.04.2023, 12:00
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Simularea consta in rezolvarea a 28 de intrebari, de tip complemten simplu si multiplu, in 2 ore.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
                        <h3 className='text-center text-lg text-center text-gray-800 dark:text-gray-50'>
                            <i className='fa fa-graduation-cap mr-1'></i>
                            Urmatoarele simulari de final de etapa
                        </h3>
                        <div className='p-2'>
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-green-500 dark:text-green-900">
                                        Simulare de etapa - dermatologie
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        <i className='fa fa-clock mr-1'></i>
                                        16.04.2023, 12:00
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Simularea consta in rezolvarea a 28 de intrebari, de tip complemten simplu si multiplu, in 28 de minute.
                                    </p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-gray-700">
                                        <i className="fa fa-eye mr-1"></i>
                                        Inscrieti-va!
                                    </a>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-red-500 dark:text-red-900">
                                        Simulare de etapa
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        <i className='fa fa-clock mr-1'></i>
                                        14.04.2023, 12:00
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Simularea consta in rezolvarea a 28 de intrebari, de tip complemten simplu si multiplu, in 2 ore.
                                    </p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-gray-700">
                                        <i className="fa fa-eye mr-1"></i>
                                        Rezolva acum!
                                    </a>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-red-500 dark:text-red-900">
                                        Simulare de etapa
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        <i className='fa fa-clock mr-1'></i>
                                        12.04.2023, 12:00
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Simularea consta in rezolvarea a 28 de intrebari, de tip complemten simplu si multiplu, in 2 ore.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Exams;