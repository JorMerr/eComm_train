import React, { Component } from "react";

export default class Main extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "123-456", address: { city: "Ottawa" } },
      { id: 2, name: "Dana", phone: "654-321", address: { city: "Ottawa" } },
      { id: 3, name: "Parker", phone: null, address: { city: "Ottawa" } },
      { id: 4, name: "Jason", phone: "976-452", address: { city: "Ottawa" } },
      { id: 5, name: "Mandy", phone: "512-348", address: { city: "Ottawa" } },
      { id: 6, name: "Clark", phone: null, address: { city: "Ottawa" } },
      { id: 7, name: "Barry", phone: "451-786", address: { city: "Ottawa" } },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span class="badge badge-secondary m-2">
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
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.phone ? (
                      cust.phone
                    ) : (
                      <div className="bg-warning p-2 text-center">No phone</div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  // Exectures when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
