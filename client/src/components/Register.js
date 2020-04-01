import React, {Component} from 'react'
import { register } from './UserFunction'

class Register extends Component {
    constructor(){
        super();
        this.state = {            
            email: '',
            password: '',
            username: '',
            family_name: '',
            sex: '',
            birthday: '' 
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
            password: this.state.password,
            username: this.state.username,
            family_name: this.state.family_name,
            sex: this.state.sex,
            birthday: this.state.birthday      
        }
        register(user).then(res => {
            console.log(res)
           if(res !== 'UserAlreadyEexists') {
                this.setState({errText: "Вы зарегистрированы"})                 
                localStorage.setItem('usertoken',res.token)
                //this.props.hostory.push('/profile')
                window.location.href = '/profile';
            }else {                
                this.setState({errText: "Пользователь с таким email уже зарегистрирован"})
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
                onChange={this.onChange} />
            <input type="password" name="password"  placeholder="Пароль"
                value={this.state.password}
                onChange={this.onChange} />                
            <input type="text" name="username" placeholder="Имя"
                value={this.state.username}
                onChange={this.onChange}/>
            <input type="text" name="family_name" placeholder="Фамилия"
                value={this.state.family_name}
                onChange={this.onChange}/>
            <select name="sex"  onChange={this.onChange}>              
                <option value='not'>Выберите пол</option>
                <option value="m" >Мужской</option>
                <option value="f" >Женский</option>
            </select>
            <input type="date" name="birthday"  placeholder="Дата рождения"
                value={this.state.birthday}
                onChange={this.onChange}/>
            <button type="submit">Зарегистрироваться</button>
            </form>
          </div>
        )
    }

}
export default Register