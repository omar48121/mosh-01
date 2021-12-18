import React, { Component } from "react";

class Counter extends Component {
    formatCount() {
        let count = this.props.counter.value;
        return count === 0 ? "zero" : count;
    }
    getBadgeClasses() {
        let classes = "badge m-2 p-2";
        classes += this.props.counter.value === 0 ? " badge-warning" : " badge-primary";
        return classes;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
                    </div>
                    <div className="col">
                        <button 
                            onClick={ () => this.props.onIncrement(this.props.counter) } 
                            className="btn btn-secondary btn-sm">
                                +
                        </button>
                        <button 
                            disabled={ this.props.counter.value === 0 ? true : false }
                            onClick={ () => this.props.onDecrement(this.props.counter) } 
                            className="btn btn-secondary btn-sm m-2 ">
                                -
                        </button>
                        <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">x</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;