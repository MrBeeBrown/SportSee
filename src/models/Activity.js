class Activity {
  /**
   * Initializes a new instance of the Activity class.
   *
   * @param {object} data - The data object containing sessions information.
   * @param {object} data.data - The nested data object.
   * @param {array} data.data.sessions - An array of session objects.
   * @param {object} data.data.sessions[] - A session object.
   * @param {string} data.data.sessions[].day - The day of the session.
   * @param {number} data.data.sessions[].kilogram - The kilogram value of the session.
   * @param {number} data.data.sessions[].calories - The calories value of the session.
   * @return {undefined}
   */
  constructor(data) {
    this.day1 = data.data.sessions[0].day;
    this.day2 = data.data.sessions[1].day;
    this.day3 = data.data.sessions[2].day;
    this.day4 = data.data.sessions[3].day;
    this.day5 = data.data.sessions[4].day;
    this.day6 = data.data.sessions[5].day;
    this.day7 = data.data.sessions[6].day;
    this.kilogram1 = data.data.sessions[0].kilogram;
    this.kilogram2 = data.data.sessions[1].kilogram;
    this.kilogram3 = data.data.sessions[2].kilogram;
    this.kilogram4 = data.data.sessions[3].kilogram;
    this.kilogram5 = data.data.sessions[4].kilogram;
    this.kilogram6 = data.data.sessions[5].kilogram;
    this.kilogram7 = data.data.sessions[6].kilogram;
    this.calories1 = data.data.sessions[0].calories;
    this.calories2 = data.data.sessions[1].calories;
    this.calories3 = data.data.sessions[2].calories;
    this.calories4 = data.data.sessions[3].calories;
    this.calories5 = data.data.sessions[4].calories;
    this.calories6 = data.data.sessions[5].calories;
    this.calories7 = data.data.sessions[6].calories;
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

export default Activity;