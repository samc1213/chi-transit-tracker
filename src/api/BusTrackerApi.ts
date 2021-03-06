import PredictionResponse, { PredictionLine } from './PredictionResponse';
import FetchProxy from './FetchProxy';

export default class BusTrackerApi {
    public static getPredictions(busStopIds: Array<number>) : Promise<Array<PredictionResponse>> {
        return new Promise(resolve => {
            let idsString: string = busStopIds.join(',');
            let url: string = `http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=nGRcA3p5MLFbSUrbDbtuKiiik&format=json&stpid=${idsString}`;
            FetchProxy.fetchViaProxy(url)
            .then(response => response.json())
            .then(body => {
                let response: Array<PredictionResponse> = new Array<PredictionResponse>();
                body['bustime-response']['prd'].forEach((prediction: { [x: string]: string; }) => {
                    response.push(new PredictionResponse(prediction['stpnm'], prediction['des'],
                        PredictionLine.Bus, prediction['prdctdn'] !== 'DUE' ? parseInt(prediction['prdctdn']) : null))
                });
                resolve(response);
            })
        });
    }
}