import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { Link } from "react-router-dom";

function Home({ subscribeButton }) {
    const { t, i18n } = useTranslation();
    const notifyMe = () => {
        console.log("trying notify");
        axios.post('/api/notifications').catch(error => console.log(error))
    }

    const enableNotify = () => {
        subscribeButton()
    }

    const renderChart = () => {
        console.log("rendering chart");
        const ctx = document.getElementById('myChart');
        const config = {
            type: 'line',
            data: {
                labels: ['Decembrie', 'Ianuarie', 'Februaire', 'Martie', 'Aprilie', 'Mai'],
                datasets: [{
                    label: 'RON',
                    data: ["50000", "34500", "13000", "2000", "10000", "7150"],
                    borderWidth: 1,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: false,
                        text: ''
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Value'
                        },
                        suggestedMin: -10,
                        suggestedMax: 200
                    }
                }
            },
        };
        new Chart(ctx, config);
    }

    React.useEffect(() => {
        renderChart()
    }, []);

    return (
        <Layout>
            {/* <button onClick={enableNotify} type="button" className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Enable notify
            </button>
            <button onClick={notifyMe} type="button" className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Notify me
            </button> */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-4'>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">9 Facturi emise in luna Mai</h5>
                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">3 dintre acestea au fost create de dumneavoastra</p>
                </div>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">15.000 RON Incasati in aceasta luna.</h5>
                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">8.900 RON au fost incasati de dumneavoastra</p>
                </div>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">0 Clienti noi adusi firmei</h5>
                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">0 dintre acestia au fost adusi de dumneavoastra</p>
                </div>
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-4'>
                <div className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                    <canvas id="myChart"></canvas>
                </div>
                <div>
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex items-center justify-between mb-4">
                            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Ultimele facturi create</h5>
                            <Link to="/invoices" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                Vezi tot
                            </Link>
                        </div>
                        <div class="flow-root">
                            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <i className='fa fa-file-alt text-white fa-2x'></i>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                DDD TOP CONFORT EXPERT S.R.L.
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                RO40673286 - Bucuresti, Sector 1, Str. Ion Mihalache, Nr. 123, Bl. 1, Sc. 1, Et. 1, Ap. 1
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            3.000 RON
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <i className='fa fa-file-alt text-white fa-2x'></i>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                DDD TOP CONFORT EXPERT S.R.L.
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                RO40673286 - Bucuresti, Sector 1, Str. Ion Mihalache, Nr. 123, Bl. 1, Sc. 1, Et. 1, Ap. 1
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            3.000 RON
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <i className='fa fa-file-alt text-white fa-2x'></i>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                DDD TOP CONFORT EXPERT S.R.L.
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                RO40673286 - Bucuresti, Sector 1, Str. Ion Mihalache, Nr. 123, Bl. 1, Sc. 1, Et. 1, Ap. 1
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            3.000 RON
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <i className='fa fa-file-alt text-white fa-2x'></i>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                DDD TOP CONFORT EXPERT S.R.L.
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                RO40673286 - Bucuresti, Sector 1, Str. Ion Mihalache, Nr. 123, Bl. 1, Sc. 1, Et. 1, Ap. 1
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            3.000 RON
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;