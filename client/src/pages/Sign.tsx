import { useState } from "react";
import styled from "styled-components";

type InputValue = {
  [key: string]: string;
  email: string;
  password: string;
  name: string;
  gender: "male" | "female";
};

export default function Sign() {
  const [inputValue, setInputValue] = useState<InputValue>({
    email: "",
    password: "",
    name: "",
    gender: "male",
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`you send ${JSON.stringify(inputValue)}`);
  }

  return (
    <SignContainer>
      <legend>sign up</legend>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Input handler={handleInput} name="email" type="email" value={inputValue.email} />
        <Input handler={handleInput} name="password" type="password" value={inputValue.password} />
        <Input handler={handleInput} name="name" type="name" value={inputValue.name} />
        <RadioGroup
          handler={handleInput}
          name="gender"
          list={["male", "female"]}
          checkedValue={inputValue.gender}
        />
        <button>click</button>
      </form>
    </SignContainer>
  );
}

const RadioGroup = ({
  checkedValue,
  handler,
  list,
  name,
}: {
  list: string[];
  name: string;
  checkedValue: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <label>{`${name}: `} </label>

      {list.map((value, idx) => (
        <label key={idx}>
          {value}
          <input
            type="radio"
            name={name}
            value={value}
            checked={checkedValue === value}
            onChange={(e) => handler(e)}
          />
        </label>
      ))}
    </div>
  );
};

const Input = ({
  type,
  name,
  value,
  handler,
}: {
  type: string;
  name: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label>
      {`${name}: `}
      <input type={type} name={name} value={value} onChange={(e) => handler(e)} />
    </label>
  );
};

const SignContainer = styled.fieldset`
  display: inline-block;
  > form {
    display: flex;
    flex-direction: column;
  }
`;
