import React, { Component } from 'react';

import { Row, Col } from 'react-materialize'

import Favorite from '../../components/Favorite';
import SideNavCom from '../../components/SideNavCom';

class AllFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteFilms: [],
    };

  }


  componentDidMount() {

    const favoriteFilms = localStorage.getItem("MovieReact-favoriteFilms");
    if (favoriteFilms) {
      this.setState({ favoriteFilms: JSON.parse(favoriteFilms) });
    }

  }


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
              <h4 className='font-card'>Favoritas</h4>
              {favoriteFilms.map(fav => <Favorite fav={fav} saveFavoriteFilms={this.saveFavoriteFilms} />)}

            </Row>
          </Col>
        </Row>
      </div>
    );
  };
};

export default AllFavorite;