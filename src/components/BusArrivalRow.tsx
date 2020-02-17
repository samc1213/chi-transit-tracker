import React, { Component } from 'react';
import PredictionResponse, {PredictionLine} from '../api/PredictionResponse';

export default class BusArrivalRow extends Component<{predictionResponse: PredictionResponse}, {}> {
    render() {
        let mins = this.props.predictionResponse.Prediction !== null ? this.props.predictionResponse.Prediction + ' mins' : 'DUE';
        return (
            <div className="arrival" style={{background: this.getcolor(this.props.predictionResponse.Line)}}>
                <li className="arrival-detail arrival-destination">{this.props.predictionResponse.Destination}</li> <li className="arrival-detail arrival-mins">{mins}</li>
            </div>
        );
    }

    private getcolor(line: PredictionLine) {
        switch (line) {
            case PredictionLine.Purple:
                return 'Purple';
            case PredictionLine.Brown:
                return 'Sienna';
            case PredictionLine.Red:
                return 'Crimson';
            case PredictionLine.Bus:
                return 'Gray';
            default:
                return 'Black';
        }
    }
}