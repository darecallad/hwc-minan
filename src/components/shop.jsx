import React, { Component } from "react";
import _ from "lodash";
import { getCategory } from "../services/demoCategory";
import { getCoffees } from "../services/demoCoffeeItem";
import CoffeeTable from "./coffeetable";

class ShopMain extends Component {
  state = {
    coffees: [],
    categorys: [],
    pageSize: 5,
    currentPage: 1,
    sortColumn: { path: "title", order: " asc" },
  };

  componentDidMount() {
    this.setState({ coffees: getCoffees(), categorys: getCategory() });
  }

  render() {
    const { length: count } = this.state.coffees;
    const { pageSize, currentPage, categorys, sortColumn } = this.state;
    return (
      <div className="row">
        <div className="col">
          {/* <img src="../images/1黑沃烘豆師經典九號" /> */}

          <div>
            <img src="" />
          </div>

          <CoffeeTable
            coffees={this.state.coffees}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}

export default ShopMain;
