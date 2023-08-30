import React from "react";
import SelectSpec from "./SelectSpec";
import axios from "axios"

class AddServices extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: "",
            spec: "",
            time: ""
        }
        this.addSpec = this.addSpec.bind(this)
    }
    userEdit = {}
    render() {
        return(
            <div className="admin_Container_form">
                <h2 className="add__rec" id="Add">Добавление</h2>
                <form action="" ref={(ss) => this.myForm = ss}>
                    <div className="input__label">
                        <label className="text__label">Название:</label>
                        <input type="text" className="input__add" id="input__one" onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="input__label">
                        <label className="text__label">Цена:</label>
                        <input type="text" className="input__add" id="input__two" onChange={(e) => this.setState({price: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Скидка:</label>
                        <input type="text" className="input__add" id="input__two" onChange={(e) => this.setState({price: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Время:</label>
                        <input type="text" className="input__add" id="input__thee" onChange={(e) => this.setState({time: e.target.value})}/>
                    </div>
                    <div className="select__label">
                        <label className="text__label" >Специлизация:</label>
                        <SelectSpec specialization = {this.props.specialization} onAddSpec ={this.addSpec}/>
                    </div>
                </form>
                <div className="admin__container__save">
                    <button className="dutton__save" onClick={() => {
                        
                        axios.get("http://localhost:8080/admin/addServ?name=" + this.state.name + 
                        "&time=" + this.state.time +
                        "&price=" + this.state.price +
                        "&spec=" + this.state.spec + "&accessToken=" + this.props.token.token)
                        this.myForm.reset()
                        this.props.onAdd({
                    })}} id = "button__save">Сохранить</button>
                </div>
            </div>
        )
    }
    addSpec(specc){
        this.setState({spec: specc})
    }
}
//Баг с записью специализации надо исправить

export default AddServices