import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SideBarUserPanel from './sidebar_user_panel'; 
// <SideBarUserPanel userName={this.userDisplayName()} />
// import SideBarSearchPanel from './sidebar_search_panel'; <SideBarSearchPanel />
import SideBarMenu from './sidebar_menu';

export default class SideBar extends Component {
  componentDidMount() {
    $('.sidebar-menu').tree();
  }

  userDisplayName() {
    const currentUser = this.props.user;
    let name = 'Alexander Pierce';

    if (currentUser) {
      name = currentUser.emails[0].address;
    }

    return name;
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <SideBarMenu userCount={this.props.users.length} />
        </section>
      </aside>
    );
  }
}

SideBar.propTypes = {
  user: PropTypes.object,
  users: PropTypes.array,
};
