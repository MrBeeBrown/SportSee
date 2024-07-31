class Activity {
  constructor(data) {
    this.day1 = data.sessions[0].day;
    this.day2 = data.sessions[1].day;
    this.day3 = data.sessions[2].day;
    this.day4 = data.sessions[3].day;
    this.day5 = data.sessions[4].day;
    this.day6 = data.sessions[5].day;
    this.day7 = data.sessions[6].day;
    this.kilogram1 = data.sessions[0].kilogram;
    this.kilogram2 = data.sessions[1].kilogram;
    this.kilogram3 = data.sessions[2].kilogram;
    this.kilogram4 = data.sessions[3].kilogram;
    this.kilogram5 = data.sessions[4].kilogram;
    this.kilogram6 = data.sessions[5].kilogram;
    this.kilogram7 = data.sessions[6].kilogram;
    this.calories1 = data.sessions[0].calories;
    this.calories2 = data.sessions[1].calories;
    this.calories3 = data.sessions[2].calories;
    this.calories4 = data.sessions[3].calories;
    this.calories5 = data.sessions[4].calories;
    this.calories6 = data.sessions[5].calories;
    this.calories7 = data.sessions[6].calories;
  }
}

export default Activity;