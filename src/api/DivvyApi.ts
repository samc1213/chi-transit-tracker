import DivvyStationStatusResponse from './DivvyStationStatusResponse'

export default class DivvyApi {
    public static getStationInfo() : Promise<DivvyStationStatusResponse> {
        return new Promise((resolve, reject) => {
            let url: string = '/gbfs/es/station_status.json';
            fetch(url)
            .then(response => response.json())
            .then(body => {
                console.log(body);
                body['data']['stations'].forEach((element: { [x: string]: string; }) => {
                    if (element['station_id'] == '87') {
                        resolve(new DivvyStationStatusResponse(parseInt(element['station_id']), parseInt(element['num_bikes_available']),
                        parseInt(element['num_docks_available']), parseInt(element['last_reported'])));
                    }
                });
                reject('Unable to find station');
            });
        });
    }
}