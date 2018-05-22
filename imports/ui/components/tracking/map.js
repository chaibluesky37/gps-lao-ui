/*
 * @Author: Prawee Wongsa prawee@hotmail.com 
 * @Date: 2018-05-20 18:34:25 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2018-05-21 05:20:26
 */
import React, { Component } from 'react';
import L from 'leaflet'
import GoogleMapReact from 'google-map-react';

class MapTracking extends Component {
  static defaultProps= {
    center: {
      lat: 13.7251088,
      lng: 100.3529055
    }
    ,zoom: 6
  }
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBESgXSW_pldKC4m-JoB9rzDm1dCvaqKW4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapTracking;


