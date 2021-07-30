import React, { Component } from "react";
import Table from "./table";

class CoffeeTable extends Component {
  columns = [
    { path: "title", label: "名稱" },
    { path: "image", label: "圖片" },
    { path: "category.name", label: "種類" },
    { path: "numberInStock", label: "數量" },
    {
      //   key: "lke",
      //   content: (movie) => (
      //     <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      //   ),
    }, // for like and delete we do not need sort those columns
    {
      //   key: "delete",
      //   content: (movie) => (
      //     <button
      //       onClick={() => this.props.onDelete(movie)}
      //       className="btn btn-danger btn-sm"
      //     >
      //       Delete
      //     </button>
      //   ),
    },
  ];

  render() {
    const { coffees, sortColum, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={coffees}
        // onSort={onSort}
        // sortColumn={sortColum}
      />
    );
  }
}

export default CoffeeTable;
