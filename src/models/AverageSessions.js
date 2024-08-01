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
}

export default AverageSessions;