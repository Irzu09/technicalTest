import "./Component.css";

function TechnicalTest1() {
  function Button({ symbol, category }) {
    if (category === "grey")
      return (<div className="greyCircle"><span>{symbol}</span></div>)
    else if (category === "black")
      return (<div className="blackCircle"><span>{symbol}</span></div>)

  };

  const greyGroup = [
    { id: 1, symbol: "AC" },
    { id: 2, symbol: "+/-" },
    { id: 3, symbol: "%" }
  ];

  const orangeGroup = [
    { id: 1, symbol: "/" },
    { id: 2, symbol: "X" },
    { id: 3, symbol: "-" },
    { id: 4, symbol: "+" },
    { id: 5, symbol: "=" }
  ];

  const blackGroup = [
    { id: 1, symbol: "1" },
    { id: 2, symbol: "2" },
    { id: 3, symbol: "3" },
    { id: 4, symbol: "4" },
    { id: 5, symbol: "5" },
    { id: 5, symbol: "6" },
    { id: 5, symbol: "7" },
    { id: 5, symbol: "8" },
    { id: 5, symbol: "9" }
  ];

  return (
    <div>
      <h5>Technical test 1: Basic Calculator</h5>
      <div>
        <div>number section</div>
        <div className="keyboard">
          <div className="greyArea">
            {greyGroup.map((data) => {
              return (
                <Button symbol={data.symbol} category={"grey"} />
              )
            })}
          </div>
          <div className="blackArea">
            {blackGroup.map((data) => {
              return (
                <Button symbol={data.symbol} category={"black"} />
              )
            })}
          </div>
          <div className="blackArea">
            <Button symbol={"0"} category={"black"} />
            <Button symbol={"."} category={"black"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalTest1;
