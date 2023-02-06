import ApiClient from '../ApiClient'

export default class OzonApiClient extends ApiClient {
    constructor() {
        super('https://api-seller.ozon.ru');
        this.marketName = 'Ozon';
    }
}
