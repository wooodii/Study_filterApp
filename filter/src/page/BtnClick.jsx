import { useState } from "react";

const BtnClick = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState({ color: "black" });

  const onClickEnter = () => setMessage("Enter");
  const onClickLeave = () => setMessage("Leave");

  // 구글 검색 - javascript event.target css 속성
  // JavaScript / Object / Element.getAttribute() / 요소의 속성 값을 ...
  // https://www.codingfactory.net/10283

  const handleClick = (event) => {
    const getStyleAttr = event.target.getAttribute("style");
    const message = document.getElementById("message");

    console.log("getStyleAttr", getStyleAttr);

    let sliceColor = getStyleAttr.split(";");

    console.log("sliceColor", sliceColor);

    console.log("컬러", color);
    console.log("슬라이스컬러[0]", sliceColor[0]);

    sliceColor = sliceColor[0].split(":");

    console.log('":"로 자른 sliceColor', sliceColor);

    console.log("message", message.getAttribute("style"));

    const messageColor = message.getAttribute("style");

    if (messageColor === getStyleAttr) {
      setColor({ color: "black" });
    } else {
      setColor({ color: sliceColor[1] });
    }
  };

return (
  <div>
    <h2 id="message" style={color}>
      {message}
    </h2>
    <button onClick={onClickEnter}>클릭</button>
    <button onClick={onClickLeave}>퇴장</button>

    <button onClick={handleClick} style={{ color: "red" }}>
      효과없어요
    </button>
    <button onClick={handleClick} style={{ color: "green" }}>
      보통이에요
    </button>
    <button onClick={handleClick} style={{ color: "blue" }}>
      효과좋아요
    </button>
  </div>
);


};



export default BtnClick;
