import React, { createContext, useEffect, useReducer } from 'react'
import authReducer from '../reducers/authReducer'
import { LOGIN, LOGOUT } from '../actions/authActions'
import axios from 'axios'

import { useCookies } from 'react-cookie'


import { getUser } from '../../config/requests'
export const AuthContext = createContext()

const defaultState = {
    isLoading: false,
    isSignout: false,
    isLogin: false,
    token: null,
    user: {}
}

export const AuthProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(authReducer, defaultState)
    const [cookies, setCookie, removeCookie] = useCookies()

    useEffect(() => {
        bootstrapAsync()
    }, [])

    const bootstrapAsync = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            axios.defaults.headers['Accept'] = 'application/json'

            const payload = { token }

            getUser().then((response) => {
                payload.user = response.data
                dispatch({ ...LOGIN, payload })
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    const login = async (payload) => {
        const { token } = payload

        if (token) {
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            axios.defaults.headers['Accept'] = 'application/json'

            getUser().then((response) => {
                payload.user = response.data
                dispatch({ ...LOGIN, payload })
                localStorage.setItem('user', JSON.stringify(response.data))
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    const logout = () => {
        dispatch({ ...LOGOUT })
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    const authContext = React.useMemo(() => ({ bootstrapAsync, login, logout }), [])

    return (
        <AuthContext.Provider value={Object.assign({}, state, authContext)}>
            {props.children}
        </AuthContext.Provider>
    )
}