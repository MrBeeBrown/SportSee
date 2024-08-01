class User {
  constructor(data) {
    this.id = data[0].id;
    this.firstName = data[0].userInfos.firstName;
    this.lastName = data[0].userInfos.lastName;
    this.age = data[0].userInfos.age;
    this.score = data[0].score || data[0].todayScore;
    this.calorieCount = data[0].keyData.calorieCount;
    this.proteinCount = data[0].keyData.proteinCount;
    this.carbohydrateCount = data[0].keyData.carbohydrateCount;
    this.lipidCount = data[0].keyData.lipidCount;
  }
}

export default User;