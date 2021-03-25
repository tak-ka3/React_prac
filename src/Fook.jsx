import React,{useState, useEffect} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';

const total = (a) => {
  let re = 0
  for (let i = 0; i <= a; i++){
    re += i
  }
  return re
}

const tax = (a) => {
  return Math.floor(a * 1.1)
}

const AlertMessage = (props) =>{
  const [msg, setCalc] = useCalc()
  const onChange = (e) => {
    setCalc(e.target.value)
  }
  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange} className="form-control"/>
  </div>
}
const PlainMessage = (props) => {
  const [msg, setCalc] = useCalc(0, total)
  const onChange = (e) => {
    setCalc(e.target.value)
  }
  return <div className="p-3 h5">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange} className="form-control"/>
  </div>
}
const CardMessage = (props) => {
  const [msg, setCalc] = useCalc(0, tax)
  const onChange = (e) => {
    setCalc(e.target.value)
  }
  return <div className="card p-3 border-primary">
    <h5>{msg}</h5>
    <input type="range" min="0" max="10000" step="100" onChange={onChange} className="form-control"/>
  </div>
}

const useCalc = (num=0, func = (a) => {return a}) =>{
  const [msg, setMsg] = useState(null)
  const setValue = (p) => {
    let res = func(p)
    setMsg(<p className="h5">※{p}の結果は{res}です。</p>)
  }
  return [msg, setValue]
}

const Fook = () => {
  return <>
  <h1 className="bg-primary text-white display-4">React</h1>
  <div className="container">
    <h4 className="my-3">Hooks sample</h4>
    <AlertMessage/>
    <PlainMessage/>
    <CardMessage/>
    {/* <div className="form-group">
      <label>Input:</label>
      <input type="number" className="form-control" onChange={doChange}/>
      <button className="btn btn-primary" onClick={doAction}>Calc</button>
    </div> */}
    <hr/>
  </div>
  </>
}

export default Fook;