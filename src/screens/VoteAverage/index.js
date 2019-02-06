import React, { Component } from 'react';

import { Row, Col, Preloader } from 'react-materialize'

import Film from '../../components/Film';
import SideNavCom from '../../components/SideNavCom';

class VoteAverage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGte: 1,
      valueLte: 10,
      loadingValue: false,
      movieValue: [],
      errorValue: false,
      favoriteFilms: [],
    };

  }

  saveFavoriteFilms = (film) => {

    this.state.favoriteFilms.push(film)
    this.setState(this.state.favoriteFilms);
    localStorage.setItem("MovieReact-favoriteFilms", JSON.stringify(this.state.favoriteFilms))

  }

  async getMovieByVoteAverage() {

    this.valueGte = this.props.match.params.valueGte;
    this.valueLte = this.props.match.params.valueLte;

    const urlValue = `https://api.themoviedb.org/3/discover/movie?api_key=bdf4d6ef2e610465506b8a14ec2b87ac&language=es-CL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    &vote_average.gte=${this.valueGte}&vote_average.lte=${this.valueLte}`;

    try {
      this.setState({ loadingValue: true, errorValue: false });
      const responseValue = await fetch(urlValue);
      const responseJsonValue = await responseValue.json();
      const movieValue = responseJsonValue.results.slice(0, 18);
      this.setState({ movieValue, loadingValue: false, errorValue: false });
    } catch (e) {
      this.setState({ loadingValue: false, errorValue: true })
    }

  }

  componentDidMount() {

    const favoriteFilms = localStorage.getItem("MovieReact-favoriteFilms");
    if (favoriteFilms) {
      this.setState({ favoriteFilms: JSON.parse(favoriteFilms) });
    }

    this.getMovieByVoteAverage();

  }

  componentDidUpdate(prevProps) {

    if (this.props.match.params.valueGte !== prevProps.match.params.valueGte || this.props.match.params.valueLte !== prevProps.match.params.valueLte) {
      this.getMovieByVoteAverage();
    }

  }


  render() {

    const { movieValue, loadingValue, errorValue } = this.state;


    return (

      <div className="dataFilm">
        <Row>
          <Col l={3} className='grid-menu'>
            <SideNavCom />
          </Col>

          <Col l={9} className='grid-all-movie'>
            <Row>
              <Col l={12} className='fix-title'>
                <Row className="fix-row">
                  <Col l={2}>
                    <p className='font-card-fix'>RANKING</p></Col>
                  <Col l={10}>
                    <p className='font-card-fix'>{this.valueGte}-{this.valueLte}</p></Col>
                </Row>
              </Col>
              <Row className='fix-card'>
                {!loadingValue && movieValue.map(film => <Film film={film} saveFavoriteFilms={this.saveFavoriteFilms} />)}
              </Row>
              {loadingValue &&
                <Col l={4} className='fix-card'>
                  <Preloader flashing />
                </Col>
              }
              {!loadingValue && !errorValue && !movieValue.length && <h2 className='font-card-warning'>No hay información disponible</h2>}
              {!loadingValue && errorValue && <h2 className='font-card-warning'>Ocurrio un error</h2>}
            </Row>
          </Col>

        </Row>
      </div>

    );
  };
};

export default VoteAverage;