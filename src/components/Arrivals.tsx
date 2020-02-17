import React, { Component } from 'react';
import BusTrackerApi from '../api/BusTrackerApi';
import TrainApi from '../api/TrainApi';
import PredictionResponse from '../api/PredictionResponse';
import BusArrivalRow from './BusArrivalRow';

export default class Arrivals extends Component<{dataIndex: number}, {isFetching: boolean, predictionResponses: PredictionResponse[]}> {
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
        const allResponseData = new Array<Array<any>>();
        let responseData = new Array<any>();
        for (var [idx, response] of this.state.predictionResponses.entries()) {
            if (idx % 4 === 0 && idx !== 0) {
                allResponseData.push(responseData);
                responseData = new Array<any>();
            }
            responseData.push(<BusArrivalRow key={idx} predictionResponse={response}></BusArrivalRow>)
        };
        const allRespIdx = this.props.dataIndex % allResponseData.length;
        return (<ul className="arrivals-container">{allResponseData[allRespIdx]}</ul>);
    }

    componentDidMount() {
        this.fetchData();
        this.timer = setInterval(() => this.fetchData(), 30 * 1000);
    }

    async fetchData() {
        this.setState({...this.state, isFetching: true});
        await Promise.all([
            BusTrackerApi.getPredictions([1345, 1227]),
            TrainApi.getPredictions([30233, 30236, 30235, 30234])
        ]).then(resp => {
            let allData = resp[0].concat(resp[1]);
            allData.sort((a, b) => {
                if (a.Prediction == null || b.Prediction == null || a.Prediction < b.Prediction) {
                    return -1;
                }
                return 1;
            });
            this.setState({...this.state, isFetching: false, predictionResponses: allData});
        }).catch(reason => {
            console.log('Error fetching: ' + reason);
            this.setState({...this.state, isFetching: false});
        });        
    }
}