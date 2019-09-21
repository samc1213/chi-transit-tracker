export default class PredictionResponse {
    StopName: string;
    Destination: string;
    Prediction: number | null;

    constructor(stopName: string, destination: string, prediction: number | null) {
        this.StopName = stopName;
        this.Destination = destination;
        this.Prediction = prediction;
    }
}