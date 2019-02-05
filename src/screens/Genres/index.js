import React, { Component } from 'react';

import { Row, Col, Preloader, Button, Icon } from 'react-materialize'

import Film from '../../components/Film';
import Categories from '../../components/Categories';
import Ranking from '../../components/Ranking';

import { Link } from 'react-router-dom';

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idGenres: '',
      nameGenres: '',
      loadingGenresId: false,
      movieGenresId: [],
      errorGenresId: false,
      favoriteFilms: [],
    };

  }

  saveFavoriteFilms = (film) => {

    this.state.favoriteFilms.push(film)
    this.setState(this.state.favoriteFilms);
    localStorage.setItem("MovieReact-favoriteFilms", JSON.stringify(this.state.favoriteFilms))

  }

  async getMovieByGender() {

    this.idGenres = this.props.match.params.genresId;
    this.nameGenres = this.props.match.params.genresName;

    const urlGenresId = `https://api.themoviedb.org/3/discover/movie?api_key=bdf4d6ef2e610465506b8a14ec2b87ac&language=es-Cl&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${this.idGenres}`;

    try {
      this.setState({ loadingGenresId: true, errorGenresId: false });
      const responseGenresId = await fetch(urlGenresId);
      const responseJsonGenresId = await responseGenresId.json();
      const movieGenresId = responseJsonGenresId.results.slice(0, 18);
      this.setState({ movieGenresId, loadingGenresId: false, errorGenresId: false });
    } catch (e) {
      this.setState({ loadingGenresId: false, errorGenresId: true })
    }

  }

  componentDidMount() {

    const favoriteFilms = localStorage.getItem("MovieReact-favoriteFilms");
    if (favoriteFilms) {
      this.setState({ favoriteFilms: JSON.parse(favoriteFilms) });
    }

    this.getMovieByGender();

  }

  componentDidUpdate(prevProps) {

    if (this.props.match.params.genresId !== prevProps.match.params.genresId) {
      this.getMovieByGender();
    }

  }


  render() {

    const { movieGenresId, loadingGenresId, errorGenresId } = this.state;


    return (
      <div className="dataFilm">
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
              <h4 className='font-card'>{this.nameGenres}</h4>
              {!loadingGenresId && movieGenresId.map(film => <Film film={film} saveFavoriteFilms={this.saveFavoriteFilms} />)}
              {loadingGenresId &&
                <Col l={4}>
                  <Preloader flashing />
                </Col>
              }
              {!loadingGenresId && !errorGenresId && !movieGenresId.length && <h2 className='font-card-warning'>No hay información disponible</h2>}
              {!loadingGenresId && errorGenresId && <h2 className='font-card-warning'>Ocurrio un error</h2>}
            </Row>
          </Col>
        </Row>
      </div>
    );
  };
};

export default Genres;