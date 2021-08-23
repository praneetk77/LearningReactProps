import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        number={contacts[0].phone}
        email={contacts[0].email}
        imgUrl={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        number={contacts[1].phone}
        email={contacts[1].email}
        imgUrl={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        number={contacts[2].phone}
        email={contacts[2].email}
        imgUrl={contacts[2].imgURL}
      />
    </div>
  );
}

export default App;
