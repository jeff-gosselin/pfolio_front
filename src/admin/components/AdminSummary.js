import React, { Component } from 'react';
import { url } from '../../urlBase';
import axios from 'axios';

class AdminSummary extends Component {
  state = {
    summaryContent: [],
    summaryID: null
  };

  async componentDidMount() {
    let mySummary = await axios({
      url: `${url}api/v1/summaries`,
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      }
    });

    this.setState({
      summaryContent: mySummary.data[0] ? mySummary.data[0].content : [],
      summaryID: mySummary.data[0] ? mySummary.data[0].id : null
    });
  }

  handleCaption = event => {
    this.setState({
      summaryContent: event.target.value
    });
  };

  submitCaption = event => {
    event.preventDefault();

    let id = localStorage.getItem('id');
    if (this.state.summaryID === null) {
      axios({
        url: `${url}api/v1/summaries`,
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.token}`
        },
        data: {
          content: this.state.summaryContent,
          user_id: id
        }
      }).then(result => {
        this.setState({
          summaryContent: result.data.content,
          summaryID: result.data.id
        });
      });
    } else {
      axios({
        url: `${url}api/v1/summaries/${this.state.summaryID}`,
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        data: {
          content: this.state.summaryContent,
          user_id: id
        }
      }).then(result => console.log(result));
    }
  };

  render() {
    console.log('Summary ID:', this.state.summaryID);
    return (
      <div className='admin-caption'>
        <div className='admin-caption-header'>
          <h2>About Me</h2>
        </div>
        <form onSubmit={this.submitCaption}>
          <textarea
            name='bio'
            onChange={this.handleCaption}
            value={this.state.summaryContent}
            placeholder="Tell them what you're about."
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AdminSummary;
