import React from "react"
import User from "./User"

class Users extends React.Component{

    render(){
        if(this.props.user.length < 1 )
            return(
                <h1>Мастера не найдены</h1>
            )
        else
            return(
                <div>
                    {this.props.user.map((el) => (
                        <User token = {this.props.token} specialization = {this.props.specialization} onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.pkWorker} user={el} />
                    )
                    )
                    }
                </div>
            )
    }

}

export default Users