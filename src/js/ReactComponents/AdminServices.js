import React from "react";
import SelectSpec from "./SelectSpec";
import Services from "./Services";
import AddServices from "./AddServices";
import axios from "axios";

const baseUrl="http://localhost:8080/all/servs?f=1"

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

class AdminServices extends React.Component{
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res)=>{
            this.setState({services: res.data});
        })

        this.state = {
            services: [
            ],
        }
        this.addServics = this.addServics.bind(this)
        this.editServices = this.editServices.bind(this)
        this.deleteServices = this.deleteServices.bind(this)
    }
    render(){
        return(
            <>
                <div className="admin__container">
                    <div className="container_items ">
                        <div className="card__container" id="cardContainerMasters">
                            <h1 className="title_record">Услуги</h1>
                            <div className="choosing__specialization">
                                <h2 className="choosing__specialization__text">Специализация: </h2>
                                <SelectSpec specialization = {this.props.specialization}/>
                            </div>
                            <div className="record_item" id="record__item__master">
                                <Services token = {this.props.token} services = {this.state.services} onDelete={this.deleteServices} specialization = {this.props.specialization} editServices={this.editServices}/>
                            </div>
                        </div>
                    </div>
                    <div id="adminContainerForm">
                        <AddServices token = {this.props.token} specialization = {this.props.specialization} onAdd={this.addServics}/>
                    </div>  
                </div>  
            </>
        )
    }
    addServics(){
        sleep(50);
        axios.get(baseUrl).then((res)=>{
            this.setState({services: res.data})  
        })
    }

    editServices(){

        // let allservicesL = this.state.services
        // allservicesL[servicesL.id - 1] = servicesL

        // this.setState({services: []}, () => 
        //     this.setState({services: [...allservicesL]})
        // )
        sleep(50);
        axios.get(baseUrl).then((res)=>{
            this.setState({services: res.data})
        })
        this.setState({services: []}, () => 
        axios.get(baseUrl).then((res)=>{
            this.setState({services: res.data})
        })
    )
    }

    deleteServices(name){
        axios.get("http://localhost:8080/admin/delServ?name="+ name +"&accessToken=" + this.props.token.token)
        sleep(50);
        axios.get(baseUrl).then((res)=>{
            this.setState({services: res.data})
        })
    }

}

export default AdminServices