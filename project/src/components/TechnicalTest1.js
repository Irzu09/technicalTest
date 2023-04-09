import "./Component.css";

function TechnicalTest1() {
  function Button({ symbol, category }) {
    if (category === "grey")
      return (<div className="greyCircle"><span>{symbol}</span></div>)
    else if (category === "black")
      return (<div className="blackCircle"><span>{symbol}</span></div>)
    else if (category === "orange")
      return (<div className="orangeCircle"><span>{symbol}</span></div>)

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
      <div className="mainContainer">
        <div className="sectionDisplay">
          <div className="inputDiv">
            <input type="text" className="input" placeholder="0"
              onKeyDown={e => {
                if (e.key === 'd') {
                  console.log(e.key);
                  return e.preventDefault;
                }
              }} />
          </div>
        </div>
        <div className="sectionKeyboard">
          <div className="w-75">
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
              <div className="blackCircle zero"><span>0</span></div>
              <Button symbol={"."} category={"black"} />
            </div>
          </div>
          <div className="w-25">
            <div className="orangeArea">
              {orangeGroup.map((data) => {
                return (
                  <Button symbol={data.symbol} category={"orange"} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalTest1;
