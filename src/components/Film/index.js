import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../img/notfound.png'

import { Card, CardTitle, Col, Button, Icon } from 'react-materialize'

const Film = ({ film, saveFavoriteFilms }) => (


  <Col l={2} className='grid-card-movie'>

    <div className="film card-movie">

      <Link to={`/film/${film.id}`}>

        <Card className='small font-card back-card' key={film.id}
          header={<CardTitle image={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : notfound}></CardTitle>}>
          <h6 className="font-card">
            {film.title}
          </h6>
          <h6 className="font-card">
            {film.vote_average}
          </h6>
        </Card>

      </Link>

      <Button className='favorite-buton' type='submit' onClick={() => saveFavoriteFilms(film)} waves='light'><Icon left>favorite</Icon></Button>

    </div>

  </Col>
);

export default Film;
