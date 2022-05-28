import React from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import jsImage from "../assets/js.png";
import jsImageDos from "../assets/js2.jpg";
import jsImageTres from "../assets/js3.jpg";
import "../App.css";

function HomePage() {
  const text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.";

  return (
    <div>
      <Header title={"React sample application"} />
      <div className="container gap">
        <Card image={jsImage} title={"React Js Academy"} description={text} linkName={"GO ACADEMY"}/>
        <Card image={jsImageDos} title={"React Js Jobs"} description={text} linkName={"GO JOBS"}/>
        <Card
          image={jsImageTres}
          title={"React Js Projects"}
          description={text}
          linkName={"GO PROJECTS"}
        />
      </div>
      <div className="footer">
      <em>@ copyrigth</em>
      </div>
    </div>
  );
}

export default HomePage;
