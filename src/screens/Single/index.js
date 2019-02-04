import React, { Component } from 'react';

import DataFilm from '../../components/DataFilm';

import { Row, Col, Preloader } from 'react-materialize'


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
        {!loadingById && <DataFilm dataFilm={movieById} />}
        {loadingById &&
          <Col l={4}>
            <Preloader flashing />
          </Col>
        }
        {!loadingById && errorById && <h2 className='font-card-warning'>Ocurrio un error</h2>}
      </Row>

    </div>
    );
  }
}
export default Single;