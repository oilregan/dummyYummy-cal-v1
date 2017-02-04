import React , {Component,PropTypes} from 'react';


export class CounterComponent extends Component {

    static propTypes = {
      value: PropTypes.number.isRequired,
    }

    render() {

            return(
            <div>
                {this.props.value}
                hey
            </div>
        )
    }
}
