class Performances {
  constructor(data) {
    this.kind1 = data.kind[0];
    this.kind2 = data.kind[1];
    this.kind3 = data.kind[2];
    this.kind4 = data.kind[3];
    this.kind5 = data.kind[4];
    this.kind6 = data.kind[5];
    this.data1 = data.data.value[0];
    this.data2 = data.data.value[1];
    this.data3 = data.data.value[2];
    this.data4 = data.data.value[3];
    this.data5 = data.data.value[4];
    this.data6 = data.data.value[5];
    this.datavalue1 = data.data.kind[0];
    this.datavalue2 = data.data.kind[1];
    this.datavalue3 = data.data.kind[2];
    this.datavalue4 = data.data.kind[3];
    this.datavalue5 = data.data.kind[4];
    this.datavalue6 = data.data.kind[5];
  }
}

export default Performances;