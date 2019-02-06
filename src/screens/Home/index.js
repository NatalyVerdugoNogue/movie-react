import React, { Component } from 'react';

import Film from '../../components/Film';
import Favorite from '../../components/Favorite';
import SideNavCom from '../../components/SideNavCom';

import './style.css';


import { Row, Col, Preloader } from 'react-materialize'


const urlPopularity = `https://api.themoviedb.org/3/discover/movie?api_key=bdf4d6ef2e610465506b8a14ec2b87ac&language=es-CL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const urlRelaseDate = `https://api.themoviedb.org/3/discover/movie?api_key=bdf4d6ef2e610465506b8a14ec2b87ac&language=es-CL&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1`;

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
      favoriteFilms: [],
    };
  }


  async componentDidMount() {

    const favoriteFilms = localStorage.getItem("MovieReact-favoriteFilms");
    if (favoriteFilms) {
      this.setState({ favoriteFilms: JSON.parse(favoriteFilms) });
    }

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

  saveFavoriteFilms = (film) => {
    this.state.favoriteFilms.push(film)
    this.setState(this.state.favoriteFilms);
    localStorage.setItem("MovieReact-favoriteFilms", JSON.stringify(this.state.favoriteFilms))
  }

  render() {

    const { moviePopularity, loadingPopularity, errorPopularity } = this.state;
    const { movieRelaseDate, loadingRelaseDate, errorRelaseDate } = this.state;
    const { favoriteFilms } = this.state;

    return (

      <div className="main">

        <Row>
          <Col l={3} className='grid-menu'>
            <SideNavCom />
          </Col>

          <Col l={9} className='grid-all-movie'>

            <Row>
              <p className='font-card-fix'>Las más populares</p>
              {!loadingPopularity && moviePopularity.map(film => <Film film={film} saveFavoriteFilms={this.saveFavoriteFilms} />)}
              {loadingPopularity &&
                <Col l={4}>
                  <Preloader flashing />
                </Col>
              }
              {!loadingPopularity && !errorPopularity && !moviePopularity.length && <h2 className='font-card-warning'>No hay información disponible</h2>}
              {!loadingPopularity && errorPopularity && <h2 className='font-card-warning'>Ocurrio un error</h2>}
            </Row>

            <Row>
              <p className='font-card-fix'>Nuevo en cartelera</p>
              {!loadingRelaseDate && movieRelaseDate.map(film => <Film film={film} saveFavoriteFilms={this.saveFavoriteFilms} />)}
              {loadingRelaseDate &&
                <Col l={4}>
                  <Preloader flashing />
                </Col>
              }
              {!loadingRelaseDate && !errorRelaseDate && !movieRelaseDate.length && <h2 className='font-card-warning'>No hay información disponible</h2>}
              {!loadingRelaseDate && errorRelaseDate && <h2 className='font-card-warning'>Ocurrio un error</h2>}
            </Row>

            <Row>
              <p className='font-card-fix'>Favoritas</p>
              {favoriteFilms.slice(0, 6).map(fav => <Favorite fav={fav} />)}
              {loadingRelaseDate &&
                <Col l={4}>
                  <Preloader flashing />
                </Col>
              }
              {!favoriteFilms.length && <h2 className='font-card-warning'>No hay películas favoritas</h2>}
              {!favoriteFilms && <h2 className='font-card-warning'>Ocurrio un error</h2>}
            </Row>


          </Col>

        </Row>

      </div>
    );
  }
}

export default Home;
