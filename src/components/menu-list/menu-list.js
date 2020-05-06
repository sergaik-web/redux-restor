import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import WithRestoService from "../hoc";
import { menuLoaded, menuRequested, menuError } from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

import "./menu-list.scss";

class MenuList extends Component {
  renderItems(arr) {
    return arr.map((menuItem) => {
      return <MenuListItem key={menuItem.id} menuItem={menuItem} />;
    });
  }

  render() {
    const { menuItems } = this.props;
    const Items = this.renderItems(menuItems);

    return <ul className="menu__list">{Items}</ul>;
  }
}

const WithData = (MenuList) => {
  return class extends Component {
    componentDidMount() {
      this.props.menuRequested();
      const { RestoService } = this.props;
      RestoService.getMenuItems().then((res) => this.props.menuLoaded(res));
    }

    componentDidCatch() {
      console.log(this.props);
      this.props.menuError();
    }

    render() {
      const { loading, error } = this.props;

      if (error) {
        return <Error />;
      }

      if (loading) {
        return <Spinner />;
      }

      return <MenuList {...this.props} />;
    }
  };
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  menuError,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(WithData(MenuList))
);
