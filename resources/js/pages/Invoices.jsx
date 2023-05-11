import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'

function Invoices() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChangeSearch = (e) => {
        e.preventDefault();
    }

    return (
        <Layout>
            <div className='container mx-auto px-4 py-4'>
                <div className='py-5'>
                    <form className="w-full mx-auto relative" onSubmit={handleSubmit}>
                        <input onChange={handleChangeSearch} type="text" name="search" id="search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cauta o factura (CUI, Denumire firma, Denumire administrator, Numar telefon)..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <i className='fa fa-search'></i>
                        </button>
                    </form>
                </div>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className='text-xl font-bold text-center text-gray-900 dark:text-white'>
                        Ultimele facturi
                    </h5>
                    <div className='flex flex-col mt-5'>
                        <div className='overflow-x-auto'>
                            <table className='table-auto w-full text-left whitespace-no-wrap'>
                                <thead>
                                    <tr>
                                        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>CUI</th>
                                        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Denumire firma</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='px-4 py-3'>123456789</td>
                                        <td className='px-4 py-3'>Firma 1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Invoices;