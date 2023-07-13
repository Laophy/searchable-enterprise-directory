import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { ContactCard } from '../../components/ContactCard'

export function User() {
    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000/api/users/${id}`).then(res => res.json()).then((user) => {
            setUser(user)
        })
    }, [id])

    return (
        <ContactCard user={user}/>
    )
}