import React from "react";
import '../../styles/Common.css'
import '../../styles/FormSignIn.css'

export default function Form() {
    return (
        <section className="form">
            <div className="form__content-form">
                <div className="form__title">Sign in</div>
                <input type="text" id="form__Email" name="fEmail" placeholder="Email"></input>
                <input type="text" id="form__Password" name="fPassword" placeholder="Password"></input>
                <button className="form__button button--standard">Login</button>
            </div>
        </section>
    );
}