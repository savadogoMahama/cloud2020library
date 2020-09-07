import React, { Component } from "react";
export default class StudentAdd extends Component {
  state = {
    name: "",
    surname: "",
    birthDate: null,
    domain: "",
    email: ""
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, surname, birthDate, domain, email } = this.state;
    /* const requestOptions = {
      method: "POST",

      //Accept: "application/json",
      //headers: { "Content-Type": "application/json" },
      body: this.state
    };
    if (window.fetch) {
      fetch("http://localhost:8081/studentAdd", this.state)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({});
        });
    } else {
      console.log("browser does not support");
    }
  };*/
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSurnameChange = (event) => {
    this.setState({ surname: event.target.value });
  };
  handleBirthDateChange = (event) => {
    this.setState({ birthDate: event.target.value });
  };
  handleDomainChange = (event) => {
    this.setState({ domain: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  render() {
    const { name, surname, birthDate, domain, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="name">name</label>
            <input
              onChange={this.handleNameChange}
              type="text"
              value={name}
              className="form-control"
              id="name"
              placeholder="name"
            />
            <div className="form-group">
              <label for="surname">surname</label>
              <input
                onChange={this.handleSurnameChange}
                type="text"
                value={surname}
                className="form-control"
                id="surname"
                placeholder="surname"
              />
              <div className="form-group">
                <label for="bithDate">birthDate</label>
                <input
                  type="date"
                  onChange={this.handleBirthDateChange}
                  value={birthDate}
                  className="form-control"
                  id="birthdate"
                  placeholder="birthdate"
                />
                <div className="form-group">
                  <label for="domain">domain</label>
                  <input
                    type="text"
                    onChange={this.handleDomainChange}
                    value={domain}
                    className="form-control"
                    id="domain"
                    placeholder="domain"
                  />
                  <div className="form-group">
                    <label for="email">email</label>
                    <input
                      type="email"
                      onChange={this.handleEmailChange}
                      value={email}
                      className="form-control"
                      id="email"
                      placeholder="email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="">
            add
          </button>
        </form>
      </div>
    );
  }
}
