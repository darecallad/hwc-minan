import React, { Component } from "react";
import _ from "lodash";
import { getCategory } from "../services/demoCategory";
import { getCoffees } from "../services/demoCoffeeItem";

class ShopMain extends Component {
  state = {
    coffees: getCoffees(),
    categorys: getCategory(),
  };
  render() {
    return (
      <div>
        <p>Hello Wprld</p>
      </div>
    );
  }
}

export default ShopMain;
