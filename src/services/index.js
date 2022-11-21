import {http,getHeaders} from "../utils/axios"
export const sendSignInData = (data) => http.post('/signin', {
    username:data.email,
    password:data.password
})

export const sendSignUpData = (data) => http.post('/signup', {
    username:data.email,
    password:data.password
})


export const getResidences = () => http.get('/api/v1/residences', getHeaders())

export const createResidence = (data) => http.post(`/api/v1/residences`,data, getHeaders())
export const createHouse = (data) => http.post(`/api/v1/houses`,data, getHeaders())

export const deleteResidence = (id) => http.delete(`/api/v1/residences/${id}`, getHeaders())
export const deleteHouse = (id) => http.delete(`/api/v1/residences/{residence_id}/house/${id}`, getHeaders())

export const getHouses = (id) => http.get(`/api/v1/residences/${id}}/houses/`, getHeaders())


