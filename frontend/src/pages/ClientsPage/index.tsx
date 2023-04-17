import React, { useEffect } from 'react'  
import { useNavigate } from 'react-router'
import Pagination from '../../components/Pagination'
import TabelsNav from '../../components/TabelsNav'
import TopNavbar from '../../components/Topnavbar'
import { useAppSelector } from '../../store/redux-hooks'
import ClientsList from './ClientsList'


const ClientsPage = () => { 
    const access = useAppSelector(state => state.users.access)
    const navigate = useNavigate()

    useEffect(() => {
        if (!access) {
            navigate("/auth")
        }
    }, [access, navigate])
    return (
        <div className='clientsPage'>
            <TopNavbar/>
            <TabelsNav/>
            <div className="clientsPage__content">
                <button className="clientsPage__buttonAdd buttonAdd">
                    Добавить 
                    <span className="material-icons buttonAdd__icon">
                        add_circle_outline
                    </span>
                </button>
                <ClientsList />
                <Pagination />
            </div>
        </div>
    )
}

export default ClientsPage