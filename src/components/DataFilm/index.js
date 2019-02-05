import React from 'react';

import { MediaBox, Col, Row } from 'react-materialize'

import notfound from '../../img/notfound.png'

const DataFilm = ({ dataFilm }) => (
  <Row>
    <Col l={6}>

      <MediaBox src={dataFilm.poster_path ? `https://image.tmdb.org/t/p/w500${dataFilm.poster_path}` : notfound} caption="A demo media box1" width="350" />


    </Col>

    <Col l={6}>
    </Col>
  </Row>
);

export default DataFilm;