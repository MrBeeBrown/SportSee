import { Component } from "react";
import { PropTypes } from "prop-types";

class User extends Component {
  /**
   * Initializes a new User object with the provided data.
   *
   * @param {Object} data - The data used to initialize the User object.
   */
  constructor(data) {
    super(data);
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
  scoreToArray() {
    return (
      [
        {
          name: "score", score: (this.score * 100), fill: "#FF0000"
        },
        {
          name: "score", score: 101, fill: "#F6F6F6"
        }
      ]
    )
  }
}

User.propTypes = {
  data: PropTypes.object
}

export default User;