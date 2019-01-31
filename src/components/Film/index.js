import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardTitle, Col } from 'react-materialize'

const Film = ({ film }) => (

  <Col l={2} className='grid-card-movie'>

    <div className="film card-movie">

      <Link to={`/film/${film.id}`}>
        <Card className='small font-card back-card' key={film.id}
          header={<CardTitle image={"https://image.tmdb.org/t/p/w500" + film.poster_path}></CardTitle>}>
          <h6 className="font-card">
            {film.title}
          </h6>
        </Card>
      </Link>

    </div>

  </Col>
);

export default Film;
