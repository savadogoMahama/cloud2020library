import React,{Component} from "react";



export default class  BodyPerso extends Component{

state={
  books:[]
}
   componentDidMount(){
   
    if (window.fetch) {
      fetch("http://localhost:8084/bookList", this.state)
        .then((res) => res.json())
        .then((data) => {
         
          this.setState({books:data})
          return data;
        });
    } else {
      console.log("browser does not support");
    }
  };

  render(){
const books=this.state.books;

  return <div>
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
   {books.map(book=> 
    <tr key={book.bookIdentifier}>
      <th scope="row">{book.title}</th>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.cote}</td>
    </tr>
   )}
  </tbody>

</table>
  
 
  
  
  </div>;
}
}