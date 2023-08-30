import React from "react";
import MasterRecordCard from "./Record/MasterRecordCard";

class AdminListMasters extends React.Component{
    render(){
        return(
            <div>

                {this.props.masters.map((mr) => (
                    <MasterRecordCard key={mr.pkWorker} masters={mr}/>
                )
                )
                }
            </div>
        )
    }
}
export default AdminListMasters 