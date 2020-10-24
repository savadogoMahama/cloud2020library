import React, { Component } from "react";

export default class BodyPerso extends Component {
  state = {
    books: [],
    emprunts: []
  };
  componentDidMount() {
    if (window.fetch) {
      fetch("http://localhost:8084/bookList", this.state)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ books: data });
          return data;
        });

      fetch("http://localhost:8089/borrowList", this.state)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ emprunts: data });
          return data;
        });
    } else {
      console.log("browser does not support");
    }
  }

  render() {
    const books = this.state.books;
    const emprunts = this.state.emprunts;

    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Titre</th>
              <th scope="col">Auteur</th>
              <th scope="col">Categorie</th>
              <th scope="col">Cote</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.bookIdentifier}>
                <th scope="row">{book.title}</th>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.cote}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">Id emprunt</th>
              <th scope="col">Date</th>
              <th scope="col">livre</th>
              <th scope="col">nom étudiant</th>
            </tr>
          </thead>
          <tbody>
            {emprunts.map((emprunt) => (
              <tr key={emprunt.borrowIdentifier}>
                <th scope="row">{emprunt.borrowIdentifier}</th>
                <td>{emprunt.borrowdate}</td>
                <td>{emprunt.book.title}</td>
                <td>{emprunt.student.studentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
