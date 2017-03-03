import React, {Component} from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        var coordinates = this.props.coordinates;
        new google.maps.Map(this.refs.map, {
            zoom: 11,
            center: coordinates,
        });
    }
    render() {
        return <div ref="map" className="map"/>
    }
}

export default GoogleMap;
