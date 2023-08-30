import React from 'react';
import AdminMasters from './AdminMasters';
import HeaderAdmin from './HeaderAdmin';
import AdminServices from './AdminServices';
import AdminSpecialization from './AdminSpecialization';
import AdminList from './AdminList';
import Record from './Record/Record';
import axios from 'axios';

const specsUrl = "http://localhost:8080/all/specs"

class AdminRecord extends React.Component{
    constructor(props) {
        super(props)
        axios.get(specsUrl).then((res)=>{
            this.setState({specialization: res.data})
        })
        this.state = {
            specialization: [],
            check: 1
        }
        this.checkProps = this.checkProps.bind(this)
    }
    render(){
        return(
            <>
                <HeaderAdmin checkProps = {this.checkProps} />
                {this.state.check === 1 && <AdminMasters specialization ={this.state.specialization} token = {this.props.token}/>}
                {this.state.check === 2 && <AdminServices specialization ={this.state.specialization} token = {this.props.token}/>}
                {this.state.check === 3 && <AdminSpecialization token = {this.props.token}/>}
                {this.state.check === 4 && <AdminList token = {this.props.token}/>}
            </>
        )   
    }
    checkProps(ch){
        this.setState({check: ch})
        console.log(this.props.token)
    }
}

export default AdminRecord