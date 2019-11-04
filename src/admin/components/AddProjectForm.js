import React, { Component } from 'react';
import { url } from '../../urlBase';
import axios from 'axios';
import { FaRegWindowClose } from 'react-icons/fa';
import '../../css/admin_css/AddProject.scss';

class AddProjectForm extends Component {
  state = {
    title: '',
    tech: '',
    url: '',
    github: '',
    desc: '',
    image: null
  };

  // Can't figure this out... getting the correct data from the file upload input
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFile = event => {
    this.setState({
      image: event.currentTarget.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    for (let elem in this.state) {
      if (this.state[elem] === '' || this.state[elem] === null) {
        return null;
      }
    }

    let id = localStorage.getItem('id');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;

    const formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[technologies]', this.state.tech);
    formData.append('project[url]', this.state.url);
    formData.append('project[github]', this.state.github);
    formData.append('project[description]', this.state.desc);
    formData.append('project[image]', this.state.image);
    formData.append('project[date]', today);
    formData.append('project[user_id]', id);

    axios({
      url: `${url}api/v1/projects`,
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data'
      },
      data: formData
    })
      .then(res => console.log(res))
      .then(this.props.projectFormToggle());
  };

  render() {
    return (
      <div className='add-project-backdrop'>
        <div className='add-project'>
          <div className='close' onClick={this.props.projectFormToggle}>
            <FaRegWindowClose />
          </div>
          <h1>Add New Project</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              name='title'
              type='text'
              placeholder='Title'
              onChange={this.handleInput}
            />
            <input
              name='tech'
              type='text'
              placeholder='Technologies'
              onChange={this.handleInput}
            />
            <input
              name='url'
              type='text'
              placeholder='URL'
              onChange={this.handleInput}
            />
            <input
              name='github'
              type='text'
              placeholder='Github'
              onChange={this.handleInput}
            />
            <textarea
              name='desc'
              type='text'
              placeholder='Description'
              onChange={this.handleInput}
            />
            <input type='file' name='image' onChange={this.handleFile} />
            <button>Add Project</button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddProjectForm;
