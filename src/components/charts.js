import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default(props) => {
    console.log(props.color);
    return (
        <div>
          <Sparklines data={props.data}>
            <SparklinesLine color={props.color}/>
            </Sparklines>
        </div>
    )
}
