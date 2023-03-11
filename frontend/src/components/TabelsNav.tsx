import { Link } from "react-router-dom"

const TabelsNav = () => {
    return (
        <div className="homeTabs">
            <Link to="/clients" className="homeTabs__button">
                    Клиенты
            </Link>
            <Link to="/groups" className="homeTabs__button">
                    Группы
            </Link>
            <Link to="/employees" className="homeTabs__button">
                    Сотрудники
            </Link>
        </div> 
    )
}

export default TabelsNav