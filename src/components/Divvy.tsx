import React, { Component } from 'react';
import DivvyApi from '../api/DivvyApi';
import DivvyStationStatusResponse from '../api/DivvyStationStatusResponse';

export default class Divvy extends Component<{}, {isFetching: boolean, divvyResponse: DivvyStationStatusResponse | null}> {
    timer: number;
    constructor(props: any) {
        super(props);
        this.timer = 0;
        this.state = {
            isFetching: false,
            divvyResponse: null
        }
    }

    render() {
        let divvyText: string | null = null;
        if (this.state.divvyResponse != null) {
            divvyText = this.state.divvyResponse.NumBikesAvailable + ' Divvy Bikes available';
        }
        return (<div>{this.state.isFetching ? 'Refreshing...' : divvyText }</div>);
    }

    componentDidMount() {
        this.fetchData();
        this.timer = setInterval(() => this.fetchData(), 20000);
    }

    async fetchData() {
        this.setState({...this.state, isFetching: true});
        await DivvyApi.getStationInfo().then(divvyResponse => {
            this.setState({...this.state, isFetching: false, divvyResponse: divvyResponse});
        }).catch(reason => {
            console.log('Error fetching: ' + reason);
            this.setState({...this.state, isFetching: false});
        });
    }
}