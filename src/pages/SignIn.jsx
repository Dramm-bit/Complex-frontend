import Header from "../components/Header/Header";
import React, { useState } from "react";
import { sendSignInData } from "../services";

 
 
export default function SignIn() {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    
    const updateData = (event) => { 
        const name = event.target.name
        const value = event.target.value
        
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const sendData = async (event) => {
        event.preventDefault()
        try {
            const response = await sendSignInData(formData)
            console.log(response)
        } catch (error) {
            console.error(error)
            alert("Ha habido un error")
        }
    }
    return (
        <>

            <Header flag={true} />
            <form onSubmit={sendData} className="form">
                <div className="form__title">Sign in</div>
                <input onChange={updateData} type="email" id="form_email" name="email" placeholder="Email"/>
                <input onChange={updateData} type="password" id="form_password" name="password" placeholder="Password"/>
                <button type="submit" className={"form__button button--standard"}>Login</button>
            </form>
        </>
    );
}
