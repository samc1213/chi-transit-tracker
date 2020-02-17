import React, { Component } from 'react';
import Arrivals from './Arrivals';
import Weather from './Weather';

export default class Dashboard extends Component<{}, {arrivalsDataIndex: number, transitionState: number}> {
    timer: number;
    transitionStates = ['Arrival0', 'Arrival1', 'Arrival2', 'Weather'];
    constructor(props: any) {
        super(props);
        this.timer = 0;
        this.state = {
            arrivalsDataIndex: 0,
            transitionState: 0
        }
    }

    render() {
        let state = this.transitionStates[this.state.transitionState];
        if (state.startsWith('Arrival')) {
            return <Arrivals dataIndex={this.state.arrivalsDataIndex} />
        }
        else if (state === 'Weather') {
            return <Weather />
        }
    }

    update() {
        let newState = this.transitionStates[(this.state.transitionState + 1) % this.transitionStates.length];
        if (newState.startsWith('Arrival')) {
            this.setState({
                arrivalsDataIndex: Number.parseInt(newState.split('Arrival')[1]),
                transitionState: (this.state.transitionState + 1) % this.transitionStates.length
            });
        }
        else {
            this.setState({
                transitionState: (this.state.transitionState + 1) % this.transitionStates.length
            });
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.update(), 10 * 1000);
    }
}
