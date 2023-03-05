import React, { ChangeEvent, useEffect, useState } from 'react'
import { Form, Row, Button, InputGroup } from 'react-bootstrap'
import { getLoginLS } from '../../hooks/auth'
import { getAuth } from '../../store/reducers/usersActions'
import { useAppDispatch } from '../../store/redux-hooks'



const AuthForm = () => {
    const dispatch = useAppDispatch();
    const [login, setLogin] = useState<string | null>(getLoginLS());
    let [pass, setPass] = useState<string>("")  
    const [fullForm, setFullForm] = useState<boolean>(false)
    const [passView, setPassView] = useState<boolean>(false)

    const checkLoginHandler = (login: string | null, pass: string) => {
        if (login === null || pass === null) {
            return 
        }
        dispatch(getAuth(login, pass))
    }

    const loginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const passwordHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }

    const changeViewPassHandler = () => { 
        setPassView(!passView)
    }

    useEffect(() => {
        if(login != null && login?.length >= 2 && pass && pass.length >= 2 ) {
            setFullForm(true)
        } else {
            setFullForm(false)
        }
    }, [login, pass])


    return (
        <>
            <Form as={Row} className="authForm authForm_pad">
            <InputGroup className='p-0 authForm__input'>
                <Form.Control
                            type="text"
                            id="login"
                            aria-describedby="login"
                            placeholder='Логин'
                            onChange={loginHandler}
                        />
            </InputGroup>
            <InputGroup className='p-0 authForm__input'>
                <Form.Control
                            type={passView ? "text" : "password"}
                            id="inputPassword5"
                            aria-describedby="password"
                            placeholder='Пароль'
                            onChange={passwordHandler}
                        />
                <Button variant="outline-secondary" className='authForm__inputImage' id="password" onClick={changeViewPassHandler}>
                    {!passView 
                    ? <span className="material-icons m-0 p-0">
                        visibility
                    </span> 
                    : <span className="material-icons">
                        visibility_off
                    </span>}
                </Button>
            </InputGroup>    
                <Button 
                    className={`authForm__buttonLogin" ${!fullForm ? "authForm__buttonLogin_disabled" : null}`} 
                    variant="outline-secondary"
                    size='lg' 
                    disabled={!fullForm}
                    onClick={() => checkLoginHandler(login, pass)}>Войти</Button>
                <span className='authForm__recoveryText'>Забыли пароль? <a href="/" target="_blank">Восстановить</a></span>
            </Form>
        </>
    )
    
}

export default AuthForm