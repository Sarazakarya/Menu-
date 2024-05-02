import { Container } from "react-bootstrap";
import NavBar from "./component/Navbar";
import Header from "./component/Header";
import Category from "./component/Category";
import CardList from "./component/CardList";
import { useState } from "react";
import { items } from './data'

function App() {
  const [itemsList, setItems] = useState(items);

  function filtercategories(cat) {
    if (cat === 'الكل') {
      setItems(items)
    }
    else {
      const newcate = items.filter((item) => (item.category === cat))
      setItems(newcate)
    }
  }

  function filtersearch(word) {
    if (word !== '') {
      const newcate = items.filter((item) => (item.title === word))
      setItems(newcate)
    }
  }

  return (
    <div className="color-body font">
      <NavBar filtersearch={filtersearch} />
      <Container>
        <Header />
        <Category filtercategory={filtercategories} />
        <CardList itemsList={itemsList} />
      </Container>
    </div>
  );
}

export default App;
