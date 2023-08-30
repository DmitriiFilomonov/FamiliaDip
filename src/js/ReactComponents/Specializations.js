import React from "react";
import Specialization from "./Specialization";

class Specializations extends React.Component{
    render(){
        if(this.props.specialization.lenght < 1)
            return(
                <h1>Специализации не найдены</h1>
            )
        else
            return(
                <>
                    {this.props.specialization.map((sp) => (
                        <Specialization token = {this.props.token} key={sp.pkSpec} onEdit={this.props.onEdit} onDelete={this.props.onDelete} specialization = {sp}/>
                    )
                    )
                    }
                </>
            )
    }
}

export default Specializations