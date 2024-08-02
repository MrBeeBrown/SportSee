class AverageSessions {
  constructor(data) {
    this.day1 = data[0].sessions[0].day;
    this.day2 = data[0].sessions[1].day;
    this.day3 = data[0].sessions[2].day;
    this.day4 = data[0].sessions[3].day;
    this.day5 = data[0].sessions[4].day;
    this.day6 = data[0].sessions[5].day;
    this.day7 = data[0].sessions[6].day;
    this.sessionsLength1 = data[0].sessions[0].length;
    this.sessionsLength2 = data[0].sessions[1].length;
    this.sessionsLength3 = data[0].sessions[2].length;
    this.sessionsLength4 = data[0].sessions[3].length;
    this.sessionsLength5 = data[0].sessions[4].length;
    this.sessionsLength6 = data[0].sessions[5].length;
    this.sessionsLength7 = data[0].sessions[6].length;
  }

  toJSON() {
    return {
      day1: this.day1,
      day2: this.day2,
      day3: this.day3,
      day4: this.day4,
      day5: this.day5,
      day6: this.day6,
      day7: this.day7,
      sessionsLength1: this.sessionsLength1,
      sessionsLength2: this.sessionsLength2,
      sessionsLength3: this.sessionsLength3,
      sessionsLength4: this.sessionsLength4,
      sessionsLength5: this.sessionsLength5,
      sessionsLength6: this.sessionsLength6,
      sessionsLength7: this.sessionsLength7
    };
  }
}

export default AverageSessions;