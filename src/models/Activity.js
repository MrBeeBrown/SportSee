import { Component } from "react";
import { PropTypes } from "prop-types";


class Activity extends Component {
  /**
   * Initializes a new instance of the Activity class.
   *
   * @param {object} data - The data object containing sessions information.
   * @param {array} data.data.sessions - An array of session objects.
   * @param {string} data.data.sessions[].day - The day of the session.
   * @param {number} data.data.sessions[].kilogram - The kilogram value of the session.
   * @param {number} data.data.sessions[].calories - The calories value of the session.
   */
  constructor(data) {
    super(data);
    this.day1 = data?.sessions?.[0]?.day ?? data?.data?.sessions?.[0]?.day ?? null;
    this.day2 = data?.sessions?.[1]?.day ?? data?.data?.sessions?.[1]?.day ?? null;
    this.day3 = data?.sessions?.[2]?.day ?? data?.data?.sessions?.[2]?.day ?? null;
    this.day4 = data?.sessions?.[3]?.day ?? data?.data?.sessions?.[3]?.day ?? null;
    this.day5 = data?.sessions?.[4]?.day ?? data?.data?.sessions?.[4]?.day ?? null;
    this.day6 = data?.sessions?.[5]?.day ?? data?.data?.sessions?.[5]?.day ?? null;
    this.day7 = data?.sessions?.[6]?.day ?? data?.data?.sessions?.[6]?.day ?? null;
    this.kilogram1 = data?.sessions?.[0]?.kilogram ?? data?.data?.sessions?.[0]?.kilogram ?? 0;
    this.kilogram2 = data?.sessions?.[1]?.kilogram ?? data?.data?.sessions?.[1]?.kilogram ?? 0;
    this.kilogram3 = data?.sessions?.[2]?.kilogram ?? data?.data?.sessions?.[2]?.kilogram ?? 0;
    this.kilogram4 = data?.sessions?.[3]?.kilogram ?? data?.data?.sessions?.[3]?.kilogram ?? 0;
    this.kilogram5 = data?.sessions?.[4]?.kilogram ?? data?.data?.sessions?.[4]?.kilogram ?? 0;
    this.kilogram6 = data?.sessions?.[5]?.kilogram ?? data?.data?.sessions?.[5]?.kilogram ?? 0;
    this.kilogram7 = data?.sessions?.[6]?.kilogram ?? data?.data?.sessions?.[6]?.kilogram ?? 0;
    this.calories1 = data?.sessions?.[0]?.calories ?? data?.data?.sessions?.[0]?.calories ?? 0;
    this.calories2 = data?.sessions?.[1]?.calories ?? data?.data?.sessions?.[1]?.calories ?? 0;
    this.calories3 = data?.sessions?.[2]?.calories ?? data?.data?.sessions?.[2]?.calories ?? 0;
    this.calories4 = data?.sessions?.[3]?.calories ?? data?.data?.sessions?.[3]?.calories ?? 0;
    this.calories5 = data?.sessions?.[4]?.calories ?? data?.data?.sessions?.[4]?.calories ?? 0;
    this.calories6 = data?.sessions?.[5]?.calories ?? data?.data?.sessions?.[5]?.calories ?? 0;
    this.calories7 = data?.sessions?.[6]?.calories ?? data?.data?.sessions?.[6]?.calories ?? 0;
  }

  /**
   * Returns a JSON representation of the activity data.
   *
   * The returned JSON object is an array of objects, each representing a day's activity.
   * Each day's activity object contains the day number, weight in kilograms, and calories burned.
   *
   * @return {array} A JSON array of activity objects.
   */
  toJSON() {
    return (
      [
        {
          "day": 1,
          "Poids (Kg)": this.kilogram1,
          "Calories brûlées (kCal)": this.calories1
        },
        {
          "day": 2,
          "Poids (Kg)": this.kilogram2,
          "Calories brûlées (kCal)": this.calories2
        },
        {
          "day": 3,
          "Poids (Kg)": this.kilogram3,
          "Calories brûlées (kCal)": this.calories3
        },
        {
          "day": 4,
          "Poids (Kg)": this.kilogram4,
          "Calories brûlées (kCal)": this.calories4
        },
        {
          "day": 5,
          "Poids (Kg)": this.kilogram5,
          "Calories brûlées (kCal)": this.calories5
        },
        {
          "day": 6,
          "Poids (Kg)": this.kilogram6,
          "Calories brûlées (kCal)": this.calories6
        },
        {
          "day": 7,
          "Poids (Kg)": this.kilogram7,
          "Calories brûlées (kCal)": this.calories7
        }
      ]
    )
  }
}

Activity.propTypes = {
  data: PropTypes.object
}

export default Activity;