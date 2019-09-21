import React, { Component } from 'react';
import BusTrackerApi from '../api/BusTrackerApi';
import PredictionResponse from '../api/PredictionResponse';
import BusArrivalRow from './BusArrivalRow';

export default class BusArrival extends Component<{}, {isFetching: boolean, predictionResponses: PredictionResponse[]}> {
    timer: number;
    constructor(props: any) {
        super(props);
        this.timer = 0;
        this.state = {
            isFetching: false,
            predictionResponses: new Array<PredictionResponse>()
        }
    }

    render() {
        const responseData = new Array<any>();
        this.state.predictionResponses.forEach((response, idx) => {
            responseData.push(<BusArrivalRow key={idx} predictionResponse={response}></BusArrivalRow>)
        });
        return (<div>{this.state.isFetching ? 'Refreshing...' : responseData}</div>);
    }

    componentDidMount() {
        this.fetchData();
        this.timer = setInterval(() => this.fetchData(), 20000);
    }

    async fetchData() {
        this.setState({...this.state, isFetching: true});
        await BusTrackerApi.getPredictions([1345, 1227]).then(predictionResponses => {
            this.setState({...this.state, isFetching: false, predictionResponses: predictionResponses});
        }).catch(reason => {
            console.log('Error fetching: ' + reason);
            this.setState({...this.state, isFetching: false});
        });
        
    }
}