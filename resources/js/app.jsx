import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './config/i18n';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Invoices from "./pages/Invoices"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoutes"

import { AuthProvider } from "./redux/context/AuthContext"
import axios from 'axios';




function Main() {
    const [user, setUser] = React.useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

    const registerServiceWorker = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(function (registration) {
                initiateServiceWorker()
            }).catch(function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        }
    }

    const initiateServiceWorker = () => {
        if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
            console.log('Notifications aren\'t supported.')
            return
        }
        if (Notification.permission === 'denied') {
            console.log('The user has blocked notifications.')
            return
        }
        if (!('PushManager' in window)) {
            console.log('Push messaging isn\'t supported.')
            return
        }
        navigator.serviceWorker.ready.then(registration => {
            registration.pushManager.getSubscription()
                .then(subscription => {
                    if (!subscription) {
                        return
                    }
                    updateSubscription(subscription)
                })
                .catch(e => {
                    console.log('Error during getSubscription()', e)
                })
        })
    }

    const subscribe = () => {
        navigator.serviceWorker.ready.then(registration => {
            const options = { userVisibleOnly: true }
            const vapidPublicKey = "BHs3wv6V5yrh3AJijeU6WJiIJvHOLrpsu6zvcPc0Nr4vMv_yRIrf4wPECv0dnkKB6b0kaegm5wRWHnpPV3GXQPk"
            console.log(vapidPublicKey)
            if (vapidPublicKey) {
                options.applicationServerKey = urlBase64ToUint8Array(vapidPublicKey)
            }
            registration.pushManager.subscribe(options)
                .then(subscription => {
                    updateSubscription(subscription)
                })
                .catch(e => {
                    if (Notification.permission === 'denied') {
                        console.log('Permission for Notifications was denied')
                    } else {
                        console.log('Unable to subscribe to push.', e)
                    }
                })
        })
    }

    const urlBase64ToUint8Array = (base64String) => {
        const padding = '='.repeat((4 - base64String.length % 4) % 4)
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/')
        const rawData = window.atob(base64)
        const outputArray = new Uint8Array(rawData.length)
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i)
        }
        return outputArray
    }

    const unsubscribe = () => {
        navigator.serviceWorker.ready.then(registration => {
            registration.pushManager.getSubscription().then(subscription => {
                if (!subscription) {
                    return
                }
                subscription.unsubscribe().then(() => {
                    deleteSubscription(subscription)
                }).catch(e => {
                    console.log('Unsubscription error: ', e)
                })
            }).catch(e => {
                console.log('Error thrown while unsubscribing.', e)
            })
        })
    }

    const updateSubscription = (subscription) => {
        const key = subscription.getKey('p256dh')
        const token = subscription.getKey('auth')
        const contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0]

        const data = {
            endpoint: subscription.endpoint,
            publicKey: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
            authToken: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
            contentEncoding
        }

        axios.post('/api/subscriptions', data)
    }

    const deleteSubscription = (subscription) => {
        axios.post('/api/subscriptions/delete', { endpoint: subscription.endpoint })
    }

    React.useEffect(() => {
        if(user)
            registerServiceWorker()
    }, []);

    const routes = {
        'home': {
            path: '/',
            element: <Home subscribeButton={subscribe} />
        },
        'invoices': {
            path: '/invoices',
            element: <Invoices />
        },
        'not-found': {
            path: '*',
            element: <NotFound />
        }
    }

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {Object.keys(routes).map((key, index) => {
                        return (
                            <Route key={index} path={routes[key].path} element={<ProtectedRoute user={user} isAdmin={routes[key].isAdmin ? routes[key].isAdmin : false}> {routes[key].element} </ProtectedRoute>} />
                        )
                    })}
                    <Route path="/login" element={<Login />} />
                    {/* <Route exact path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />    
                    <Route path="/login" element={<Login />} />
                    <Route element={<NotFound />} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOMClient.createRoot(document.getElementById('app')).render(<Main />);
}