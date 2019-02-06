import React from 'react';

import { MediaBox, Col, Row } from 'react-materialize';

import notfound from '../../img/notfound.png';

import './style.css';

const DataFilm = ({ dataFilm }) => (

  <Row>

    <Col l={12} className="fix-title fix-row">
      <p className="title-dataFilm font-card-fix">{dataFilm.title}</p>
    </Col>

    <Row className="fix-card">
      <Col l={3}>
        <MediaBox className="img-dataFilm"
          src={dataFilm.poster_path ? `https://image.tmdb.org/t/p/w500${dataFilm.poster_path}` : notfound}
          caption="A demo media box1" width="100%" />
      </Col>
      <Col l={9}>
        <table>
          <tr>
            <td className="table-ind-dataFilm">Fecha de lanzamiento</td>
            <td className="table-info-dataFilm">{dataFilm.release_date || "No existe información"}</td>
          </tr>
          <tr>
            <td className="table-ind-dataFilm">Duración</td>
            <td className="table-info-dataFilm">{`${dataFilm.runtime} minutos` || "No existe información"} </td>
          </tr>
          <tr>
            <td className="table-ind-dataFilm">Puntuación</td>
            <td className="table-info-dataFilm">{dataFilm.vote_average || "No existe información"}</td>
          </tr>
          <tr>
            <td className="table-ind-dataFilm">Reseña</td>
            <td className="table-info-dataFilm">{dataFilm.overview || "No existe información"}</td>
          </tr>
          <tr>
            <td className="table-ind-dataFilm">Página Web</td>
            <td className="table-info-dataFilm">
              <a target="_blank" rel="noopener noreferrer"
                href={dataFilm.homepage} >{dataFilm.homepage || "No existe información"}</a>
            </td>
          </tr>
        </table>
      </Col>

    </Row>

  </Row>
);

export default DataFilm;