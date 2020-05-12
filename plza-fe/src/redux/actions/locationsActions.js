import * as types from '../types'
import API from "../../utils/API";


export const locationLogin = ({username, password}) => dispatch => {
    dispatch({type: types.LOGIN_START, payload: true})
    API.post('auth/location/login', {username, password})
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.location})
            window.location.replace('/')
        })
        .catch(err => {
            dispatch({type: types.LOGIN_FAIL, payload: false})
        })
}