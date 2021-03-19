import React, { Component } from 'react';
import { Dropdown, ProgressBar } from 'react-bootstrap';

export class ProblemList extends Component {
    state = {
        bookmarkIcon: 'mdi mdi-bookmark-outline',
        taskCompleted: false,
        filters: [
            {
                heading: 'Status',
                lists: [
                    { title: 'Done', isChecked: false },
                    { title: 'Pending', isChecked: false }
                ]
            },
            {
                heading: 'Difficulty',
                lists: [
                    { title: 'Easy', isChecked: false },
                    { title: 'Medium', isChecked: false },
                    { title: 'Hard', isChecked: false }
                ]
            },
            {
                heading: 'Domain',
                lists: [
                    { title: 'Array', isChecked: false },
                    { title: 'Linked List', isChecked: false },
                    { title: 'Tree', isChecked: false },
                    { title: 'Graph', isChecked: false },
                    { title: 'Greedy', isChecked: false },
                    { title: 'DP', isChecked: false },
                ]
            }

        ]
    }
    changeBookmark = () => {
        if (this.state.bookmarkIcon === 'mdi mdi-bookmark')
            this.setState({ bookmarkIcon: 'mdi mdi-bookmark-outline' });
        else
            this.setState({ bookmarkIcon: 'mdi mdi-bookmark' });
    }
    render() {
        return (
            <div className="main-panel">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="col-lg-12 search-field d-none d-md-block">
                            <form className="d-flex align-items-center h-100" action="#">
                                <div className="input-group">

                                    <i className="input-group-text border-0 mdi mdi-magnify"></i>

                                    <input type="text" className="form-control text-white bg-dark border-0" placeholder="Search problem" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2 grid-margin strech-card">
                        <Dropdown>
                            <Dropdown.Toggle variant="btn btn-primary btn-sm" id="dropdownMenuSizeButton3">
                                Order by
                    </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Header>A-Z</Dropdown.Header>
                                <Dropdown.Item>Z-A</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-8 grid-margin strech-card">

                        <div className="row">
                            {/* table-view */}
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Problem List</h4>
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Problem Name</th>
                                                        <th>Due Date</th>
                                                        <th>Uploaded by</th>
                                                        <th>Class Progress</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sort elements</td>
                                                        <td>Mar 5, 11:00</td>
                                                        <td>Parth Shah</td>
                                                        <td>
                                                            <ProgressBar variant="gradient-danger" now={75} />

                                                        </td>
                                                        <td>
                                                            <label className="badge badge-gradient-success">DONE</label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3D Surface Area</td>
                                                        <td>Mar 11, 00:00</td>
                                                        <td>Sagar Patel</td>
                                                        <td>
                                                            <ProgressBar variant="gradient-danger" now={55} />

                                                        </td>
                                                        <td>
                                                            <label className="badge badge-gradient-warning">PENDING</label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            {/* solve-challenge */}
                            <div className="col-sm-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 className="card-title">Sort Elements
                                <button onClick={this.changeBookmark} type="button" className="btn btn-transparent btn-icon">
                                                <i className={this.state.bookmarkIcon}></i>
                                            </button>
                                        </h5>

                                        <div className="row">
                                            <span class="col card-text">
                                                <ul className="list-inline">

                                                    <li>
                                                        <i className="mdi mdi-bullseye"></i>Easy    <i className=" mdi mdi-account-box-outline"></i>Parth Shah</li>
                                                    <li><label className="badge badge-danger">
                                                        <i className="mdi mdi-star" />
                                                        <i className="mdi mdi-star" />
                                                        <i className="mdi mdi-star" />
                                                        <i className="mdi mdi-star-outline" />
                                                        <i className="mdi mdi-star-outline" />
                                                    </label></li>
                                                </ul>
                                            </span>
                                            <button style={{ float: "right", height: '32px' }} className="col-lg-4 btn btn-primary btn-sm">Solve Challenge</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-sm-12 grid-margin stretch-card">
                                <div class="card text-white bg-dark mb-3">
                                    <div class="card-header">Sort Elements  <label className="badge badge-primary" style={{float:"right"}}>
                                        <i className="mdi mdi-star" />
                                        <i className="mdi mdi-star" />
                                        <i className="mdi mdi-star" />
                                        <i className="mdi mdi-star-outline" />
                                        <i className="mdi mdi-star-outline" />
                                    </label>
                                    </div>
                                    <div class="card-body">
                                        <div className="row">
                                            <span class="col card-text">
                                                <ul className="list-inline">

                                                    <li>
                                                        <i className="mdi mdi-bullseye"></i>Easy
                                                    </li>
                                                    <li>
                                                        <i className=" mdi mdi-account-box-outline"></i>Parth Shah</li>
                                                    <li></li>
                                                    <li>Topics-list</li>
                                                </ul>
                                            </span>
                                            <button style={{ float: "right", height: '32px' }} className="col-lg-4 btn btn-danger btn-sm">Solve Challenge</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            {/* pending-done problems */}
                            <div className="col-sm-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 className="card-title">3D Surface Area
                                <button onClick={this.changeBookmark} type="button" className="btn btn-transparent btn-icon">
                                                <i className={this.state.bookmarkIcon}></i>
                                            </button>
                                        </h5>

                                        <div className="row">
                                            <span class="col card-text">
                                                <ul className="list-inline">

                                                    <li>
                                                        <i className=" mdi mdi-calendar-clock"></i>Mar 11, 00:00   <i className=" mdi mdi-account-box-outline"></i>Sagar Patel</li>
                                                    <li>
                                                        <ProgressBar variant="gradient-danger" now={55} />
                                                    </li>
                                                </ul>
                                            </span>
                                            <button
                                                style={{ float: "right", height: '32px' }}
                                                className={(this.state.taskCompleted) ? 'col-lg-4 btn btn-gradient-success btn-sm' : 'col-lg-4 btn btn-gradient-warning btn-sm'}>
                                                {(this.state.taskCompleted) ? 'Done' : 'Pending'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* 
                        
 */}
                    </div>

                    {/* filters */}
                    <div className="col-lg-4 grid-margin stretch-card">

                        <div className="card">
                            <div className="card-body">
                                {this.state.filters.map((filter, index) => {
                                    return (<div style={{position:"sticky"}}>
                                        <ListItems
                                            heading={filter.heading}
                                            list={filter.lists}
                                            listIndex={index}
                                        />
                                        {(index==this.state.filters.length-1)?null:<hr/>}
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const ListItems = (props) => {
    return (
        <>
            <h4 className="card-title">{props.heading}</h4>
            <ul className="list-inline">
                {props.list.map((item, index) => {
                    return (
                        <li>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" checked={item.isChecked} 
                                    onChange={()=>{
                                    }}
                                    className="form-check-input" />
                                    <i className="input-helper"></i>
                                    {item.title}
                                </label>
                            </div>
                        </li>
                    );
                })}
            </ul>

        </>
    );
};

export default ProblemList