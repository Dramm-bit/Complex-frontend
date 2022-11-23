import axios from "axios"
import {http,getHeaders} from "../utils/axios"
export const sendSignInData = (data) => http.post('/signin', {
    username:data.email,
    password:data.password
})

export const sendSignUpData = (data) => http.post('/signup', {
    username:data.email,
    password:data.password
})


export const getResidences = () => http.get('/residences', getHeaders())

export const createResidence = (data) => http.post(`/residences`,data, getHeaders())
export const createHouse = (data) => http.post(`/houses`,data, getHeaders())

export const deleteResidence = (id) => http.delete(`/residences/${id}`, getHeaders())
export const deleteHouse = (id) => http.delete(`/residences/{residence_id}/house/${id}`, getHeaders())

export const getHouses = (id) => http.get(`/residences/${id}}/houses`, getHeaders())



