import React from "react";


class MasterRecordCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.masters
    render(){
        return(
            <div className="card__masters" key={this.user.pkWorker}>
                <div className="card__masters_text">
                    <img src="#" alt="" className="card__masters__img"/>
                    <div className="spec__container">
                        <h3 className="card__masters__name">{this.user.fio}</h3>
                        <h4 className="Card__masters__spec">{this.user.spec.name}</h4>
                        <div className="timer">
                        </div>
                    </div>
                    <div>
                    {this.props.button === true && <button onClick={() => this.props.mastersCheck(this.user)}>Выбрать</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default MasterRecordCard