import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../img/notfound.png'
import stars from '../../img/stars.png'

import { Card, CardTitle, Col, Button, Icon, MediaBox } from 'react-materialize'

import './style.css';

const Film = ({ film, saveFavoriteFilms }) => (


  <Col l={2} className='grid-card-movie'>

    <div className="film card-movie">

      <Link to={`/film/${film.id}`}>

        <Card className='small font-card back-card' key={film.id}
          header={<CardTitle image={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : notfound}></CardTitle>}>
          <h6 className="font-card">
            {film.title}
          </h6>
        </Card>

      </Link>

      <div className="star-vote" style={{ width: `${(film.vote_average * 10)}%` }}>
        <MediaBox src={stars} caption="A demo media box1" width="132" />
      </div>


      <Button className='favorite-button' type='submit' onClick={() => saveFavoriteFilms(film)} waves='light'><Icon className='icon-favorite-button'>favorite</Icon></Button>

    </div>

  </Col>
);

export default Film;
