import React from "react";

class ContactCard extends React.Component{
    services = this.props.servisInfo
    user = this.props.masterInfo
    render(){
        return(
            <>
                <div className="card__masters">
                    <div className="card__masters_text">
                        
                        <div className="spec__container">
                        <h3 className="card__masters__name">{this.services.name}</h3>
                            <h4 className="Card__masters__spec">Цена: {this.services.price} руб</h4>
                        </div>
                            {/* <h4 className="Card__masters__spec">{this.services.time}</h4> */}
                    </div>
                </div>
                <div className="card__masters">
                    <div className="card__masters_text2">
                        <img src="#" alt="" className="card__masters__img"/>
                        <div className="spec__container">
                            <h3 className="card__masters__name">{this.user.fio}</h3>
                            <h4 className="Card__masters__spec">{this.user.spec.name}</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </>

        )
    }
}

export default ContactCard