import React, { Component } from 'react';
import PredictionResponse from '../api/PredictionResponse';

export default class BusArrivalRow extends Component<{predictionResponse: PredictionResponse}, {}> {
    render() {
        let mins = this.props.predictionResponse.Prediction !== null ? this.props.predictionResponse.Prediction + ' mins' : 'DUE';
        return <div className="busArrivalRow"><span><img src="/bus.png" className="bus" alt="Bus" /></span><span>{this.props.predictionResponse.Destination}: {mins}</span> </div>;
    }
}