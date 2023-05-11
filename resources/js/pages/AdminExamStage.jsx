import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Notification from '../components/Notification'
import { Link } from 'react-router-dom';
import { admin } from '../config/requests';

function Contact() {
    const [showNewExamForm, setShowNewExamForm] = React.useState(false);
    const [message, setMessage] = React.useState('')
    const [exams, setExams] = React.useState([])

    const getCurrentDate = () => {
        return "01/01/1999"
    }

    const getAllExams = () => {
        admin.stage.get.all().then(res => {
            setExams(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        getAllExams();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        admin.stage.add({
            name: e.target.exam_name.value,
            duration: e.target.exam_duration.value,
            date: e.target.exam_date.value,
            start_time: e.target.exam_start_time.value,
            end_time: e.target.exam_end_time.value,
            description: e.target.exam_description.value,
        }).then(res => {
            setMessage('Exam added successfully.');
            showNewExamForm(false);
        }).catch(err => {
            console.log(err);
        })
    }

    const renderNewExamForm = () => {
        return (
            <div className='mt-5 bg-white dark:bg-gray-800 shadow p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-1 gap-y-1'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="exam_name" id="exam_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlFor="exam_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exam name...</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="number" name="exam_duration" id="exam_duration" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlFor="exam_duration" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exam duration(minutes)...</label>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-1 gap-y-1'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" name="exam_date" id="exam_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                            <label htmlhtmlFor="exam_date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exam date...</label>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-1 gap-y-1'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="time" name="exam_start_time" id="exam_start_time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                            <label htmlhtmlFor="exam_start_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exam date...</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="time" name="exam_end_time" id="exam_end_time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                            <label htmlhtmlFor="exam_end_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exam date...</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea name="exam_description" id="exam_description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                        <label htmlhtmlFor="exam_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exam description...</label>
                    </div>
                    <button type="submit" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Adauga simulare de etapa
                    </button>
                </form>
            </div>
        )
    }


    const handleAddExam = () => {
        setShowNewExamForm(!showNewExamForm);
    }

    return (
        <Layout>
            <button onClick={handleAddExam} className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Adauga o noua simulare de etapa
            </button>
            {showNewExamForm && renderNewExamForm()}
            <div className="pt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nume
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descriere
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Utilizatori
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actiuni
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((exam, index) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {exam.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {exam.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        0
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => handleDeleteExam(exam.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                                            Sterge
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {message && <Notification message={message} />}
        </Layout>
    );
}

export default Contact;