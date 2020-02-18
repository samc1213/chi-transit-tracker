import PredictionResponse, { PredictionLine } from './PredictionResponse';
import FetchProxy from './FetchProxy';

export default class TrainApi {
    public static getPredictions(trainStopIds: Array<number>) : Promise<Array<PredictionResponse>> {
        return new Promise(resolve => {
            let idsString: string = trainStopIds.join(',');
            let url: string = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=46c79bfa6f474db4a8d82638fc4584a7&outputType=JSON&stpid=${idsString}`;
            FetchProxy.fetchViaProxy(url)
            .then(response => response.json())
            .then(body => {
                let response: Array<PredictionResponse> = new Array<PredictionResponse>();
                body['ctatt']['eta'].forEach((prediction: { [x: string]: string; }) => {
                    let mins = (Date.parse(prediction['arrT']) - Date.parse(prediction['prdt'])) / (60 * 1000);
                    let line = PredictionLine.Unknown;
                    if (prediction['rt'] === 'P') {
                        line = PredictionLine.Purple;
                    }
                    else if (prediction['rt'] === 'Brn') {
                        line = PredictionLine.Brown;
                    }
                    else if (prediction['rt'] === 'Red') {
                        line = PredictionLine.Red;
                    }
                    response.push(new PredictionResponse(prediction['staNm'], prediction['destNm'],
                        line, mins));
                    resolve(response);
                });
            });
        });
    }
}