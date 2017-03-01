import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default class Chart extends Component {
    constructor(props) {
        super(props);
    }
    average(data) {
        //convert kelvic to celcius
        return _.round((_.sum(data) / data.length));
    }
    render() {
        return (
            <div>
              <Sparklines data={this.props.data}>
                <SparklinesLine color={this.props.color}/>
                <SparklinesReferenceLine type="mean"/>
              </Sparklines>
              {this.average(this.props.data)} {this.props.type}

            </div>
        )
    }
}
