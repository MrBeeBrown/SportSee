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
    this.id = data?.id || data?.data?.id || null;
    this.firstName = data?.userInfos?.firstName || data?.data?.userInfos?.firstName || '';
    this.lastName = data?.userInfos?.lastName || data?.data?.userInfos?.lastName || '';
    this.age = data?.userInfos?.age || data?.data?.userInfos?.age || null;
    this.score = data?.score || data?.todayScore || data?.data?.score || data?.data?.todayScore || 0;
    this.calorieCount = data?.keyData?.calorieCount || data?.data?.keyData?.calorieCount || 0;
    this.proteinCount = data?.keyData?.proteinCount || data?.data?.keyData?.proteinCount || 0;
    this.carbohydrateCount = data?.keyData?.carbohydrateCount || data?.data?.keyData?.carbohydrateCount || 0;
    this.lipidCount = data?.keyData?.lipidCount || data?.data?.keyData?.lipidCount || 0;
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