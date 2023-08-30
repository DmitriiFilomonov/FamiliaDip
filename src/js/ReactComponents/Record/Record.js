import axios from "axios";
import React from "react";
import ServicesRecord from "./ServicesRecord";
import SelectSpec from "../SelectSpec";
import MasterRecord from "./MasterRecord";
import ContactInformation from "./ContactInformation";
import { VscChromeClose, VscChevronLeft} from "react-icons/vsc";
const baseUrl="http://localhost:8080/all/workers?f=1"
const servicesUrl="http://localhost:8080/all/servs?f=1"
const specUrl = "http://localhost:8080/all/specs?"

class Record extends React.Component{
    constructor(props){
        super(props)
        axios.get(baseUrl).then((res)=>{
            this.setState({masters: res.data});
        })
        axios.get(servicesUrl).then((res)=>{
            this.setState({services: res.data});
        })
        axios.get(specUrl).then((res)=>{
            this.setState({specialization: res.data});
        })
        this.state = {
            TextTitle: [
                "Услуги",
                "Дата и время",
                "Контакная иформация"
            ],
            check: 4,
            button: true,
            time:"",
            specCheck: "",
            masterInfo: [],
            servisInfo: [],
            masters: [],
            services: [],
            specialization: []
        }   
        this.addSpec = this.addSpec.bind(this)
        this.servisCheck = this.servisCheck.bind(this)
        this.prover = this.servisCheck.bind(this)
        this.mastersCheck = this.mastersCheck.bind(this)
        this.buttonBack = this.buttonBack.bind(this)
        this.timeCheck = this.timeCheck.bind(this)
    }
    render(){
        return(
            <>
                <div className="Record__container">
                    <div className="Record__container__br">
                        <div className="Record__header">
                            {this.state.check > 1 &&< VscChevronLeft onClick={() => this.buttonBack()} className="button__header"/>}
                            <h1 className="Record__title">{this.state.TextTitle[this.state.check-1]}</h1>
                            <VscChromeClose className="button__header"/>
                        </div>
                        {this.state.check === 1 && <div className="choosing__specialization">
                                <h2 className="choosing__specialization__text">Специализация: </h2>
                               <SelectSpec specialization = {this.state.specialization} onAddSpec = {this.addSpec}/>
                         </div>}
                        <div className="Record__card">
                            {this.state.check === 1 && < ServicesRecord services = {this.state.services} 
                                specialization = {this.state.specialization} 
                                checkServis = {this.servisCheck}
                                specCheck = {this.state.specCheck}
                                button = {this.state.button}/>
                            }
                            {this.state.check === 2 &&
                                <div>
                                    <div className="calendarMasters" >
                                        <label>Выберете дату: </label>
                                        <input type="date"/>
                                    </div>
                                    <MasterRecord masters = {this.state.masters} 
                                    prov = {this.prover}
                                    specCheck = {this.state.specCheck}
                                    button = {this.state.button}
                                    mastersCheck = {this.mastersCheck}/>
                                </div>

                            }
                            {this.state.check === 3 &&
                                <ContactInformation masterInfo = {this.state.masterInfo} 
                                servisInfo = {this.state.servisInfo}
                                button = {this.state.button}
                                />
                            }
                            {this.state.check === 4 &&
                            <div>
                                <h2 className="choosing__specialization__text">Заявка успешно подана!</h2>
                                <button>Вернуться на главную страницу</button>
                            </div>
                                
                                
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
    addSpec(specc){
        this.setState({specCheck: specc})
    }
    timeCheck(times){
        this.setState({time: times})
    }

    servisCheck(servis){
        // console.log(servis)
        this.setState({servisInfo: servis})
        this.setState({specCheck: servis.spec.name})
        this.setState({check: this.state.check+1})
        console.log(this.state.servisInfo)
    }
    mastersCheck(master){
        this.setState({button: false})
        this.setState({masterInfo: master})
        this.setState({check: this.state.check+1})
    }
    buttonBack(){
        this.setState({check: this.state.check-1})
        this.setState({button: true})
        this.setState({servisInfo: []})
        this.setState({masterInfo: []})
    }   

}

export default Record