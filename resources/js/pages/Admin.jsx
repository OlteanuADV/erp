import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import { Link } from 'react-router-dom';

function Contact() {

    return (
        <Layout>
            <div className='grid grid.cols-1 md:grid-cols-3 gap-1 gap-y-1'>
                <Link to="/admin/exams/stage" className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
                    <h3 className='text-center text-lg text-center text-gray-800 dark:text-gray-50'>
                        <i className='fa fa-calendar mr-1'></i>
                        Administrare simulari de etapa
                    </h3>
                </Link>
                <Link to="/admin/exams/final" className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
                    <h3 className='text-center text-lg text-center text-gray-800 dark:text-gray-50'>
                        <i className='fa fa-graduation-cap mr-1'></i>
                        Administrare simulari de final de etapa
                    </h3>
                </Link>
                <Link to="/admin/prices" className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
                    <h3 className='text-center text-lg text-center text-gray-800 dark:text-gray-50'>
                        <i className='fa fa-dollar-sign mr-1'></i>
                        Administrare preturi
                    </h3>
                </Link>
            </div>
        </Layout>
    );
}

export default Contact;