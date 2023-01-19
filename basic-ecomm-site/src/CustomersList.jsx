import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "Ottawa" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Dana",
        phone: "654-321",
        address: { city: "Ottawa" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Parker",
        phone: null,
        address: { city: "Ottawa" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Jason",
        phone: "976-452",
        address: { city: "Ottawa" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Mandy",
        phone: "512-348",
        address: { city: "Ottawa" },
        photo: "https://picsum.photos/id/1014/60",
      },
      {
        id: 6,
        name: "Clark",
        phone: null,
        address: { city: "Ottawa" },
        photo: "https://picsum.photos/id/1015/60",
      },
      {
        id: 7,
        name: "Barry",
        phone: "451-786",
        address: { city: "Ottawa" },
        photo: "https://picsum.photos/id/1016/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            {" "}
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Photo</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  // Exectures when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  // Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);
    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";
    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
