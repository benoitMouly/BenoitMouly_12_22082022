/**
* @param {object} data - User activity retrieved
*/

export default class Activity {
    constructor (data) {
        this.sessions = data.sessions
    }
}