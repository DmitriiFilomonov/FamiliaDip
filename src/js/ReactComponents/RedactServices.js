import React from "react";
import SelectSpec from "./SelectSpec";
import axios from "axios"

class RedactServices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: "",
            time: "",
            spec: ""
        }
        this.addSpec = this.addSpec.bind(this)
    }
    ServicesEdit = {}
    render() {
        return(
            <div className="admin_Container_form_redact">
                <form action="" ref={(el) => this.myForm = el}>
                    <h2 className="add__rec" id="Redact">Редактирование</h2>
                    <div className="input__label__redact">
                        <label className="text__label">Название:</label>
                        <input type="text" defaultValue={this.props.services.name} className="input__redact" id="input__one" onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="input__label__redact">
                        <label className="text__label">Цена:</label>
                        <input type="text" defaultValue={this.props.services.price} className="input__redact" id="input__two" onChange={(e) => this.setState({price: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Скидка:</label>
                        <input type="text" defaultValue={this.props.services.time} className="input__add" id="input__thee" onChange={(e) => this.setState({time: e.target.value})}/>
                    </div>
                    <div className="input__label">
                        <label className="text__label">Время:</label>
                        <input type="text" defaultValue={this.props.services.time} className="input__add" id="input__thee" onChange={(e) => this.setState({time: e.target.value})}/>
                    </div>
                    <div className="select__label__redact">
                        <label className="text__label" >Специлизация:</label>
                        <SelectSpec specialization = {this.props.specialization} onAddSpec ={this.addSpec}/>
                    </div>
                </form>
                <div className="admin__container__save">
                    <button className="dutton__save" onClick={() => {
                        console.log(this.props.services.pkService + " " + this.state.name + " " + this.state.time+ " " + this.state.time + " " + this.state.spec)
                        axios.get("http://localhost:8080/admin/setServ?id="+ this.props.services.pkService  + 
                        "&name=" + this.state.name + 
                        "&time=" + this.state.time +
                        "&price=" + this.state.price +
                        "&spec=" + this.state.spec +
                        "&accessToken=" + this.props.token.token)
                        // this.setState({
                        //     name: "",
                        //     price: "",
                        //     time: "",
                        //     spec: ""
                        // })
                        this.myForm.reset()
                        this.props.editServices()
                        }} 
                        id = "button__save">Сохранить</button>
                </div>
            </div>
        )
    }
    addSpec(specc){
        this.setState({spec: specc})
    }
}

export default RedactServices