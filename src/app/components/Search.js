import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { link, rowStyle, selectStyle, star, goldStar, buttonColStyle } from "../../css/sidebar-css";
import { Row, FormGroup, Col, UncontrolledTooltip } from "reactstrap";
import Select from "react-select";
import { saveFavoriteLinks } from "../home/favoriteLinksActions";

class Search extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleRender = this.handleRender.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.setUnFavorite = this.setUnFavorite.bind(this);
  }

  setFavorite(fav) {
    if (!this.props.favorites.some(favItem => favItem.id === fav.id)) {
      this.props.saveFavoriteLinks([...this.props.favorites, fav]);
    }
  }

  setUnFavorite(fav) {
    const favorites = this.props.favorites.filter(option => option.id !== fav.id);
    this.props.saveFavoriteLinks(favorites);
  }

  handleRender(data) {
    renderTFApplication("pageContainer", data);
    this.props.toggle();
  }

  onChange(currentSelected) {
    this.setState({
      currentSelected
    });
  }

  render() {
    const { favorites } = this.props;

    const Option = props => {
      const { data } = props;
      return (
        <Row key={data.id} style={rowStyle}>
          <Col className="p-0">
            <div className="mylink" style={link}>
              <span id={`jumpto-${data.value}`} onClick={e => this.handleRender(data)}>
                {data.label}
              </span>
              <UncontrolledTooltip placement="bottom" target={`jumpto-${data.value}`}>
                Jump to {data.label}
              </UncontrolledTooltip>
              {favorites.some(fav => fav.id === data.id) ? (
                <button className="fav-icon" style={buttonColStyle} onClick={e => this.setUnFavorite(data)}>
                  <i class="far fa-star fav" style={goldStar}></i>
                </button>
              ) : (
                <button className="fav-icon" style={buttonColStyle} onClick={e => this.setFavorite(data)}>
                  <i class="far fa-star" style={star}></i>
                </button>
              )}
            </div>
          </Col>
        </Row>
      );
    };

    return (
      <FormGroup style={{ zIndex: 999, position: "relative" }} className='m-0'>
        <Select
          singleValue
          isSearchable
          placeholder="Search Links"
          options={this.props.options}
          onChange={this.onChange}
          value={this.state.currentSelected}
          style={selectStyle}
          components={{ Option }}
        />
      </FormGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.moduleAreas.areas,
    favorites: state.favoriteLinks.filter(opt => opt.id !== "testHarness")
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveFavoriteLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
