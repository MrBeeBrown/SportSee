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

    const sessions = (data.sessions || data.data.sessions);

    this.day1 = sessions[0].day || sessions[0].day;
    this.day2 = sessions[1].day || sessions[1].day;
    this.day3 = sessions[2].day || sessions[2].day;
    this.day4 = sessions[3].day || sessions[3].day;
    this.day5 = sessions[4].day || sessions[4].day;
    this.day6 = sessions[5].day || sessions[5].day;
    this.day7 = sessions[6].day || sessions[6].day;
    this.sessionsLength1 = sessions[0].sessionLength || sessions[0].sessionLength;
    this.sessionsLength2 = sessions[1].sessionLength || sessions[1].sessionLength;
    this.sessionsLength3 = sessions[2].sessionLength || sessions[2].sessionLength;
    this.sessionsLength4 = sessions[3].sessionLength || sessions[3].sessionLength;
    this.sessionsLength5 = sessions[4].sessionLength || sessions[4].sessionLength;
    this.sessionsLength6 = sessions[5].sessionLength || sessions[5].sessionLength;
    this.sessionsLength7 = sessions[6].sessionLength || sessions[6].sessionLength;
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