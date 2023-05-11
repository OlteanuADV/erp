import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'

function Subscriptions() {

    return (
        <Layout>
            {/* <button onClick={enableNotify} type="button" className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Enable notify
            </button>
            <button onClick={notifyMe} type="button" className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Notify me
            </button> */}
            <h3 className='text-3xl text-center text-gray-800 dark:text-gray-50'>
                <i className='fa fa-info'></i> Contul premium iți oferă posibilitatea de a rezolva toate grilele existente pe site, de a face simulari asemănătoare celor de la Examenul de Rezidentiat si multe alte facilități.
            </h3>
            <hr className='my-4' />
            <div className='mt-5 grid grid-cols-1 md:grid-cols-4 gap-3'>
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl text-center font-medium text-gray-500 dark:text-gray-400">+1 LUNA</h5>
                    <div class="text-center text-gray-900 dark:text-white">
                        <span class="text-5xl font-extrabold tracking-tight">70</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"> RON</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la simulari premium</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la informatii </span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la cursuri </span>
                        </li>
                    </ul>
                    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Aboneaza-te!</button>
                </div>
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl text-center font-medium text-gray-500 dark:text-gray-400">+3 LUNI</h5>
                    <div class="text-center text-gray-900 dark:text-white">
                        <span class="text-5xl font-extrabold tracking-tight">170</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"> RON</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la simulari premium</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la informatii </span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la cursuri </span>
                        </li>
                    </ul>
                    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Aboneaza-te!</button>
                </div>
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl text-center font-medium text-gray-500 dark:text-gray-400">+6 LUNI</h5>
                    <div class="text-center text-gray-900 dark:text-white">
                        <span class="text-5xl font-extrabold tracking-tight">325</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"> RON</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la simulari premium</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la informatii </span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la cursuri </span>
                        </li>
                    </ul>
                    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Aboneaza-te!</button>
                </div>
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl text-center font-medium text-gray-500 dark:text-gray-400">+12 LUNI</h5>
                    <div class="text-center text-gray-900 dark:text-white">
                        <span class="text-5xl font-extrabold tracking-tight">650</span>
                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"> RON</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la simulari premium</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la informatii </span>
                        </li>
                        <li class="flex space-x-3">
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> acces la cursuri </span>
                        </li>
                    </ul>
                    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Aboneaza-te!</button>
                </div>
            </div>
        </Layout>
    );
}

export default Subscriptions;