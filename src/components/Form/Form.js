import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from "../../actions/actionCreators"
import styles from "./Form.module.css"

function Form(props) {
    const { userId, toggle } = props
    const [ user, setUser ] = useState({})
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ phone, setPhone ] = useState()
    const [ username, setUsername ] = useState()
    const [ website, setWebsite ] = useState()
    useEffect(() => {
        const user = users.find(item =>{
            return item.id == userId
          })
        setUser(user)
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setUsername(user.username)
        setWebsite(user.website)
    },[userId])
    const submit = (e) => {
        e.preventDefault()
        dispatch(updateUser({
          ...user,
          name,
          email,
          phone,
          username,
          website
        }))
        toggle()
        alert("update successful")
        console.log("user inside form: ", users)
    } 
    return (
        <>
            <form className = {styles.form} onSubmit = {submit}>
                <div className = {styles.inputHolder}>
                    <div className = {styles.label}>E-mail:</div>
                    <input value = {email} placeholder = "E-mail" onChange = {(e) => setEmail(e.target.value)} type = "email" className = {styles.input}/>
                </div>

                <div className = {styles.inputHolder}>
                    <span className = {styles.label}>Name:</span>
                    <input value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Name" type = "text" className = {styles.input}/>
                </div>

                <div className = {styles.inputHolder}>
                    <span className = {styles.label}>Phone No:</span>
                    <input value = {phone} placeholder = "Phone" onChange = {(e) => setPhone(e.target.value)} type = "text" className = {styles.input}/>
                </div>

                <div className = {styles.inputHolder}>
                    <span className = {styles.label}>Username:</span>
                    <input value = {username} placeholder = "User Name" onChange = {(e) => setUsername(e.target.value)} type = "text" className = {styles.input}/>
                </div>

                <div className = {styles.inputHolder}>
                    <span className = {styles.label}>Website:</span>
                    <input value = {website} placeholder = "Website" onChange = {(e) => setWebsite(e.target.value)} type = "text" className = {styles.input}/>
                </div>

                <div className = {styles.submit}>
                    <input className = "btn btn-primary" type = "submit" value = "Submit" />
                </div>
            </form>
        </>
    )
}

export default Form
