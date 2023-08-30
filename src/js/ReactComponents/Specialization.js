import React from "react";
import RedactSpecialization from "./RedactSpecialization";
import {AiFillEdit, AiOutlineRest} from "react-icons/ai"
class Specialization extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    specialization = this.props.specialization
    render(){
        return(
            <div className="card__masters" key={this.specialization.id}>
                <div className="card__masters_text">
                    <h3 className="card__masters__name">{this.specialization.name}</h3>
                    <div>
                        <AiOutlineRest className="icon__css" onClick={() => this.props.onDelete(this.specialization.name)}/>
                        <AiFillEdit className="icon__css" onClick={() => {this.setState({editForm: !this.state.editForm})}}/>
                    </div>
                </div>
                {this.state.editForm && <RedactSpecialization token = {this.props.token} specialization = {this.specialization} onEdit={this.props.onEdit}/>}
            </div>
        )
    }
}

export default Specialization