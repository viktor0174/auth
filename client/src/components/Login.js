import React, { Component } from 'react'
import { login } from './UserFunction'
import './Login.css';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            errText: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        this.setState({errText: "Подождите, информация обрабатывается..."})
        e.preventDefault()        
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {            
            if(res !== 'UserDoesNotExist') {
                this.setState({errText: "Идентификация пройдена"})                 
                localStorage.setItem('usertoken',res.token)
                //this.props.hostory.push('/profile')
                window.location.href = '/profile';
            }else {                
                this.setState({errText: "Введен неверный логин и/или пароль"})
            }
        })
    }
    render(){
        return (
            <div className='reg' id="reg">
            <h3>Авторизация</h3>
                <span className="errTxt">{this.state.errText}</span>
              <form className="regForm" id ="regForm" noValidate onSubmit={this.onSubmit}>
                <input type="email" name="email" placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <input type="password" name="password"  placeholder="Пароль"
                    value={this.state.password}
                    onChange={this.onChange} />
                <button type="submit">Войти</button>
              </form>
          </div>
        )
    }

}
export default Login