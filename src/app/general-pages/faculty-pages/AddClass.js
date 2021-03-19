import React, { Component } from 'react'
import { Form,Icon } from 'react-bootstrap';

export class AddClass extends Component {
  render() {
    return (
      <div className="main-panel">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account-box"></i>
            </span> Parth Shah {">"} Create Class</h3>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Fill up the form</h4>
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputName1">Class Name</label>
                  <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Class Name" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleSelectGender">Add Faculty</label>
                  <select className="form-control" id="exampleSelectGender">
                    <option disabled>Select faculty</option>
                    <option value="Sagar Patel">Sagar Patel</option>
                    <option value="Jalpesh Vasa">Jalpesh Vasa</option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleSelectGender">Add Class</label>
                  <select className="form-control" id="exampleSelectGender">
                    <option>2IT1</option>
                    <option>2IT2</option>
                    <option>4IT1</option>
                    <option>4IT2</option>
                    <option>6IT1</option>
                    <option>6IT2</option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <label>Files</label>
                  <div className="custom-file">
                    <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" />
                    <label className="custom-file-label" htmlFor="customFileLang">Upload file</label>
                  </div>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleTextarea1">Description</label>
                  <textarea className="form-control" id="exampleTextarea1" rows="4" placeholder="description"></textarea>
                </Form.Group>
                <button type="submit" className="btn btn-gradient-primary mr-2">Create</button>
                <button className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default AddClass;