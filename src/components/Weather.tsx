import React, { Component } from 'react';

export default class Weather extends Component<{}, {isFetching: boolean}> {
    timer: number;
    constructor(props: any) {
        super(props);
        this.timer = 0;
        this.state = {
            isFetching: false,
        }
    }

    render() {
        return <div>WEATHER</div>;
    }

    componentDidMount() {
        this.fetchData();
        this.timer = setInterval(() => this.fetchData(), 30 * 1000);
    }

    async fetchData() {
        this.setState({
            isFetching: true
        })
        this.setState({
            isFetching: false
        })
    }
}