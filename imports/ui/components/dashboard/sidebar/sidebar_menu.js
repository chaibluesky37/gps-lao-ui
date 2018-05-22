import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideBarMenu = () => (
  <ul className="sidebar-menu" data-widget="tree">
    <li className="header">MENU</li>

    <li>
      <Link to="/dashboard" activeClassName="active">
        <i className="fa fa-home" /> <span>Home</span>
      </Link>
    </li> 

    <li>
      <Link to="/tracking">
        <i className="fa fa-globe" /> <span>Tracking</span>
      </Link>
    </li>

    <li>
      <Link to="/history">
        <i className="fa fa-history" /> <span>History</span>
      </Link>
    </li>

    <li>
      <Link to="/report">
        <i className="fa fa-file" /> <span>Report</span>
      </Link>
    </li>

    <li className="treeview">
      <a to="#">
        <i className="fa fa-cog" /> <span>Setting</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-left pull-right" />
        </span>
      </a>
      <ul className="treeview-menu">
        <li><Link to="/setting/truck"><i className="fa fa-circle-o" /> Truck</Link></li>
        <li><Link to="/setting/user"><i className="fa fa-circle-o" /> User</Link></li>
        <li><Link to="/setting/station"><i className="fa fa-circle-o" /> Station</Link></li>
        <li><Link to="/setting/permission"><i className="fa fa-circle-o" /> Permission</Link></li>
      </ul>
    </li>

    <li className="treeview">
      <a href="#">
        <i className="fa fa-cogs" /> <span>Management</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-left pull-right" />
        </span>
      </a>
      <ul className="treeview-menu">
        <li><Link to="/manage/device"><i className="fa fa-circle-o" /> Device</Link></li>
        <li><Link to="/manage/customer"><i className="fa fa-circle-o" /> Customer</Link></li>
        <li><Link to="/manage/sms-command"><i className="fa fa-circle-o" /> SMS Command</Link></li>
      </ul>
    </li>
  </ul>
);

SideBarMenu.propTypes = {
  // userCount: PropTypes.number,
};

export default SideBarMenu;
