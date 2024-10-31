import { Component } from "react";
import { PropTypes } from "prop-types";

class Performances extends Component {
  /**
   * Initializes a new instance of the Performances class.
   *
   * @param {Object} data - The data object containing kind and data properties.
   */
  constructor(data) {
    super(data);
    this.kind1 = data.kind[1] || data.data.kind[1];
    this.kind2 = data.kind[2] || data.data.kind[2];
    this.kind3 = data.kind[3] || data.data.kind[3];
    this.kind4 = data.kind[4] || data.data.kind[4];
    this.kind5 = data.kind[5] || data.data.kind[5];
    this.kind6 = data.kind[6] || data.data.kind[6];
    this.data1 = data.data[0].value || data.data.data[0].value;
    this.data2 = data.data[1].value || data.data.data[1].value;
    this.data3 = data.data[2].value || data.data.data[2].value;
    this.data4 = data.data[3].value || data.data.data[3].value;
    this.data5 = data.data[4].value || data.data.data[4].value;
    this.data6 = data.data[5].value || data.data.data[5].value;
  }

  /**
   * Converts the Performances object to a JSON representation.
   *
   * @return {Array<Object>} An array of objects containing kind and value properties.
   */
  toJSON() {
    return (
      [
        {
          "kind": "Cardio",
          "value": this.data1
        },
        {
          "kind": "Energie",
          "value": this.data2
        },
        {
          "kind": "Force",
          "value": this.data4
        },
        {
          "kind": "Endurance",
          "value": this.data3
        },
        {
          "kind": "Vitesse",
          "value": this.data5
        },
        {
          "kind": "Intensité",
          "value": this.data6
        }
      ]
    )
  }
}

Performances.propTypes = {
  data: PropTypes.object
}

export default Performances;