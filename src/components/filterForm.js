import React, { useState } from "react";

const Form = () => {
  const options = ["aa", "bbb", "cccc", "ddd", "eee"];
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedDdVal, setSelectedDdVal] = useState(options[0]);

  const submit = async (e) => {
    e.preventDefault();
    ///
    try {
      const rawResponse = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 4,
          title: name,
          author: email,
          ddVal: selectedDdVal,
        }),
      });
      const content = await rawResponse.json();
      console.log(content);
    } catch (error) {
      console.log("error", error);
    }
    ///
  };
  ///

  return (
    <>
      <form onSubmit={submit}>
        <select
          value={selectedDdVal}
          onChange={(event) => setSelectedDdVal(event.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label>Options</label>
        <input
          type="checkbox"
          id="development"
          value="interest_development"
          name="user_interest"
        />
        <label className="light" htmlFor="development">
          option 1
        </label>
        <br />
        <input
          type="checkbox"
          id="option2"
          value="interest_design"
          name="user_interest"
        />
        <label className="light" htmlFor="option2">
          option 2
        </label>
        <br />
        <input
          type="checkbox"
          id="option3"
          value="interest_business"
          name="user_interest"
        />
        <label className="light" htmlFor="option3">
          option 3
        </label>
        <input
          name="email"
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
