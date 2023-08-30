import React from 'react';
import Users from './Users';
import AddMasters from './AddMasters';
import axios from 'axios';

const baseUrl="http://localhost:8080/all/workers?f=1"

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

class AdminMasters extends React.Component{
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res)=>{
            this.setState({user: res.data});
        })

        this.state = {
            user: []
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render(){
        return(
            <>
                <div className="admin__container">
                    <div className="container_items ">
                        <div className="card__container" id="cardContainerMasters">
                            <h1 className="title_record">Мастера</h1>
                            <div className="record_item" id="record__item__master">
                                <Users token = {this.props.token} user = {this.state.user} specialization = {this.props.specialization} onDelete={this.deleteUser} onEdit={this.editUser}/>
                            </div>
                        </div>
                    </div>
                    <div id="adminContainerForm">
                        <AddMasters specialization = {this.props.specialization} onAdd={this.addUser} />
                    </div>  
                </div>  
            </>
        )   
    }


    // deleteUser(id){
    //     this.setState({
    //         user: this.state.user.filter((el) => el.id !== id)
    //     })
    //     console.log(this.state.user)
    // }
    deleteUser(pkWorker){
        axios.get("http://localhost:8080/admin/delWorker?id="+ pkWorker +"&accessToken=" + this.props.token.token)
        sleep(50);
        axios.get(baseUrl).then((res)=>{
            this.setState({user: res.data})
        })
    }

    addUser(){
        sleep(150);
        axios.get(baseUrl).then((res)=>{
            this.setState({user: res.data})  
        })
    }
//вызывает баг способ исправления: придумать нормальное присвоение id
    editUser(){

        // axios.get("http://localhost:8080/setWorker?id=" + users.id + "&" + "name=" + users.name + "&spec=" + users.spec)
        sleep(50);
        axios.get(baseUrl).then((res)=>{
            this.setState({user: res.data})
        })
        // console.log(users)
        // let allUsers = this.state.user
        // allUsers[users.pkWorker] = user
        // sleep(200)
        // console.log(allUsers)
        // this.setState({user: []}, () => 
        //    this.setState({user: allUsers})
        // )
        // sleep(10000);
        
        this.setState({user: []}, () => 
            axios.get(baseUrl).then((res)=>{
                this.setState({user: res.data})
            })
        )

        // let allUsers = this.state.user
        // console.log(allUsers)
        // this.setState({user: []}, () => 
        // this.setState({user: allUsers}))  
        // sleep(200)
        // console.log(this.state.user)



        // console.log("xyi")
        // axios.get(baseUrl).then((res)=>{
        //     this.setState({user: res.data})  
        // })
        // sleep(100);


    }
}

export default AdminMasters