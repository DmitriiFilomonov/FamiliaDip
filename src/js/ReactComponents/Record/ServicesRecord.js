import React from "react";
import ServiceRecordCard from "./ServiceRecordCard";

class ServicesRecord extends React.Component{
    render(){
        if(this.props.services.lenght < 1)
            return(
                <h1>Услуги не найдены</h1>
            )
        else
            return(
                <>
                    {this.props.services.map((sr) => (
                        this.prover(sr) === true ? 
                        <ServiceRecordCard key={sr.pkService} services={sr} button ={this.props.button} checkServis = {this.props.checkServis}/>
                        : null
                    )
                    )
                    }
                </>
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

// this.props.services.spec[0].name === this.props.specCheck ?
//                             <ServiceRecordCard key={sr.pkService} services={sr}/> : null
export default ServicesRecord