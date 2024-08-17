import { Component } from "react";
import { PropTypes } from "prop-types";

class AverageSessions extends Component {
  /**
   * Initializes an instance of AverageSessions with the provided data.
   *
   * @param {object} data - The data object containing sessions information.
   * @param {array} data.data.sessions - An array of session objects.
   * @param {number} data.data.sessions[].day - The day of the session (1-7).
   * @param {number} data.data.sessions[].sessionLength - The length of the session.
   */
  constructor(data) {
    super(data);
    this.day1 = data.data.sessions[0].day;
    this.day2 = data.data.sessions[1].day;
    this.day3 = data.data.sessions[2].day;
    this.day4 = data.data.sessions[3].day;
    this.day5 = data.data.sessions[4].day;
    this.day6 = data.data.sessions[5].day;
    this.day7 = data.data.sessions[6].day;
    this.sessionsLength1 = data.data.sessions[0].sessionLength;
    this.sessionsLength2 = data.data.sessions[1].sessionLength;
    this.sessionsLength3 = data.data.sessions[2].sessionLength;
    this.sessionsLength4 = data.data.sessions[3].sessionLength;
    this.sessionsLength5 = data.data.sessions[4].sessionLength;
    this.sessionsLength6 = data.data.sessions[5].sessionLength;
    this.sessionsLength7 = data.data.sessions[6].sessionLength;
  }

  /**
   * Converts the object to a JSON representation.
   *
   * @return {Array<Object>} An array of objects representing the days and their corresponding session lengths.
   * Each object has the properties "day" (string) and "sessionsLength" (number).
   */
  toJSON() {
    return (
      [
        {
          "day": "L",
          "sessionsLength": this.sessionsLength1
        },
        {
          "day": "M",
          "sessionsLength": this.sessionsLength2
        },
        {
          "day": "M",
          "sessionsLength": this.sessionsLength3
        },
        {
          "day": "J",
          "sessionsLength": this.sessionsLength4
        },
        {
          "day": "V",
          "sessionsLength": this.sessionsLength5
        },
        {
          "day": "S",
          "sessionsLength": this.sessionsLength6
        },
        {
          "day": "D",
          "sessionsLength": this.sessionsLength7
        }
      ]
    )
  }
}

AverageSessions.propTypes = {
  data: PropTypes.object
}

export default AverageSessions;