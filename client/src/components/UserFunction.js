import axios from 'axios'

export const register = newUser => {
    return axios
    .post("users/register", {
        email: newUser.email,
        password: newUser.password,        
        username: newUser.username,
        family_name: newUser.family_name,
        sex: newUser.sex,
        birthday: newUser.birthday
    })
    .then(res => {
        return res.data
    })
    .catch(err => {      
        return (err)
     })
}

export const login = user => {
    return axios
    .post("users/login", {
        email: user.email,
        password: user.password 
    })
    .then(res => {
        return res.data
    })
    .catch(err => {      
       return (err)
    })

}