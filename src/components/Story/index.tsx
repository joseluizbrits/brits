"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container, StatusProgress, Thumbs } from "./styles";

const photos = [
  {
    id: "photo-0",
    src: "/eye.jpg",
    alt: "Olhos coloridos",
  },
  {
    id: "photo-1",
    src: "/art.jpg",
    alt: "Mulher e arte",
  },
  {
    id: "photo-2",
    src: "/note.webp",
    alt: "Tela de notebook",
  },
];

function Story() {
  const [step, setStep] = useState(0);
  const [pause, setPause] = useState(false);
  const [remaining, setRemaining] = useState(3000);

  const timerId = useRef<NodeJS.Timeout | number>(0);
  const timeStart = useRef(0);
  const timeClick = useRef(0);

  useEffect(() => {
    timeStart.current = new Date().getTime();

    timerId.current = setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
      setRemaining(() => 3000);
    }, 3000);

    if (step > photos.length - 1) setStep(0);

    return () => clearTimeout(timerId.current);
  }, [step]);

  const handleStopProgress = () => {
    timeClick.current = new Date().getTime();

    clearTimeout(timerId.current);

    setRemaining(
      (state) => (state -= new Date().getTime() - timeStart.current)
    );

    setPause(() => true);
  };

  const handleRunProgress = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickDiff = new Date().getTime() - timeClick.current;
    const thumb = e.currentTarget.ariaLabel;

    if (clickDiff < 100) {
      if (thumb === "back" && step > 0) {
        setStep((prevStep) => prevStep - 1);
        setRemaining(() => 3000);
      }

      if (thumb === "next") {
        setStep((prevStep) => prevStep + 1);
        setRemaining(() => 3000);
      }
    }

    timeStart.current = new Date().getTime();

    timerId.current = setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
      setRemaining(() => 3000);
    }, remaining);

    setPause(() => false);
  };

  return (
    <Container>
      {/* {photos.map(({ id, src, alt }) => (
        <Image
          key={id}
          src={src}
          fill
          alt={alt}
          className={id === "photo-" + step ? "active" : ""}
        />
      ))} */}

      <StatusProgress aria-label="barra de progresso">
        {photos.map((_, index) => (
          <div key={"step-" + index} className={index < step ? "fill" : ""}>
            {index === step && <span className={pause ? "paused" : ""} />}
          </div>
        ))}
      </StatusProgress>

      <Thumbs>
        <button
          aria-label="back"
          onMouseDown={handleStopProgress}
          onMouseUp={handleRunProgress}
        />
        <button
          aria-label="next"
          onMouseDown={handleStopProgress}
          onMouseUp={handleRunProgress}
        />
      </Thumbs>

      <span style={{ position: "absolute", top: 0, left: 0, fontSize: "3rem" }}>
        {step}
      </span>
      <span
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          fontSize: "3rem",
          color: "#fff",
        }}
      >
        {pause ? "PAUSED" : "RUNNING"}
        <br />
        {"START: " + timeStart.current}
        <br />
        {"REMAINING: " + remaining}
      </span>
    </Container>
  );
}

export default Story;
