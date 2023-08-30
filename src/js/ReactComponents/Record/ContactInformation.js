import React from "react";
import ContactCard from "./ContactCard";
class ContactInformation extends React.Component{
    render(){
        return(
            <>
                <form className="contact__form">
                    <div className="contact__container" >
                        <label className="contact__label">Имя:</label>
                        <input className="contact__input" type="text"></input>
                    </div>
                    <div className="contact__container" >
                        <label className="contact__label">Фамилия:</label>
                        <input className="contact__input" type="text"></input>
                    </div>
                    <div className="contact__container" >
                        <label className="contact__label">Номер:</label>
                        <input className="contact__input" type="number"></input>
                    </div>
                </form>
                <h3 className="contact__vib">Ваш выбор: </h3>
                <h3 className="contact__time">Дата и время: 16.06.2023 14:00 </h3>
                <div className="contant__data">
                    <ContactCard  servisInfo = {this.props.servisInfo} masterInfo = {this.props.masterInfo} />
                </div>
            </>
        )
    }
}

export default ContactInformation