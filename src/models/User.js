class User {
  constructor(data) {
    this.id = data.data.id;
    this.firstName = data.data.userInfos.firstName;
    this.lastName = data.data.userInfos.lastName;
    this.age = data.data.userInfos.age;
    this.score = data.data.score || data.data.todayScore;
    this.calorieCount = data.data.keyData.calorieCount;
    this.proteinCount = data.data.keyData.proteinCount;
    this.carbohydrateCount = data.data.keyData.carbohydrateCount;
    this.lipidCount = data.data.keyData.lipidCount;
  }

  toJSON() {
    return (
      {
        "id": this.id,
        "firstName": this.firstName,
        "lastName": this.lastName,
        "age": this.age,
        "score": this.score,
        "calorieCount": this.calorieCount,
        "proteinCount": this.proteinCount,
        "carbohydrateCount": this.carbohydrateCount,
        "lipidCount": this.lipidCount
      }
    )
  }
}

export default User;