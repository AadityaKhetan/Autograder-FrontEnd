import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Classes extends Component {
    state = {
        classes: [
            'C++',
            'Python',
            'SQL',
            'Java',
            'Problem Solving',
            'Javascript',
            'R',
            'ReactJs',
            'C#',
            'Algorithms',
            'C'
        ]
    }
    render() {
        return (
            <div className="main-panel">
                <div className="page-header">
                    <h3 className="page-title">
                        <span className="page-title-icon bg-gradient-primary text-white mr-2">
                            <i className="mdi mdi-account-box"></i>
                        </span> User Name </h3>
                </div>
                <div className="row">
                    {this.state.classes.map((title, index) => {
                        return (<ClassCard className={title} />);
                    })}
                </div>
            </div>
        )
    }
}
const ClassCard = (props) => {
    const setpath = "/general-pages/faculty-pages/subject/" + props.className;
    return (
        <>

            <div className="col-3">
                
                <div class="card text-white bg-dark mb-3">
                    <div class="card-body">
                        <h6 class="card-title text-white">{props.className}</h6>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-danger btn-sm" style={{ float: 'right' }}>Start Learning</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Classes;