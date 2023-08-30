import React from "react";
import axios from "axios";
class AddSpecialization extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
        }
    }
    render() {
        return(
            <div className="admin_Container_form">
                <h2 className="add__rec" id="Add">Добавление</h2>
                <form action="" ref={(sp) => this.myForm = sp}>
                    <div className="input__label">
                        <label className="text__label">Название:</label>
                        <input type="text" className="input__add" id="input__one" onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                </form>
                <div className="admin__container__save">
                    <button className="dutton__save" onClick={() => {
                        axios.get("http://localhost:8080/admin/addSpec?name=" + this.state.name + "&accessToken=" + this.props.token.token)
                        this.myForm.reset()
                        // this.setState({
                        //     name: ""
                        // })
                        this.props.onAdd()
                        }} id = "button__save">Сохранить</button>
                </div>
            </div>
        )
    }
}

export default AddSpecialization