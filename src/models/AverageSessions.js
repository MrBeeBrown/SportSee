class AverageSessions {
  constructor(data) {
    this.day1 = data.sessions[0].day;
    this.day2 = data.sessions[1].day;
    this.day3 = data.sessions[2].day;
    this.day4 = data.sessions[3].day;
    this.day5 = data.sessions[4].day;
    this.day6 = data.sessions[5].day;
    this.day7 = data.sessions[6].day;
    this.sessionsLength1 = data.sessions[0].length;
    this.sessionsLength2 = data.sessions[1].length;
    this.sessionsLength3 = data.sessions[2].length;
    this.sessionsLength4 = data.sessions[3].length;
    this.sessionsLength5 = data.sessions[4].length;
    this.sessionsLength6 = data.sessions[5].length;
    this.sessionsLength7 = data.sessions[6].length;
  }
}

export default AverageSessions;