import axios from "axios";
import React from "react";

class RedactSpecialization extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
        }
    }
    SpecializationEdit = {}
    render() {
        return(
            <div className="admin_Container_form_redact">
                <form action="" ref={(sp) => this.myForm = sp}>
                    <h2 className="add__rec" id="Redact">Редактирование</h2>
                    <div className="input__label__redact">
                        <label className="text__label">Название:</label>
                        <input type="text" defaultValue={this.props.specialization.name} className="input__redact" onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                </form>
                <div className="admin__container__save">
                    <button className="dutton__save" onClick={() => {
                        axios.get("http://localhost:8080/admin/setSpec?id=" + this.props.specialization.pkSpec +
                        "&name=" + this.state.name +"&accessToken=" + this.props.token.token)
                        this.myForm.reset()
                        this.props.onEdit()
                       }} 
                        id = "button__save">Сохранить</button>
                </div>
            </div>
        )
    }
}

export default RedactSpecialization