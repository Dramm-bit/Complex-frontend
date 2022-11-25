import axios from "axios"
import {http,getHeaders} from "../utils/axios"
export const sendSignInData = (data) => http.post('/auth/signin', data)

export const sendSignUpData = (data) => http.post('/auth/signup',data)


export const getResidences = () => http.get('/residences/list', {
    headers:getHeaders()
})

export const createResidence = (data) => http.post(`/residences`,data, {
    headers:getHeaders()
})
export const createHouse = (residenceId,data) => http.post(`/residences/${residenceId}`,data, {
    headers:getHeaders()
})

export const deleteResidence = (id) => http.delete(`/residences/${id}`, {
    headers:getHeaders()
})
export const deleteHouse = (id,residenceId) => http.delete(`/residences/${residenceId}/house/${id}`, {
    headers:getHeaders()
})

export const getHouses = (id) => http.get(`/residences/${id}/houses`, {
    headers:getHeaders()
})

export const updateHouse = (residenceId,id, data) => http.put(`/residences/${residenceId}/house/${id}`,data,{
    headers:getHeaders()
})


export const getHouseById = (residenceId,id) => http.get(`/residences/${residenceId}/house/${id}`,{
    headers:getHeaders()
})

export const getResidenceById = (residenceId) => http.get(`/residences/edit/${residenceId}`,{
    headers:getHeaders()
})