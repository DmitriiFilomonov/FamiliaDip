import React, {useState} from "react";

import MasterRecordCard from "./MasterRecordCard";


class MasterRecord extends React.Component{
    render(){
        if(this.props.masters.length < 1 )
            return(
                <h1>Мастера не найдены</h1>
            )
        else
            return(
                <div>

                    {this.props.masters.map((mr) => (
                        this.prover(mr) === true ? 
                        <MasterRecordCard key={mr.pkWorker} masters={mr} mastersCheck = {this.props.mastersCheck} button ={this.props.button}/> : null
                    )
                    )
                    }
                </div>
            )
    }


    prover(mas)
    {
        if(mas.spec.name === this.props.specCheck)
            return true
        else
            return false
    }
}

export default MasterRecord