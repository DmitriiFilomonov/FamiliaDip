import axios from "axios";
import React from "react";
import AdminRecord from "./AdminRecord";

class InputPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flag: 1,
            token: ""
        }
    }
    render(){
        if(this.state.flag === 1 )
            return(
                <div className="inputPage__display">
                    <form className="inputPage__container">
                        <div className="input__label">
                            <label className="text__label">Логин: </label>
                            <input type="text" className="input__add" id="input__one" onChange={(e) => this.setState({login: e.target.value})} />
                        </div>
                        <div className="input__label">
                            <label className="text__label">Пароль: </label>
                            <input type="text" className="input__add" id="input__two"  onChange={(e) => this.setState({password: e.target.value})}/>
                        </div>
                        <button onClick={() => {
                        axios.get("http://localhost:8080/auth/login?login=" + 
                        this.state.login +
                        "&pass=" + this.state.password).then((res)=>{
                            this.setState({token: res.data})
                        })
                        this.setState({flag: 2})
                        }}>Войти</button>
                    </form>
                </div>
            )
        else
        return(
            <AdminRecord token = {this.state.token}/>
        )
    }

}

export default InputPage