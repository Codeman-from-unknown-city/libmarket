import ApiClient from '../ApiClient'

export default class WbApiClient extends ApiClient {
    constructor(apiKey, basePath = 'http://localhost') {
        super(basePath);
        this.marketName = 'Wildberries';
        this.authentications = {
            'HeaderApiKey': {
                type: 'apiKey',
                'in': 'header',
                name: 'Authorization', apiKey
            }
        }
    }
}
