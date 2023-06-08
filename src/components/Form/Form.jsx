import { useState } from "react"
import styles from "./Form.module.css"
import { validateEmail, validatePassword } from "./validation";

export default function Forms({login}) {

    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
    })
    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setForm({...form, [property]: value})
        if(property === 'email'){
        validateEmail({...form, [property]: value}, setError, error)
        } else if(property === 'password'){
        validatePassword({...form, [property]: value}, setError, error)
        }
    }
    function submitHandler(event) {
        event.preventDefault();
        login(form.email, form.password)
    }
    return (
        <div>
            <div>
                <img src="https://rickandmortyapi.com/icons/icon-512x512.png" alt=""/>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email">Email... </label>
                        <input 
                        className={error.email ? styles.error : styles.success}
                        type="text" 
                        name="email" 
                        value={form.email} 
                        onChange={handleChange}/>
                        <span> {error.email}</span>
                    </div>
                    <div>
                        <label htmlFor="password">Password... </label>
                        <input 
                        className={error.password ? styles.error : styles.success}
                        type="text" 
                        name="password" 
                        value={form.password} 
                        onChange={handleChange}/>
                        <span> {error.password}</span>
                    </div>
                    <div>
                        <button type="submit" id="botonSub">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}