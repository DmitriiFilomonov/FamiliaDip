import React from "react";
import Service from "./Service";

class Services extends React.Component{
    render(){
        if(this.props.specialization.lenght < 1)
            return(
                <h1>Услуги не найдены</h1>
            )
        else
            return(
                <>
                    {this.props.services.map((ss) => (
                        <Service token = {this.props.token} key={ss.pkService} editServices={this.props.editServices} onDelete={this.props.onDelete} specialization = {this.props.specialization} services={ss}/>
                    )
                    )
                    }
                </>
            )
    }
}

export default Services