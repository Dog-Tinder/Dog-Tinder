import React, { Component } from 'react';
import {
  Col, Container, Row, ListGroup
} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Dogs extends Component {
    render() {
        console.log("Dog")
        console.log(this.props.dogs)
        return (
        <Container>
          <Row>
            <Col xs={12}>
                <ListGroup>
                    {this.props.dogs.map((dog, index) =>{
                    return (
                <ListGroup.Item key={index}>
                    <Link to = {`/dogupdate/${dog.id}`}>Add photo</Link>

                    {dog.photo_url && <img src={dog.photo_url} />}
                    <h4>
                    <span className='dog-name'>{dog.name}</span> - <small className='dog-age'>{dog.age} years old</small>
                    </h4>
                    <span className='dog-enjoys'>{dog.enjoys}</span>
                </ListGroup.Item>
                    )
                    })}
            </ListGroup>

            </Col>
          </Row>
      </Container>
        );
    }
}

export default Dogs;
