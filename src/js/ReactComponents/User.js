import React from "react";
import RedactMasters from "./RedactMasters"
import {AiFillEdit, AiOutlineRest} from "react-icons/ai"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render(){
        return(
            <div className="card__masters" key={this.user.pkWorker}>
                <div className="card__masters_text">
                    <div className="card__masters__flex">
                        <img src="#" alt="" className="card__masters__img"/>
                        <div className="spec__container">
                            <h3 className="card__masters__name">{this.user.fio}</h3>
                            <h4 className="Card__masters__spec">{this.user.spec.name}</h4>
                        </div>
                    </div>
                    <div>
                        <AiOutlineRest className="icon__css" onClick={() => this.props.onDelete(this.user.pkWorker)}/>
                        <AiFillEdit className="icon__css" onClick={() => {this.setState({editForm: !this.state.editForm})}} />
                    </div>
                </div>
                {this.state.editForm && <RedactMasters token = {this.props.token} editForm = {this.editForm} specialization = {this.props.specialization}  user={this.user} onEdit={this.props.onEdit}/>} 
            </div>
        )
    }
}

export default User