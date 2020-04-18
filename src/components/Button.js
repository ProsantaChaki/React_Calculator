import React, {Component} from "react";
import './css/Button.css'

export default  class Button extends Component{

    clickEvent = () => {
        this.props.clickHandler(this.props.name)
    }

    render() {
        const className = [
            'component-button',
            this.props.orange ? 'orange': '',
            this.props.wide ? 'wide': '',
            this.props.AC ? 'AC': ''

        ]
        return(
            <div className={className.join(' ').trim()}>
               <button onClick={this.clickEvent}>{this.props.name}</button>
            </div>
        )
    }

}