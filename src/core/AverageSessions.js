/**
* @param {object} data - User average sessions retrieved
*/

export default class AverageSessions {
    constructor (data) {
        this.average = data.sessions
    }
}