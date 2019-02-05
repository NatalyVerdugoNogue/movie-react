import React, { Component } from 'react';

import { Row, Input, Col, Button } from 'react-materialize'

import { Link } from 'react-router-dom';


class Ranking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueGte: 1,
      valueLte: 10
    };

    this.handleChangeGte = this.handleChangeGte.bind(this);
    this.handleChangeLte = this.handleChangeLte.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeGte(event) {
    this.setState({ valueGte: event.target.value });
  }

  handleChangeLte(event) {
    this.setState({ valueLte: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.valueGte, this.state.valueLte);
    event.preventDefault();

  }

  render() {

    const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (

      <Row>
        <form onSubmit={this.handleSubmit} >

          <Col l={12}  >
            <p className="side-ranking">RANKING</p>
          </Col>

          <Col l={6} >
            <Input className="desde-hasta-ranking" l={12} type='select' label="Desde" defaultValue='1' value={this.state.valueGte} onChange={this.handleChangeGte}>
              {score.map(score => <option value={score}>{score}</option>)}
            </Input>
          </Col>

          <Col l={6} >
            <Input className="desde-hasta-ranking" l={12} type='select' label="Hasta" defaultValue='10' value={this.state.valueLte} onChange={this.handleChangeLte}>
              {score.map(score => <option value={score}>{score}</option>)}
            </Input>
          </Col>

          <Col l={12} className="border-filtrar-ranking" >
            <Link to={`/ranking/${this.state.valueGte}/${this.state.valueLte}`}>
              <Button type='submit'className="filtrar-ranking">Filtrar</Button>
            </Link>
          </Col>

        </form>

      </Row>
    );
  };
};

export default Ranking