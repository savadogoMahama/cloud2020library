import React, { Component } from "react";
import BookAdd from "./BookAdd";
import StudentUpdate from "./StudentUpdate";
import StudentDelete from "./StudentDelete";
import BookUpdate from "./BookUpdate";
import StudentAdd from "./StudentAdd";
import BookDelete from "./BookDelete";
export default class Admin extends Component {
  state = {
    clickedButton: "StudentDelete"
  };
  handelButtonclick(name) {
    this.setState({ clickedButton: name });
  }

  render() {
    const clickedButton = this.state.clickedButton;
    return (
      <div>
        <div>
          <button onClick={() => this.handelButtonclick("StudentAdd")}>
            Student Add
          </button>
          <button onClick={() => this.handelButtonclick("StudentUpdate")}>
            student update
          </button>
          <button onClick={() => this.handelButtonclick("StudentDelete")}>
            student delete
          </button>
        </div>
        <br />
        <div>
          <button onClick={() => this.handelButtonclick("BookAdd")}>
            book add
          </button>
          <button onClick={() => this.handelButtonclick("BookUpdate")}>
            book update
          </button>
          <button onClick={() => this.handelButtonclick("BookDelete")}>
            book delete
          </button>
          {clickedButton === "BookAdd" && <BookAdd />}
          {clickedButton === "StudentAdd" && <StudentAdd />}
          {clickedButton === "BookDelete" && <BookDelete />}
          {clickedButton === "StudentDelete" && <StudentDelete />}
          {clickedButton === "BookUpdate" && <BookUpdate />}
          {clickedButton === "StudentUpdate" && <StudentUpdate />}
        </div>
      </div>
    );
  }
}
