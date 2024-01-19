import { Point } from "./styles";
import points from "@/utils/points";

function Points() {
  return (
    <>
      {points.map((id) => (
        <Point key={id} id={id}></Point>
      ))}
    </>
  );
}

export default Points;
