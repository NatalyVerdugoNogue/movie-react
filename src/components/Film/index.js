import React from 'react';

import { Card, CardTitle, Col } from 'react-materialize'

const Film = ({ film }) => (

  <Col l={2} className='grid-card-movie'>

    <div className="film card-movie">

      <Card className='small font-card back-card'
        header={<CardTitle image={"https://image.tmdb.org/t/p/w500" + film.poster_path}></CardTitle>}>
        <h6 className="">{film.title}</h6>
      </Card>

    </div>

  </Col>
);

export default Film;
