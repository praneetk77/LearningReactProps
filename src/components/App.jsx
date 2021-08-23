import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Praneet"
        number="123456"
        email="praneet@cool.very"
        imgUrl="https://picsum.photos/200"
      />
      <Card
        name="Marshall"
        number="12323123456"
        email="eminem@notcool.very"
        imgUrl="https://picsum.photos/200"
      />
      <Card
        name="O'Shea"
        number="173 7083"
        email="ice@cube"
        imgUrl="https://picsum.photos/200"
      />
    </div>
  );
}

export default App;
