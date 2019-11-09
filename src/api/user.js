import axios from '@/libs/api.request'

export const login = ({email, code}) => {
    const data = {email, code}
    return axios.request({url: 'login', data, method: 'post'})
}

export const logout = () => axios.request({url: 'logout', method: 'get'})

export const getUserInfo = email => axios.request({url: '/api/rest/user', method: 'get', params: {email: email}})