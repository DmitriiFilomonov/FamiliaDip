import React from "react";
import ServiceRecordCard from "./Record/ServiceRecordCard";

class AdminListServices extends React.Component{
    render(){
        if(this.props.services.lenght < 1)
            return(
                <h1>Услуги не найдены</h1>
            )
        else
            return(
                <>
                    {this.props.services.map((sr) => (
                        <ServiceRecordCard key={sr.pkService} services={sr}/>
                    )
                    )
                    }
                </>
            )
    }
}

// this.props.services.spec[0].name === this.props.specCheck ?
//                             <ServiceRecordCard key={sr.pkService} services={sr}/> : null
export default AdminListServices