/**
 * @constructor
* @param {object} data - User performance retrieved
*/

export default class Performance {
    constructor (data) {
        this.kind = data.kind
        this.datas = data.data
    }
}