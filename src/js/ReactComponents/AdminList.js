import { AiOutlineLeft } from "react-icons/ai";
import React from "react";
import axios from "axios";
import SelectSpec from "./SelectSpec";
import AdminListMasters from "./AdminListMasters";
import AdminListServices from "./AdminListServices";
import {AiFillEdit, AiOutlineRest} from "react-icons/ai"
const baseUrl="http://localhost:8080/all/workers?f=1"
const servicesUrl="http://localhost:8080/all/servs?f=1"
const specUrl = "http://localhost:8080/all/specs?"

class AdminList extends React.Component{

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
            check: 1,
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
        // this.prover = this.servisCheck.bind(this)
        this.mastersCheck = this.mastersCheck.bind(this)
        // this.buttonBack = this.buttonBack.bind(this)
        // this.timeCheck = this.timeCheck.bind(this)
    }
    render(){
        return(
            <div className="adminList__container">
                <div className="adminList__nav">
                    <div className="card__container">
                        <div className="titleNav__item">
                            <span className="title__Card">Мастера</span>
                            <AiOutlineLeft className="iconArrov>"/>
                        </div>
                        <div className="special__container">
                            <span className="text__spec">специализация: </span>
                            <SelectSpec specialization = {this.state.specialization} onAddSpec = {this.addSpec}/>
                        </div>
                        <div className="special__container">
                            <span className="text__spec">поиск: </span>
                            <input className="input__poisc"></input>
                            <button className="button__puisc">найти</button>
                        </div>
                        <div className="record_item">
                            <AdminListMasters masters = {this.state.masters} />
                        </div>
                        
                    </div>
                </div>
                <div className="adminList__records">
                    <div className="title__Admin__list">Записи</div>
                    <div className="input__data">
                        <span className="adminList__text">Дата:</span>
                        <input type="date"></input>
                        <button className="button__add">Добавить запись</button>
                    </div>
                    <table class="iksweb">
                        <tbody className="Table">
                            <tr className="Table__Tr">
                                <td className="Table__time">Время</td>
                                <td className="Table__td">Улуга</td>
                                <td className="Table__td">Мастер</td>
                                <td className="Table__td">ФИО клиента</td>
                                <td className="Table__td">Номер клиента</td>
                            </tr>
                            <tr>
                                <td className="Table__time">10:30</td>
                                <td className="Table__td">Модная стрижка</td>
                                <td className="Table__td">Ольга Попова</td>
                                <td className="Table__td">Максим Иванов</td>
                                <td className="Table__td">+79132495432</td>
                                <td className="Table__td">                                 
                                <div className="contaier_ttt">
                                    <AiOutlineRest className="icon__css"/>
                                    <AiFillEdit className="icon__css" />
                                </div></td>

                            </tr>
                            <tr>
                                <td className="Table__time">12:00</td>
                                <td className="Table__td">Окрашивание</td>
                                <td className="Table__td">Ольга Попова</td>
                                <td className="Table__td">Женя Хохлова</td>
                                <td className="Table__td">+79138762344</td>
                                <td className="Table__td">                                 
                                <div className="contaier_ttt">
                                    <AiOutlineRest className="icon__css"/>
                                    <AiFillEdit className="icon__css" />
                                </div></td>

                            </tr>
                        </tbody>
                    </table>   
                </div>
            </div>
        )
    }
    addSpec(specc){
        this.setState({specCheck: specc})
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
}

export default AdminList