import React from "react";

class ServiceRecordCard extends React.Component{
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
                        <h4 className="Card__masters__spec">Цена {this.services.price} руб</h4>
                    </div>
                        <h4 className="Card__masters__spec">{this.services.time}</h4>
                    <div className="Card__button__check">
                        {this.props.button === true && <button onClick={() => this.props.checkServis(this.services)} >Выбрать</button>}
             
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceRecordCard