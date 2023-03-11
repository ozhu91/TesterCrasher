import React, { useState } from 'react'  
import TabelsNav from '../components/TabelsNav'
import TopNavbar from '../components/Topnavbar'

const ClientsPage = () => { 

    const [clients] = useState<Array<any>>([
        {
            name: "Борисова Екатерина Александровна",
            address: "Адрес: ул. Верхняя Масловка, 54, Москва",
            email: "Email: Borisova@gmail.com",
            phone: "Телефон: +7(800) 000 00 00",
            group: "1",
        },
        {
            name: "Борисова Екатерина Александровна",
            address: "Адрес: ул. Верхняя Масловка, 54, Москва",
            email: "Email: Borisova@gmail.com",
            phone: "Телефон: +7(800) 000 00 00",
            group: "1",
        },
        {
            name: "Борисова Екатерина Александровна",
            address: "Адрес: ул. Верхняя Масловка, 54, Москва",
            email: "Email: Borisova@gmail.com",
            phone: "Телефон: +7(800) 000 00 00",
            group: "1",
        },
        {
            name: "Борисова Екатерина Александровна",
            address: "Адрес: ул. Верхняя Масловка, 54, Москва",
            email: "Email: Borisova@gmail.com",
            phone: "Телефон: +7(800) 000 00 00",
            group: "1",
        },
        {
            name: "Борисова Екатерина Александровна",
            address: "Адрес: ул. Верхняя Масловка, 54, Москва",
            email: "Email: Borisova@gmail.com",
            phone: "Телефон: +7(800) 000 00 00",
            group: "1",
        },
        {
            name: "Борисова Екатерина Александровна",
            address: "Адрес: ул. Верхняя Масловка, 54, Москва",
            email: "Email: Borisova@gmail.com",
            phone: "Телефон: +7(800) 000 00 00",
            group: "1",
        }
    ])


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
                <div className='clientsPage__clientList clientList'>
                    {
                        clients.map((client, key) => {
                            return (
                                <div className='card' key={key}>
                                    <span className='card__name'>{client.name}</span>
                                    <span className='card__address'>{client.address}</span>
                                    <span className='card__email'>{client.email}</span>
                                    <span className='card__phone'>{client.phone}</span>
                                    <span className='card__group'>{client.group}</span>
                                    <div className="card__buttons">
                                        <span className="material-icons card__button card__button_edit">
                                            border_color
                                        </span>
                                        <span className="material-icons card__button card__button_delete">
                                            delete_outline
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className='clientsPage__pagination pagination'>
                    <span className="material-icons pagination__arrow pagination__arrow_left">
                    arrow_back_ios
                    </span>
                    <span className="pagination__page pagination__page_active">1</span>
                    <span className="pagination__page">2</span>
                    <span className="pagination__page">3</span>
                    <span className="pagination__page">4</span>
                    <span className="pagination__page">...</span>
                    <span className="pagination__page">20</span>
                    <span className="material-icons pagination__arrow pagination__arrow_right">
                        arrow_forward_ios
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ClientsPage