import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import backend_url from '../services/api'
import axios from 'axios'
import { ProgressBar, Button, Modal, Form } from 'react-bootstrap';

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

    handleJoinSubmit=()=>{
        console.log(this.state.code);
        axios.post(backend_url+ "/user/" + localStorage.getItem("user_id") + "/classes/joinClass?classCode="+this.state.classCode,null).then((response)=>{
          alert('class added')
        }).catch((err)=>{
          console.log(err);
          alert(err);
        });
      }

    render() {
        const {classes} = this.state
        return (
            <div className="main-panel">
                <div className="page-header">
                </div>
                <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>
                <ShowModal joinHandler={this.handleJoinChange} submitHandler={this.handleJoinSubmit} />
                &nbsp;&nbsp;&nbsp;
              </li>
            </ul>
          </nav>
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

const ShowModal = (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (<>
      <Button className="btn btn-primary btn-sm" variant="primary" onClick={handleShow}>
        Join Class
     </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join Class with Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
          <form className="forms-sample" onSubmit={(event)=>{event.preventDefault(); props.submitHandler();}}>
            <Form.Group className="row">
              <div className="col-sm-9">
                <Form.Control type="text" className="form-control" id="exampleInputUsername2" placeholder="enter class code here" onChange={(e)=>{props.joinHandler(e.target.value)}} />
              </div>
              <button type="submit" className="btn btn-gradient-primary mr-2" onClick={handleClose}>Join</button>
            </Form.Group>
          </form>
  
  
        </Modal.Body>
  
      </Modal>
    </>);
  }


export default Classes;


