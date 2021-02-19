import React from 'react'
import styles from "./Card.module.css"
function Card(props) {
    const { user } = props
    return (
        <div className = {styles.container}>
            <div className = {styles.holder}><span>Name:</span><span>{user.name}</span></div>
            <div className = {styles.holder}><span>E-mail:</span><span>{user.email}</span></div>
            <div className = {styles.holder}><span>Username:</span><span>{user.username}</span></div>
            <div className = {styles.holder}><span>Phone No:</span><span>{user.phone}</span></div>
            <div className = {styles.holder}><span>Name:</span><span>{user.name}</span></div>
            <div className = {styles.updateButton}>{props.children}</div>
        </div>
    )
}

export default Card
