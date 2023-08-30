import React from "react"
import SelectSpec from "./SelectSpec"
import axios from "axios"

class RedactMasters extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            spec: ""
        }
        this.addSpec = this.addSpec.bind(this)
    }
    userEdit = {}
    render() {
        return(
            <div className="admin_Container_form_redact">
                <form action="" ref={(el) => this.myForm = el}>
                    <h2 className="add__rec" id="Redact">Редактирование</h2>
                    <div className="input__label__redact">
                        <label className="text__label">Имя:</label>
                        <input type="text"  className="input__redact" id="input__one" onChange={(e) => this.setState({firstname: e.target.value})} />
                    </div>
                    <div className="input__label__redact">
                        <label className="text__label">Фамилия:</label>
                        <input type="text" className="input__redact" id="input__two" onChange={(e) => this.setState({lastname: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Логин:</label>
                        <input type="text"defaultValue={this.props.user.login} className="input__add" id="input__two"  onChange={(e) => this.setState({login: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Пароль:</label>
                        <input type="text"defaultValue={this.props.pass} className="input__add" id="input__two"  onChange={(e) => this.setState({pass: e.target.value})}/>
                    </div>
                    <div className="select__label__redact">
                        <label className="text__label" >Специлизация:</label>
                        <SelectSpec specialization = {this.props.specialization} onAddSpec ={this.addSpec}/>
                    </div>
                    <div className="button__label">
                        <label className="text__label" >Добавить фото</label>
                        <input  className="button__foto" type="file" name="foto" onChange={(e) => this.setState({fotog: e.target.value})} />
                    </div>
                </form>
                <div className="admin__container__save">
                    <button className="dutton__save" onClick={() => {
                        // console.log(this.props.user.pkWorker)
                        axios.get("http://localhost:8080/worker/setWorker?id=" + this.props.user.pkWorker + 
                        "&name=" + this.state.firstname + " " + this.state.lastname + 
                        "&spec=" + this.state.spec + 
                        "&login=" + this.state.login +
                        "&pass=" + this.state.pass +  
                        "&accessToken=" + this.props.token.token) 
                        // this.userEdit = {
                        //     id: this.props.user.pkWorker,
                        //     name: this.state.firstname +" "+ this.state.lastname,
                        //     spec: this.state.spec
                        // }
                        // console.log(this.userEdit)
                        this.myForm.reset()
                        this.props.onEdit()

                    }} 
                        >Сохранить</button>
                </div>
            </div>
        )
    }
    addSpec(specc){
        this.setState({spec: specc})
    }
}

export default RedactMasters