export default class PredictionResponse {
    StopName: string;
    Destination: string;
    Line: PredictionLine;
    Prediction: number | null;

    constructor(stopName: string, destination: string, line: PredictionLine, prediction: number | null) {
        this.StopName = stopName;
        this.Destination = destination;
        this.Line = line;
        this.Prediction = prediction;
    }
}


export enum PredictionLine {
    Unknown,
    Purple,
    Brown,
    Red,
    SeventyFour,
    Bus
}