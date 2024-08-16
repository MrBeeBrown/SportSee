class User {
  /**
   * Initializes a new User object with the provided data.
   *
   * @param {Object} data - The data used to initialize the User object.
   */
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

  /**
   * Converts the User object to a JSON representation.
   *
   * @return {Object} A JSON object containing the user's data.
   */
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