import React from 'react';

import { Card, CardTitle } from 'react-materialize'

import notfound from '../../img/notfound.png'

const DataFilm = ({ dataFilm }) => (

  <Card className='small'
    header={<CardTitle image={dataFilm.poster_path ? `https://image.tmdb.org/t/p/w500${dataFilm.poster_path}` : notfound}>
      {dataFilm.title}</CardTitle>}>
    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>


);

export default DataFilm;