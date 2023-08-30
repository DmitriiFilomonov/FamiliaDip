import React from "react";
import RedactServices from "./RedactServices";
import {AiFillEdit, AiOutlineRest} from "react-icons/ai"

class Service extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    services = this.props.services
    render(){
        return(
            <div className="card__masters" key={this.services.pkServices}>
                <div className="card__masters_text">
                    <div className="spec__container">
                        <h3 className="card__masters__name">{this.services.name}</h3>
                        <h4 className="Card__masters__spec">Цена: {this.services.price} руб</h4>
                    </div>
                    <h4 className="Card__masters__name">Время: {this.services.time}</h4>
                    <div>
                        <AiOutlineRest className="icon__css" onClick={() => this.props.onDelete(this.services.name)}/>
                        <AiFillEdit className="icon__css" onClick={() => {this.setState({editForm: !this.state.editForm})}}/>
                    </div>
                </div>
                {this.state.editForm && <RedactServices token = {this.props.token} specialization = {this.props.specialization} services={this.services} editServices={this.props.editServices}/>}
            </div>
        )
    }
}

export default Service