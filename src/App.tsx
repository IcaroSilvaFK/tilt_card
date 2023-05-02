import { useRef, MouseEvent } from "react";

const MIN_RX= 11;
const MAX_RX= -11;
const MIN_RY= -20;
const MAX_RY= 20;
const DIFF_RX = MAX_RX - MIN_RX
const DIFF_RY = MAX_RY - MIN_RY

function App() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMoveMouseInCard(event: MouseEvent) {
    const { pageX, pageY } = event;
    const rootElement = document.documentElement;

    rootElement.style.setProperty("--client-x", `${pageX}px`);
    rootElement.style.setProperty("--client-y", `${pageY}px`);

    const rect = cardRef.current!.getBoundingClientRect();

    const { left, top, width, height } = rect;

    const x1 = left + width;
    const y1 = top + height;

    const offsetX = pageX - left;
    const offsetY = pageY - top;

    /*
        style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
      */
    // cardRef.current!.style.transform = `translate(var(--client-x))`;
    // X 0% 11 -> 100% -11
    // Y 0% -20 -> 100% 20

    const percentageX = offsetX / width;
    const percentageY = offsetY / height;


    const dfX = DIFF_RX * percentageX + MIN_RX;
    const dfY = DIFF_RY * percentageY + MIN_RY;


    cardRef.current!.style.willChange = "transform";
    cardRef.current!.style.transform = `perspective(1000px) rotateX(${dfX}deg) rotateY(${dfY}deg) scale3d(1, 1, 1)`;
  }

  function handleRemoveEventListener(){
    cardRef.current!.style.transform =  `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  return (
    <div style={{ width: "100vw", height: "100vh",display:'flex',alignItems:'center', justifyContent:'center' }}>
      <div
        style={{ width: 300, height: 300, background: "red" }}
        onMouseMoveCapture={handleMoveMouseInCard}
        onMouseLeave={handleRemoveEventListener}
        ref={cardRef}
      >
        <h1>card</h1>
      </div>
    </div>
  );
}

export default App;
