import Config from '../config'
import rp from 'request-promise'

class MusicRoomHttpClient {
    constructor(API_TOKEN = '') {
        this.URL_BASE = Config.API_URL_BASE;
        this.API_TOKEN = API_TOKEN;
    }

    setOptions() {
        return {
            headers: { 'Authorization': this.API_TOKEN },
            json: true
        }
    }
    
    setNewToken(API_TOKEN) {
        this.API_TOKEN = API_TOKEN;
    }

    get(endpoint, qs = '') {
        return rp({
            ...this.setOptions(),
            uri: this.URL_BASE + endpoint,
            qs
        });
    }

    post(endpoint, body) {
        return rp({
            ...this.setOptions(),
            method: 'POST',
            uri: this.URL_BASE + endpoint,
            body,
        })
    }

    put(endpoint, body) {
        return rp({
            ...this.options(),
            method: 'PUT',
            uri: this.URL_BASE + endpoint,
            body,
        })
    }
}

export default MusicRoomHttpClient