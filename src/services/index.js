import {http} from "../utils/axios"
export const sendSignInData = (data) => http.post('/signin', {
    username:data.email,
    password:data.password
})
