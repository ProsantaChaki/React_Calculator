import React, {Component} from "react";
import './css/Display.css'

export default class Display extends Component{

    render() {
        return(
            <div className={"components-display"}>
                <div>{this.props.displayNumber}</div>
            </div>
        );
    }
}