import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import AuthForm from '../components/auth/AuthForm'
import { useAppSelector } from '../store/redux-hooks'

const AuthPage = () => {
    const access = useAppSelector(state => state.users.access)
    const navigate = useNavigate()

    useEffect(() => {
        if (access) {
            navigate("/")
        }
    }, [access, navigate])

    if(!access) {
        return (
            <>
                <div className='authPage'>
                    <header className='authPage__header authPage__header_marginBottom'>Address BookApp</header>
                    <AuthForm/>
                </div>
            </>
            
        )
    } else {
        return <></>
    }
    
}

export default AuthPage