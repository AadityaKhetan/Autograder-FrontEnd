import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backend_url from '../services/api'
import axios from 'axios'

export class Classes extends Component {
    state = {
        classes:[]
    }

    componentDidMount(){
        const userId = localStorage.getItem("user_id")
        axios.get(`${backend_url}/user/${userId}/classes`).then(
            (response) =>{
                console.log(response)
                this.setState({classes:response.data})
            },
            (error) =>{
                console.log(error);
            }
        )
    }
    render() {
        const {classes} = this.state
        return (
            <div className="main-panel">
                <div className="page-header">
                </div>
                <div className="row">
                    {
                        classes.length ?
                        classes.map(class_ => 
                        <ClassCard key ={class_.id} class_={class_}/>
                            ):null
                    }
                </div>
            </div>
        )
    }
}
const ClassCard = ({class_}) => {
    
    const setpath = "/general-pages/faculty-pages/subject/" + class_.name;
    return (
        <>

            <div className="col-3">
                
                <div class="card text-white bg-dark mb-3">
                    <div class="card-body">
                        <h6 class="card-title text-white">{class_.name}</h6>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-danger btn-sm" style={{ float: 'right' }}>Enter class</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Classes;