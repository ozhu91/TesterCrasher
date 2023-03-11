import React from 'react'  
import TabelsNav from '../components/TabelsNav'
import TopNavbar from '../components/Topnavbar'

const EmployeesPage = () => { 
    return (
        <div className='employeesPage'>
            <TopNavbar/>
            <TabelsNav/>
            <header>Empleeyes</header>
        </div>
    )
}

export default EmployeesPage