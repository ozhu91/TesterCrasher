import React, { useEffect } from "react" 
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import TopNavbar from "../../components/Topnavbar"
import { useAppSelector } from "../../store/redux-hooks"

const HomePage = () => {

    const access = useAppSelector(state => state.users.access)
    const navigate = useNavigate()
    function handleClick(link = "") {
        navigate("/" + link);
    }

    useEffect(() => {
        if (!access) {
            navigate("/auth")
        }
    }, [access, navigate])
    if(access) {
        return (
            <div className="homePage">
                <TopNavbar/>
                <div>
                <Link to="/">
                    <Button as="a" variant="success" onClick={()=> handleClick("")}>
                        home page
                    </Button>            
                </Link>
                <Link to="/auth">
                    <Button as="a" variant="primary" onClick={()=> handleClick("auth")}>
                        auth page
                    </Button>
                </Link>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default HomePage