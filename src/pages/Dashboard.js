import React,{Component} from 'react'
import {Row, Col, Card} from 'react-materialize'

class Dashboard extends Component {
  
  render(){
    return (
      <Row>
        <Col s={12}>
          <h1 className="center">APPLICATION-HOMEPAGE</h1>
        </Col>

        <Col m={12} s={12} l={12}>
          <Card className='' textClassName='' title='Card title' >
          I am a very simple card.
          </Card>
        </Col>


      </Row>
    )
  }
}

export default Dashboard
