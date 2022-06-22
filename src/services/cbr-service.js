export default class CbrService {
    url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    async getRates() {
        return await fetch(this.url)
            .then(response => response.json())
            .then(data => {
                return Object.values(data.Valute);
            })
    }
}
