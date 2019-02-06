import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

import Favorite from '../../components/Favorite';
import SideNavCom from '../../components/SideNavCom';

class AllFavorite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteFilms: [],
    };
  };

  deleteFavoriteFilms = (fav) => {
    const index = this.state.favoriteFilms.indexOf(fav);
    if (index > -1) {
      this.state.favoriteFilms.splice(index, 1);
      this.setState(this.state.favoriteFilms);
      localStorage.setItem("MovieReact-favoriteFilms", JSON.stringify(this.state.favoriteFilms));
    };
  };

  mountFavoriteFilms = () => {
    const favoriteFilms = localStorage.getItem("MovieReact-favoriteFilms");
    if (favoriteFilms) {
      this.setState({ favoriteFilms: JSON.parse(favoriteFilms) });
    };
  };

  componentDidMount() {
    this.mountFavoriteFilms();
  };

  render() {

    const { favoriteFilms } = this.state;

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
                    <p className='font-card-fix'>FAVORITAS</p>
                  </Col>
                </Row>

              </Col>

              <Row className='fix-card'>
                {favoriteFilms.map(fav => <Favorite fav={fav} deleteFavoriteFilms={this.deleteFavoriteFilms} />)}
              </Row>

            </Row>

          </Col>

        </Row>
      </div>

    );
  };
};

export default AllFavorite;