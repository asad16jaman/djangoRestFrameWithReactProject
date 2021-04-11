import './App.css';
import './bootstrap/bootstrap.min.css'
import Plan from './Plan'
import React, { Component } from 'react'
import axios from 'axios'


const ai = axios.create({
  baseURL:'http://localhost:8000'
})

export default class App extends Component {

  state={
    item:[],
    text:''
  }

  getApiData= ()=>{
    ai.get('/api/')
    .then(res=>{
      this.setState({
        item:res.data
      })
    })

  }

  postApiData= (d)=>{
    ai.post('/create/',d)
    .then(res=>{
      this.getApiData()

      this.setState({
        ...this.state,
        text:''
      })

    })
  }

  componentDidMount(){
    this.getApiData()
  }

  textChangeValue = e=>{
    this.setState({
      text:e.target.value
    })
  }

  AddItem = e =>{

    if(this.state.text !== ''){
      let x = {
        plan:this.state.text
      }
      this.postApiData(x)
      
    }

  }

  DeleteItemFormState = (id,e)=>{

    ai.delete(`/del/${id}/`)
    .then(res=>{
      this.getApiData()
    })


  }


  render() {

    const allLi = this.state.item.map((el,ind)=>{
      return <Plan myvalue={el.plan}  myind={el.id} key={ind} handelar={this.DeleteItemFormState} />
    })
    
  

    return (
      <div className="container-fluid my-5">
        <div className="row">
            <div className="col-md-6 mx-auto shadow-lg p-3">
              <h1 className="text-center text-white">
                Today's plan
              </h1>
              <div className="row">
                <div className="col-md-9">
                  <input value={this.state.text} onChange={this.textChangeValue} type="text" placeholder='write plane hare ' className='form-control' />
                </div>
                <div className="col-2">
                  <button className='btn btn-warning px-5' onClick={this.AddItem}>ADD</button>
                </div>
  
                <div className="container-fluid">
                  <ul className='list-unstyled row m-5'>
                    {allLi}
                  </ul>
                </div>
  
  
              </div>
            </div>
        </div>
      </div>
    );
  }
}



