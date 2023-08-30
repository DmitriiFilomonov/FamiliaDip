import React from "react"
import SelectSpec from "./SelectSpec"
import axios from "axios"

class AddMasters extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            login: "",
            pass: "",
            role: "",
            spec: ""
        }
        this.addSpec = this.addSpec.bind(this)
    }
    
    render() {
        return(
            <div className="admin_Container_form">
                <h2 className="add__rec display__none" id="Redact">Редактирование</h2>
                <h2 className="add__rec" id="Add">Добавление</h2>
                <form action="" ref={(el) => this.myForm = el}>
                    <div className="input__label">
                        <label className="text__label">Имя:</label>
                        <input type="text" className="input__add" id="input__one" onChange={(e) => this.setState({firstname: e.target.value})} />
                    </div>
                    <div className="input__label">
                        <label className="text__label">Фамилия:</label>
                        <input type="text" className="input__add" id="input__two"  onChange={(e) => this.setState({lastname: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Логин:</label>
                        <input type="text" className="input__add" id="input__two"  onChange={(e) => this.setState({login: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Пароль:</label>
                        <input type="text" className="input__add" id="input__two"  onChange={(e) => this.setState({pass: e.target.value})}/>
                    </div>
                    <div className="select__label">
                        <label className="text__label">Роль:</label>
                        <select className="select_redact" onChange={(e) => this.setState({role: e.target.value})} >
                            <option value="1"  >Администратор</option>
                            <option value="2"  >Сотрудник</option>
                        </select>
                    </div>
                    <div className="select__label">
                        <label className="text__label" >Специлизация:</label>
                        <SelectSpec specialization = {this.props.specialization} onAddSpec ={this.addSpec}/>
                    </div>
                    <div className="button__label">
                        <label className="text__label" >Добавить фото</label>
                        <input  className="button__foto" type="file" name="foto" onChange={(e) => this.setState({fotog: e.target.value})} />
                    </div>
                    {/* <form method="POST" action="http://localhost:8080/app/addWorker" >
                        <h4>Изменить фотографию</h4>
                        <input name="foto" type="file"/>
                        <button type="submit" >Сохранить</button>
                        <input type="text" placeholder="Название" name="name" required></input>
                    </form> */}
                </form>
                <div className="admin__container__save">
                        <button className="dutton__save" onClick={() => {
                        axios.get("http://localhost:8080/all/addWorker?name=" + 
                        this.state.firstname + " " + this.state.lastname + 
                        "&spec=" + this.state.spec + 
                        "&role=" + this.state.role +
                        "&login=" + this.state.login +
                        "&pass=" + this.state.pass)
                        this.myForm.reset()
                        this.props.onAdd()
                        }}>Сохранить</button>
                </div>
            </div>
        )
    }
    addSpec(specc){
        this.setState({spec: specc})
    }
}

export default AddMasters