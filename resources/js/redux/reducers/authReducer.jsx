import { isUndefined } from 'lodash'

const reducer = {
    'LOGIN': (prevState, payload) => {
        return {
            ...prevState,
            isLogin: true,
            isLoading: false,
            token: payload.token,
            user: payload.user
        }
    },
    'LOGOUT': (prevState, payload) => {
        return {
            ...prevState,
            isLogin: false,
            isLoading: false,
            token: null,
            user: {}
        }
    }
}

export default (prevState, action) => {
    if (!isUndefined(reducer[action.type])) {
        return reducer[action.type](prevState, action.payload)
    }
}