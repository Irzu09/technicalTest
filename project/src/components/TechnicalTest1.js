import "./Component.css";
import { useState } from 'react';

function TechnicalTest1() {
  const [inputValue, setInputValue] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [operation, setOperation] = useState("");

  function Button({ symbol, className, handleClick }) {
    return (<div className={className} onClick={handleClick}><span>{symbol}</span></div>)
  };

  const greyGroup = [
    { id: 1, symbol: "AC" },
    { id: 2, symbol: "+/-" },
    { id: 3, symbol: "%" }
  ];

  const orangeGroup = [
    { id: 1, symbol: "/", value: "/" },
    { id: 2, symbol: "X", value: "x" },
    { id: 3, symbol: "-", value: "-" },
    { id: 4, symbol: "+", value: "=" },
    { id: 5, symbol: "=", value: "=" }
  ];

  const blackGroup = [
    { id: 1, symbol: "7", value: "7" },
    { id: 2, symbol: "8", value: "8" },
    { id: 3, symbol: "9", value: "9" },
    { id: 4, symbol: "4", value: "4" },
    { id: 5, symbol: "5", value: "5" },
    { id: 6, symbol: "6", value: "6" },
    { id: 7, symbol: "1", value: "1" },
    { id: 8, symbol: "2", value: "2" },
    { id: 9, symbol: "3", value: "3" }
  ];

  function ShowInput() {
    return (
      <div className="sectionDisplay">
        <div className="inputDiv">
          <input type="text" className="input" value={inputValue}
            onKeyDown={e => {
              if (
                e.key === "0" || e.key === "1" ||
                e.key === "2" || e.key === "3" ||
                e.key === "4" || e.key === "5" ||
                e.key === "6" || e.key === "7" ||
                e.key === "8" || e.key === "9" ||
                e.key === "+" || e.key === "-" ||
                e.key === "x" || e.key === "/" ||
                e.key === "%" || e.key === "=" ||
                e.key === "Delete" || e.key === "Enter" ||
                e.key === "Backspace" || e.key === "." ||
                e.key === "ArrowLeft" || e.key === "ArrowRight"
              ) { }
              else e.preventDefault();
            }}
            onChange={() => { }}
          />
        </div>
      </div>
    )
  }

  function OrangeButton() {
    return (
      <div className="orangeArea">
        {orangeGroup.map((data) => {
          return (
            <Button key={data.id} symbol={data.symbol} className={"orangeCircle"} handleClick={() => handleClickOperation(data.value)} />
          )
        })}
      </div>
    )
  }

  function GreyButton() {
    return (
      <div className="greyArea">
        {greyGroup.map((data) => {
          return (
            <Button key={data.id} symbol={data.symbol} className={"greyCircle"} handleClick={() => handleClickGeneral(data.symbol)} />
          )
        })}
      </div>
    )
  }

  function BlackButton() {
    return (
      <>
        <div className="blackArea">
          {blackGroup.map((data) => {
            return (
              <Button key={data.id} symbol={data.symbol} className={"blackCircle"} handleClick={() => handleClickNumber(data.value)} />
            )
          })}
        </div>
        <div className="blackArea">
          <div className="blackCircle zero"><span>0</span></div>
          <Button symbol={"."} className={"blackCircle"} />
        </div>
      </>
    )
  }

  function handleClickNumber(value) {
    if (inputValue === "0") setInputValue(value);
    else setInputValue(inputValue + value);
  }

  function handleClickOperation(value) {
    if (value === "=") {
      let result;
      switch (value) {
        case "+":
          result = parseFloat(prevValue) + parseFloat(inputValue);
          break;

        case "-":
          result = parseFloat(prevValue) - parseFloat(inputValue);
          break;

        case "x":
          result = parseFloat(prevValue) * parseFloat(inputValue);
          break;

        case "/":
          result = parseFloat(prevValue) / parseFloat(inputValue);
          break;

        default:
          break;
      }
      setInputValue(result);
      setPrevValue("");
      setOperation("");
    }

    else {
      setOperation(value);
      setPrevValue(inputValue);
      setInputValue("0");
    }
  }

  function handleClickGeneral(symbol) {
    if (symbol === "AC") {
      setInputValue("0");
      setOperation("");
      setPrevValue("");
    }

    else if (symbol === "%" || symbol === "+/-") {
      if (inputValue !== "0") {
        let result;
        switch (symbol) {
          case "%":
            result = parseFloat(inputValue) / 100;
            break;

          case "+/-":
            result = -(parseFloat(inputValue));
            break;
          default:
            break;
        }
        setInputValue(result);
        setPrevValue("");
        setOperation("");
      }
    }

  }

  return (
    <div>
      <h5>Technical test 1: Basic Calculator</h5>
      <div className="mainContainer">
        <ShowInput />
        <div className="sectionKeyboard">
          <div className="w-75">
            <GreyButton />
            <BlackButton />
          </div>
          <div className="w-25">
            <OrangeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalTest1;
