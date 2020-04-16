import React, {Component, useState} from "react";
import './css/Button.css'
import PropTypes from 'prop-types';

export default  class Button extends Component{

    render() {
        const className = [
            'component-button',
            this.props.orange ? 'orange': '',
            this.props.wide? 'wide': ''
        ]
        return(
            <div className={className.join(' ').trim()}>
               <button>{this.props.name}</button>
            </div>
        )
    }

}