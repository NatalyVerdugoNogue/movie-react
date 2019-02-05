import React, { Component } from 'react';

import DataFilm from '../../components/DataFilm';
import Categories from '../../components/Categories';
import Ranking from '../../components/Ranking';

import { Row, Col, Preloader, Button, Icon } from 'react-materialize'

import { Link } from 'react-router-dom';


class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingById: false,
      movieById: [],
      errorById: false,
      id: ''
    };

  }

  async componentDidMount() {

    this.id = this.props.match.params.filmId;

    const urlById = `https://api.themoviedb.org/3/movie/${this.id}?api_key=bdf4d6ef2e610465506b8a14ec2b87ac&language=es-CL`;

    try {
      this.setState({ loadingById: true, errorById: false });
      const responseById = await fetch(urlById);
      const responseJsonById = await responseById.json();
      const movieById = responseJsonById;
      this.setState({ movieById, loadingById: false, errorById: false });
    } catch (e) {
      this.setState({ loadingById: false, errorById: true })
    }

  }

  render() {

    const { movieById, loadingById, errorById } = this.state;
    return (<div className="dataFilm">

      <Row>
        <Col l={3} className='grid-menu'>

          <Link to={`/`}>
            <Button waves='light'>Home<Icon left>cloud</Icon></Button>
          </Link>
          <Categories />
          <Ranking />
          <Link to={`/favorites`}>
            <h4 className='font-card'>Favoritas</h4>
          </Link>

        </Col>

        <Col l={9} className='grid-all-movie'>
          <Row>
            {!loadingById && <DataFilm dataFilm={movieById} />}
            {loadingById &&
              <Col l={4}>
                <Preloader flashing />
              </Col>
            }
            {!loadingById && errorById && <h2 className='font-card-warning'>Ocurrio un error</h2>}
          </Row>

        </Col>

      </Row>

    </div>
    );
  }
}
export default Single;