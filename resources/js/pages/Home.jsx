import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function Home({ subscribeButton }) {
    const { t, i18n } = useTranslation();
    const notifyMe = () => {
        console.log("trying notify");
        axios.post('/api/notifications').catch(error => console.log(error))
    }

    const enableNotify = () => {
        subscribeButton()
    }

    return (
        <Layout>
            {/* <button onClick={enableNotify} type="button" className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Enable notify
            </button>
            <button onClick={notifyMe} type="button" className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Notify me
            </button> */}
            <div className='grid grid.cols-1 md:grid-cols-2 gap-1 gap-y-4'>
                <div>
                    <h3 className='text-center text-lg text-center text-gray-800 dark:text-gray-50'>
                        <i className='fa fa-calendar mr-1'></i>
                        Urmatoarele simulari de etapa
                    </h3>
                    <ol className="mt-16 relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-green-500 dark:text-green-900">
                                Simulare de final de etapa
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                <i className='fa fa-clock mr-1'></i>
                                16.04.2023, 12:00
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Simularea consta in rezolvarea a 200 de intrebari, de tip complemten simplu si multiplu, in 4 ore.
                            </p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-gray-700">
                                <i className="fa fa-eye mr-1"></i>
                                Inscrieti-va
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
                <div>
                    <h3 className='text-center text-lg text-center text-gray-800 dark:text-gray-50'>
                        <i className='fa fa-mortar-board mr-1'></i>
                        Urmatoarele cursuri
                    </h3>
                    <ol className="mt-16 relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-green-500 dark:text-green-900">
                                Obstetrica 2
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                <i className='fa fa-clock mr-1'></i>
                                16.04.2023, 12:00
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Cursul este predat de domnul doctor rezident Ionut Popescu.
                            </p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-200 focus:text-blue-700 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-gray-700">
                                <i className="fa fa-eye mr-1"></i>
                                Inscrieti-va
                            </a>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-red-500 dark:text-red-900">
                                Dermatologie 2
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                <i className='fa fa-clock mr-1'></i>
                                14.04.2023, 12:00
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Cursul este predat de doamna doctor rezident Maria Ionescu.
                            </p>
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
            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://rezidentiat-medicina.ro/images/poza001.jpeg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Rezolva o simulare!</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Poate cel mai greu pas este să lucrezi sub presiune într-o perioadă scurtă de timp! Rezolvă o simulare din capitolele alese si vezi nivelul de la care pornești!
                        </p>
                        {/* button centered */}
                        <button className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Rezolva o simulare!
                            <i className="fa fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://rezidentiat-medicina.ro/images/SimulariDeFinalDeEtapa.jpeg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Simulari de etapa si de final de etapa!</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Organizam in fiecare saptamana simulari pentru a te mentine conectat si pentru a iti oferi un program de studiu. Cu un cont premium, poti avea acces la toata simularile de etapa anterioare!
                        </p>
                        {/* button centered */}
                        <button className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Simulari de etapa
                            <i className="fa fa-edit ml-1"></i>
                        </button>
                        <button className="w-full mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Simulari de final de etapa
                            <i className="fa fa-pen ml-1"></i>
                        </button>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://rezidentiat-medicina.ro/images/parcurgeToataMateria.jpeg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Simulari de etapa si de final de etapa!</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Ai ocazia să treci prin cele mai mici amănunte, chiar de la prima parcurgere a materiei! Nu te alarma, știm că este multa informație, dar te ajutăm să o parcurgi in detaliu!
                        </p>
                        {/* button centered */}
                        <button className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Testeaza-te
                            <i className="fa fa-edit ml-1"></i>
                        </button>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default Home;