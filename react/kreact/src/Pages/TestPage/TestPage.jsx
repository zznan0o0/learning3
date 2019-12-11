import React, {Component} from 'react';
import Select from 'react-select'

import Fetcher from 'public/Fetcher.js';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const fetcher = new Fetcher();



class TestPage extends Component{
  state = {
    option: []
  }

  constructor(props){
    super(props);
    fetcher
      .postRequest('http://192.168.10.209/GetCompanyInfo', {
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      });

    // fetcher
    //   .postRequest('http://192.168.10.209/GetCompanyInfo', {
    //     client_name: ''
    //   })
    //   .then(res => res.json())
    //   .catch(e => console.log(e))
    //   .then(res => {
    //     console.log(res)
    //     let data = [];
    //     res.forEach(element => {
    //       data.push({ value: element.id, label: element.client_name });
    //     });

    //     this.setState({option: data});
    //   });
  }

  render(){
    return (
      <div>
        <Select 
          options={this.state.option}
          isMulti 
        />
      </div>
    );
  }
}

export default TestPage;