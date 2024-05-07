import React, { useState, useEffect } from "react";

const Name = () => {
  const [count, setCount] = useState(0);
  const birthdate = new Date("08-09-2002");

  const [ageInMilliseconds, setAgeInMilliseconds] = useState(
    calculateAgeInMilliseconds()
  );

  function calculateAgeInMilliseconds() {
    const currentDate = new Date();
    return (
      ((currentDate - birthdate) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(9)
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAgeInMilliseconds(calculateAgeInMilliseconds());
    }, 1);

    // Cleanup function for setInterval
    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    // Function to toggle visibility of the div based on scroll position
    const handleScroll = () => {
      const div = document.getElementById("infoDiv");
      if (div) {
        const shouldBeVisible = window.pageYOffset === 0;
        div.style.visibility = shouldBeVisible ? "visible" : "hidden";
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function for removing event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const code = "FullStack Developer";
  const exp = "Former SWE Intern @Atlassian";

  return (
    <div
      id="infoDiv"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        border: "1px dotted black",
        padding: "10px",
        marginRight: "2%",
        marginTop: "2%"
      }}
    >
      <div>
        <span>Developed By :</span>
        {/* <span>Show</span> */}
      </div>
      <div>
        <span>const name: string = "Rajdeep Nagar";</span>
      </div>
      <div>
        <span>{code}</span>
      </div>
      <div>
        <span>{exp}</span>
      </div>
      <div>
        <span>
          const birthday: Date = new Date('08-09-2002');{" "}
        </span>
        </div>
        <div>
        <span>
          {ageInMilliseconds} years-old.
        </span>
      </div>
    </div>
  );
};

export default Name;
