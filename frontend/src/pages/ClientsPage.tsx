import React from 'react'  
import TabelsNav from '../components/TabelsNav'
import TopNavbar from '../components/Topnavbar'

const ClientsPage = () => { 
    return (
        <div className='clientsPage'>
            <TopNavbar/>
            <TabelsNav/>
            <header>Clients</header>
        </div>
    )
}

export default ClientsPage