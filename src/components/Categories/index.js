import React from 'react';

import { Dropdown, NavItem, Button, Icon } from 'react-materialize';

import { Link } from 'react-router-dom';

const genres = [
  { "id": 28, "name": "Acción" },
  { "id": 12, "name": "Aventura" },
  { "id": 16, "name": "Animación" },
  { "id": 35, "name": "Comedia" },
  { "id": 80, "name": "Crimen" },
  { "id": 99, "name": "Documental" },
  { "id": 18, "name": "Drama" },
  { "id": 10751, "name": "Familia" },
  { "id": 14, "name": "Fantasía" },
  { "id": 36, "name": "Historia" },
  { "id": 27, "name": "Terror" },
  { "id": 10402, "name": "Música" },
  { "id": 9648, "name": "Misterio" },
  { "id": 10749, "name": "Romance" },
  { "id": 878, "name": "Ciencia ficción" },
  { "id": 10770, "name": "Película de TV" },
  { "id": 53, "name": "Suspense" },
  { "id": 10752, "name": "Bélica" },
  { "id": 37, "name": "Western" }
];

const Categories = () => (
  <Dropdown
    trigger={
      <Button>
        Categorias
        <Icon right>
          arrow_drop_down
        </Icon>
      </Button>}>
    {genres.map(genres =>
      <Link key={genres.id} to={`/genres/${genres.id}/${genres.name}`}>
        <NavItem> {genres.name}
        </NavItem>
      </Link>)}
  </Dropdown>
);

export default Categories;