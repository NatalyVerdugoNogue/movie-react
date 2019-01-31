import React, { Component } from 'react';

import Film from '../../components/Film';

import './style.css';

import { Row, Col, Preloader } from 'react-materialize'

const urlPopularity = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=es-CL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const urlRelaseDate = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=es-CL&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1`;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingPopularity: false,
      moviePopularity: [],
      errorPopularity: false,
      loadingRelaseDate: false,
      movieRelaseDate: [],
      errorRelaseDate: false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({ loadingPopularity: true, errorPopularity: false });
      const responsePopularity = await fetch(urlPopularity);
      const responseJsonPopularity = await responsePopularity.json();
      const moviePopularity = responseJsonPopularity.results.slice(0, 6);
      this.setState({ moviePopularity, loadingPopularity: false, errorPopularity: false });
    } catch (e) {
      this.setState({ loadingPopularity: false, errorPopularity: true })
    }

    try {
      this.setState({ loadingRelaseDate: true, errorRelaseDate: false });
      const responseRelaseDate = await fetch(urlRelaseDate);
      const responseJsonRelaseDate = await responseRelaseDate.json();
      const movieRelaseDate = responseJsonRelaseDate.results.slice(0, 6);
      this.setState({ movieRelaseDate, loadingRelaseDate: false, errorRelaseDate: false });
    } catch (e) {
      this.setState({ loadingRelaseDate: false, errorRelaseDate: true })
    }

  }

  render() {
    const { moviePopularity, loadingPopularity, errorPopularity } = this.state;
    const { movieRelaseDate, loadingRelaseDate, errorRelaseDate } = this.state;

    return (

      <div className="main">

        <Row>
          <Col l={3} className='grid-menu'>
            1
          </Col>

          <Col l={9} className='grid-all-movie'>

            <Row>
              <h4 className='font-card'>Las más populares</h4>
              {!loadingPopularity && moviePopularity.map(film => <Film film={film} />)}
              {loadingPopularity &&
                <Col l={4}>
                  <Preloader flashing />
                </Col>
              }
              {!loadingPopularity && !errorPopularity && !moviePopularity.length && <h2 className='font-card-warning'>No hay información disponible</h2>}
              {!loadingPopularity && errorPopularity && <h2 className='font-card-warning'>Ocurrio un error</h2>}
            </Row>
            <Row>
              <h4 className='font-card'>Nuevo en cartelera</h4>
              {!loadingRelaseDate && movieRelaseDate.map(film => <Film film={film} />)}
              {loadingRelaseDate &&
                <Col l={4}>
                  <Preloader flashing />
                </Col>
              }
              {!loadingRelaseDate && !errorRelaseDate && !movieRelaseDate.length && <h2 className='font-card-warning'>No hay información disponible</h2>}
              {!loadingRelaseDate && errorRelaseDate && <h2 className='font-card-warning'>Ocurrio un error</h2>}
            </Row>

          </Col>

        </Row>

      </div>
    );
  }
}

export default Home;
