import React from 'react'
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import Form from "../Form/Form"
import Card from "../Card/Card"
import { fetchUsers } from "../../actions/actionCreators"
import styles from "./Board.module.css"

function Board(props) {
    const [ modal, setModal ] = useState(false)
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const isLoading = useSelector(state => state.isLoading)
    const [ID, setID] = useState(1)
    useEffect(() => {
        dispatch(fetchUsers())
    },[])
    const toggle = () => setModal(!modal)
    return (
        isLoading ? 
        <div>Loading...</div>
        :
        <div>
            {users.map(item => {
                return <div style = {{display: "flex",justifyContent: "center"}} key = {item.id}>
                            <Card user = {item}>
                              <span>
                                  <Button color="primary" value = {item.id} onClick = {(e) => {
                                      toggle()
                                      setID(e.target.value)
                                  }}>update</Button>
                              </span>
                            </Card>
                            {/* <span>{item.name}</span> */}
                            
                        </div>
            })}
            <div>
            <Modal isOpen={modal} toggle={toggle} className = {props.className}>
                <ModalHeader className = {styles.modalHeader} toggle={toggle}>Update User</ModalHeader>
                <ModalBody>
                    <Form userId = {parseInt(ID)} toggle = {toggle}/>
                </ModalBody>
            </Modal>
            </div>
        </div>
    )
}

export default Board
