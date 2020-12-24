import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 4789"
      email="b@beyonce.com"
    />
    <Card
      name="Halle"
      img="https://www.famousbirthdays.com/headshots/halle-berry-1.jpg"
      phone="+123 456 9789"
      email="h@berry.queen"
    />
  </div>,
  document.getElementById("root")
);
