import React, { Component } from 'react';
import Navbar from './navbar';
import Counters from "./counters";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 1},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleDelete = counterID => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters })
    };
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState( { counters } );
    }
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState( { counters } );
    }
    handleReset = () => {
        const counters = [...this.state.counters];
        counters.forEach(c => c.value = 0);
        this.setState( { counters } );
    }

    render() {
        return (
            <>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className='container'>
                    <Counters 
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement} />
                </main>
            </>
        );
    }
}
 
export default App;