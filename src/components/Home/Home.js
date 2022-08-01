import React from "react";
import { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { AnimateOnChange } from "react-animation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";



export default function Home() {
  // const { AnimateOnChange, HideUntilLoaded } = ReactAnimation;
  const words = [
    // "Hello...",
    "Welcome to my portfolio",
    "My name is Michael",
    "And I am a full-stack web developer",
    "Please look through my page",
    "Thank you for stopping by",
    "Enjoy your search!",
    " "
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section>
      <Jumbotron fluid className="hometron">
        <h1>Hello World!</h1>
        <p>Welcome to my portfolio webpage.</p>
      </Jumbotron>

      <div className="animate">
        <h1>
          <AnimateOnChange>{words[current]}</AnimateOnChange>
        </h1>
      </div>
    </section>
  );
}

//   return (
//     <Jumbotron fluid className="hometron">
//       <h1>Hello World!</h1>
//       <p>Welcome to my portfolio webpage.</p>
//     </Jumbotron>
//   );
// }

// const { AnimateOnChange, HideUntilLoaded } = ReactAnimation;

// const Output = () => {
//   const words = [
//     "Loading...",
//     "Still loading...",
//     "Hmm",
//     "Should have loaded by now...",
//     "Wait, is this on?",
//     "Let me try again",
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (current === words.length - 1) {
//         setCurrent(0);
//       } else {
//         setCurrent(current + 1);
//       }
//     }, 2000);
//     return () => {
//       clearInterval(interval);
//     };
//   });

//   return (
//     <div>
//       <h1>
//         <AnimateOnChange>{words[current]}</AnimateOnChange>
//       </h1>
//     </div>
//   );
// };

// ReactDOM.render(<Output />, document.getElementById("root"));
