import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../img/notfound.png';

import { Card, CardTitle, Col, Button, Icon } from 'react-materialize';

const Favorite = ({ fav, deleteFavoriteFilms }) => (

  <Col l={2} className='grid-card-movie'>
    <div className="film card-movie">

      <Link to={`/film/${fav.id}`}>
        <Card className='small font-card back-card' key={fav.id}
          header={
            <CardTitle image={fav.poster_path ? `https://image.tmdb.org/t/p/w500${fav.poster_path}` : notfound}>
            </CardTitle>}>
          <h6 className="font-card">
            {fav.title}
          </h6>
        </Card>
      </Link>

      <Button className='favorite-button' type='submit' onClick={() => deleteFavoriteFilms(fav)} waves='light'>
        <Icon className='icon-favorite-button'>
          favorite_border
      </Icon>
      </Button>

    </div>
  </Col>
);

export default Favorite;