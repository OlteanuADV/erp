import React from 'react'
import { useTranslation } from 'react-i18next';
import { getUser, otpRequest, verifyOtpRequest, googleRedirect, facebookRedirect } from '../config/requests'
import Notification from '../components/Notification';
import { AuthContext } from '../redux/context/AuthContext'


function Home() {
    const { t, i18n } = useTranslation();
    const [showLogin, setShowLogin] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [showOtp, setShowOtp] = React.useState(false)
    const [otp, setOtp] = React.useState('')
    const { login } = React.useContext(AuthContext)
    const inputRef = React.useRef([])


    const handleShowLogin = () => {
        setShowLogin(!showLogin);
    }

    const handleLoginGoogle = () => {
        googleRedirect()
    }

    const handleLoginFacebook = () => {
        facebookRedirect()
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        otpRequest(email).then((response) => {
            console.log(response.data);
            setMessage('OTP sent to ' + email);
            setShowOtp(true);
        }).catch((error) => {
            console.log("error", error.response.data.message);
            setMessage(error.response.data.message);
        });
    }

    const handleSubmitOTP = (e) => {
        e.preventDefault()
        setOtp(inputRef.current[1].value + inputRef.current[2].value + inputRef.current[3].value + inputRef.current[4].value + inputRef.current[5].value + inputRef.current[6].value)

        verifyOtpRequest(email, otp).then(async (response) => {
            console.log(response.data)
            await login({ token: response.data.token })
            getUser().then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data))
                window.location = '/'
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log("error", error.response?.data.message);
            setMessage(error.response.data.message);
        });
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeOTP = (e) => {
        setOtp(e.target.value);
    }

    const handleFocus = (e) => {
        const id = parseInt(e.target.id);
        const input = inputRef.current[id + 1];

        if(id != 6)
            input.focus();
        else
            setOtp(inputRef.current[1].value + inputRef.current[2].value + inputRef.current[3].value + inputRef.current[4].value + inputRef.current[5].value + inputRef.current[6].value)
    }

    return (
        <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="mt-48 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    rezidentiat-medicina.ro
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                    {t("Acest site este dedicat rezidentilor de medicina si a celor care doresc sa devina medicin rezidenti. Aici gasiti informatii despre desfasurarea examenului de rezidentiat si nu numai.")}
                </p>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {t("Sign in to your account")}
                    </h1>
                    {showLogin ? (
                        <div>
                            {showOtp ? (
                                // <form className="w-full max-w-md mx-auto relative" onSubmit={handleSubmit}>
                                //     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                //         <i className='fa fa-key mt-0 ml-1 text-gray-500 dark:text-gray-400'></i>
                                //     </div>
                                //     <input onChange={handleChangeEmail} type="email" name="email" id="email"  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder={t("OTP") + "..."} required />
                                //     <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("Send OTP")}</button>
                                // </form>
                                <form onSubmit={handleSubmitOTP}>
                                    <div className="flex flex-row justify-center text-center px-2 mt-5">
                                        <input type="hidden" value={otp}/>
                                        <input className="m-2 border h-10 w-10 text-center form-control text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" ref={el => inputRef.current[1] = el} id='1' onChange={handleFocus} maxLength="1" />
                                        <input className="m-2 border h-10 w-10 text-center form-control text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" ref={el => inputRef.current[2] = el} id='2' onChange={handleFocus} maxLength="1" />
                                        <input className="m-2 border h-10 w-10 text-center form-control text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" ref={el => inputRef.current[3] = el} id='3' onChange={handleFocus} maxLength="1" />
                                        <input className="m-2 border h-10 w-10 text-center form-control text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" ref={el => inputRef.current[4] = el} id='4' onChange={handleFocus} maxLength="1" />
                                        <input className="m-2 border h-10 w-10 text-center form-control text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" ref={el => inputRef.current[5] = el} id='5' onChange={handleFocus} maxLength="1" />
                                        <input className="m-2 border h-10 w-10 text-center form-control text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" ref={el => inputRef.current[6] = el} id='6' onChange={handleFocus} maxLength="1" />
                                    </div>
                                     <button type="submit" className="mt-5 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                        {t("Login or resend OTP")}
                                        <i className='ml-2 -mr-1 mt-1 w-5 h-5 fa fa-envelope'></i>
                                    </button>
                                </form>
                                
                            ) : (
                                <form className="w-full max-w-md mx-auto relative" onSubmit={handleSubmit}>
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className='fa fa-envelope mt-0 ml-1 text-gray-500 dark:text-gray-400'></i>
                                    </div>
                                    <input onChange={handleChangeEmail} type="email" name="email" id="email" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t("Your email") + "..."} required />
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("Send OTP")}</button>
                                </form>

                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <button type="button" onClick={handleShowLogin} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                {t("Login using email")}
                                <i className='ml-2 -mr-1 mt-1 w-5 h-5 fa fa-envelope'></i>
                            </button>
                            <button type="button" onClick={handleLoginGoogle} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#DB4437] hover:bg-[#df2d1d] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                {t("Login using")} Google
                                <i className='ml-2 -mr-1 mt-1 w-5 h-5 fa-brands fa-google'></i>
                            </button>
                            <button type="button" onClick={handleLoginFacebook} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#3b5998] hover:bg-[#274c99] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                {t("Login using")} Facebook
                                <i className='ml-2 -mr-1 mt-1 w-5 h-5 fa-brands fa-facebook'></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
            {message && <Notification message={message} />}
        </section>
        // <section className="h-screen bg-gray-50 dark:bg-gray-900">
        //     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        //         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        //             <img className="w-8 h-8 mr-2" src="logo.svg" alt="logo" />
        //             rezidentiat-medicina.ro
        //         </a>
        //         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        //             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        //                 <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        //                     {t("Sign in to your account")}
        //                 </h1>
        //                 {showLogin ? (
        //                     <div>
        //                         {showOtp ? (

        //                         <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitOTP}>
        //                             <div>
        //                                 <span  className="text-center block mb-2 text-sm font-medium text-green-800 dark:text-white">{message}</span>
        //                                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your OTP received on email")}</label>
        //                                 <input onChange={handleChangeOTP} type="number" name="otp" id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t("OTP") + "..."} required />
        //                             </div>
        //                             <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("Login or resend OTP")}</button>
        //                         </form>) : (

        //                         <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        //                             <div>
        //                                 <span className="text-center block mb-2 text-sm font-medium text-green-800 dark:text-white">{message}</span>
        //                                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your email")}</label>
        //                                 <input onChange={handleChangeEmail} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t("Your email") + "..."} required />
        //                             </div>
        //                             <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("Send OTP")}</button>
        //                         </form>)}
        //                     </div>
        //                 ) : (
        //                     <button onClick={handleShowLogin} type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("Login using email")}</button>
        //                 )}
        //                 <button onClick={handleLoginGoogle} type="submit" className="w-full text-white bg-[#DB4437] hover:bg-[#df2d1d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{t("Login using")} Google</button>
        //                 <button onClick={handleLoginFacebook} type="submit" className="w-full text-white bg-[#3b5998] hover:bg-[#274c99] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{t("Login using")} Facebook</button>
        //             </div>
        //         </div>
        //     </div>
        //     {message && <Notification message={message} />}
        // </section>
    );
}

export default Home;