import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {super (props)
    this.state={answer:"", runningTotal:0, currentOperation:""}
  }
  buttonHandler (button) {
    if (button==="+") {
      this.setState((state) => {return {runningTotal:state.runningTotal+parseFloat(state.answer), answer:"", currentOperation:"+"}})
    } else if (button==="-"){
      if (this.state.runningTotal===0) {
        this.setState((state) => {return {runningTotal:(parseFloat(state.answer)), answer:"", currentOperation:"-"}})
      }
      this.setState((state) => {return {runningTotal:state.runningTotal-parseFloat(state.answer), answer:"", currentOperation:"-"}})
    

    } else if (button==="=") {
      let total=0
      if (this.state.currentOperation==="+"){
       total=this.state.runningTotal+parseFloat(this.state.answer)
      } else if (this.state.currentOperation==="-"){
        console.log(this.state)
        total=this.state.runningTotal-parseFloat(this.state.answer)
        console.log(total) 
      }

      this.setState({answer: total, runningTotal:0, currentOperation:""})
    } else {

    this.setState((state) => {return {answer:state.answer+button}})
  }}
  
  render () {
  
    return (
    <Container className="calculator">
      <Row>
      <input readOnly value={this.state.answer} type="text" id="answer" name="answer"/>
      </Row>
      <Row>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("7")}>7</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("8")}>8</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("9")} >9</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("/")} >/</Button>
        </Col>
      </Row>
      <Row>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("4")}>4</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("5")}>5</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("6")}>6</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("*")}>*</Button>
        </Col>
      </Row>
      <Row>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("1")} >1</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("2")}>2</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("3")}>3</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("-")}>-</Button>
        </Col>
      </Row>
      <Row>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("0")}>0</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler(".")} >.</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("=")}>=</Button>
        </Col>
        <Col className="buttons" sm="3">
        <Button onClick={()=> this.buttonHandler("+")}>+</Button>
        </Col>
      </Row>
    </Container>
  );
}
}
export default App;
