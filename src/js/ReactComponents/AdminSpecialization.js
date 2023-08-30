import React from "react";
import Specializations from "./Specializations";
import AddSpecialization from "./AddSpecialization";
import axios from 'axios';


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const specsUrl = "http://localhost:8080/all/specs"
class AdminSpecialization extends React.Component{
    constructor(props) {
        super(props)
        axios.get(specsUrl).then((res)=>{
            this.setState({specialization: res.data})
        })
        this.state = {
            specialization: []
        }
        this.addSpecialization = this.addSpecialization.bind(this)
        this.editSpecialization = this.editSpecialization.bind(this)
        this.deleteSpecialization = this.deleteSpecialization.bind(this)
    }
    render(){
        return(
            <>
                <div className="admin__container">
                    <div className="container_items ">
                        <div className="card__container" id="cardContainerMasters">
                            <h1 className="title_record">Специализации</h1>
                            <div className="record_item" id="record__item__master">
                                <Specializations token = {this.props.token} specialization = {this.state.specialization} onEdit={this.editSpecialization} onDelete={this.deleteSpecialization}  />
                            </div>
                        </div>
                    </div>
                    <div id="adminContainerForm">
                        <AddSpecialization token = {this.props.token} specialization = {this.state.specialization} onAdd={this.addSpecialization} />
                    </div>  
                </div>  
            </>
        )
    }

    addSpecialization(){
        sleep(50);
        axios.get(specsUrl).then((res)=>{
            this.setState({specializations: res.data})  
        })
        this.setState({specialization: []}, () => 
            axios.get(specsUrl).then((res)=>{
                this.setState({specialization: res.data})
            })
        )
    }

    editSpecialization(specializations){
        sleep(50);
        axios.get(specsUrl).then((res)=>{
            this.setState({specialization: res.data})  
        })
        this.setState({specialization: []}, () => 
            axios.get(specsUrl).then((res)=>{
                this.setState({specialization: res.data})
            })
        )
    }

    deleteSpecialization(name){
        axios.get("http://localhost:8080/admin/delSpec?name="+ name + "&accessToken=" + this.props.token.token)
        sleep(50);
        axios.get(specsUrl).then((res)=>{
            this.setState({specialization: res.data})
        })
    }

}

export default AdminSpecialization