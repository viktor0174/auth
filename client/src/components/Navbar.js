import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        // e.proventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render(){
        const loginRegLink = (
            <ul className="menu">
                <li>
                    <Link to="/login">
                        Войти
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        Зарегистрироваться
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="menu">
                <li>
                    <Link to="/profile">
                        Профиль
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={this.logOut.bind(this)}>
                        Выйти
                    </Link>
                </li>
            </ul>
        )

        return (
            <nav>               
                <div id="navbar1">
                    <ul>
                        <li>
                            <Link to="/">
                                Главная
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)