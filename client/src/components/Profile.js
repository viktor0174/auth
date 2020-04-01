import React, {Component} from 'react'
import Jwt from 'jsonwebtoken';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',           
            username:'',
            family_name: '',
            sex: '',
            birthday: ''
        }
    }
    componentDidMount() {        
        const token = localStorage.usertoken        
        const decoded = Jwt.verify(token, 'secretos')
        this.setState({
            email: decoded.email,
            password: decoded.password,
            username: decoded.username,
            family_name: decoded.family_name,
            sex: decoded.sex,
            birthday: decoded.birthday
        })        
        if(this.state.sex == 'f') this.setState({sex: 'Женщина'})
        else this.setState({sex: 'Мужчина'})
    }
    render(){
        return (
            <div className="profile">
                <table>
                    <tbody>
                    <tr>
                        <td>Логин</td>
                        <td>{this.state.email}</td>
                    </tr>
                    <tr>
                        <td>Пароль</td>
                        <td>{this.state.password}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{this.state.username}</td>
                    </tr>
                    <tr>
                        <td>Фамилия</td>
                        <td>{this.state.family_name}</td>
                    </tr>
                    <tr>
                        <td>Пол</td>
                        <td>{this.state.sex}</td>
                    </tr>
                    <tr>
                        <td>Дата рождения</td>
                        <td>{this.state.birthday}</td>
                    </tr>
                    </tbody>
                </table>              
            </div>
        )
    }
}
export default Profile