/**
* @constructor
* @param {object} data - User information retrieved
*/
export default class User {
    constructor (data) {
            this.name = data.userInfos.firstName
            this.calorieCount = data.keyData.calorieCount
            this.proteinCount = data.keyData.proteinCount
            this.carbohydrateCount = data.keyData.carbohydrateCount
            this.lipidCount = data.keyData.lipidCount
            this.todayScore = data.todayScore
            this.totalScore = data.score
    }
}