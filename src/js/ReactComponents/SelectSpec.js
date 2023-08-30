import React from "react";

class SelectSpec extends React.Component{
    constructor(props){
        super(props)
        this.setState = {
            spec: ""
        }
    }
    render(){
        return(
            <>
                <select className="select_redact" onChange={(e) => this.props.onAddSpec(e.target.value)} >
                    <option value="" className="display__none"/> 
                    {this.props.specialization.map((cz) =>(
                        <option value={cz.name} key={cz.id} >{cz.name}</option>
                    )
                    )
                    }
                </select>
            </>

        )
    }
}

export default SelectSpec