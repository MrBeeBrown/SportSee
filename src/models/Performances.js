class Performances {
  constructor(data) {
    this.kind1 = data[0].kind[0];
    this.kind2 = data[0].kind[1];
    this.kind3 = data[0].kind[2];
    this.kind4 = data[0].kind[3];
    this.kind5 = data[0].kind[4];
    this.kind6 = data[0].kind[5];
    this.data1 = data[0].data.value[0];
    this.data2 = data[0].data.value[1];
    this.data3 = data[0].data.value[2];
    this.data4 = data[0].data.value[3];
    this.data5 = data[0].data.value[4];
    this.data6 = data[0].data.value[5];
    this.datavalue1 = data[0].data.kind[0];
    this.datavalue2 = data[0].data.kind[1];
    this.datavalue3 = data[0].data.kind[2];
    this.datavalue4 = data[0].data.kind[3];
    this.datavalue5 = data[0].data.kind[4];
    this.datavalue6 = data[0].data.kind[5];
  }

  toJSON() {
    return {
      kind1: this.kind1,
      kind2: this.kind2,
      kind3: this.kind3,
      kind4: this.kind4,
      kind5: this.kind5,
      kind6: this.kind6,
      data1: this.data1,
      data2: this.data2,
      data3: this.data3,
      data4: this.data4,
      data5: this.data5,
      data6: this.data6,
      datavalue1: this.datavalue1,
      datavalue2: this.datavalue2,
      datavalue3: this.datavalue3,
      datavalue4: this.datavalue4,
      datavalue5: this.datavalue5,
      datavalue6: this.datavalue6
    };
  }
}

export default Performances;