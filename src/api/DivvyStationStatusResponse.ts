
export default class DivvyStationStatusResponse {
    StationId: number;
    NumBikesAvailable: number;
    NumDocksAvailable: number;
    LastReported: number;

    constructor(stationId: number, numBikesAvailable: number, numDocksAvailable: number, lastReported: number) {
        this.StationId = stationId;
        this.NumBikesAvailable = numBikesAvailable;
        this.NumDocksAvailable = numDocksAvailable;
        this.LastReported = lastReported;
    }
}