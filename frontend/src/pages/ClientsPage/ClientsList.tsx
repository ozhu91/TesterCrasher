import { useState } from "react"

const ClientsList = () => {
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
    )
}

export default ClientsList