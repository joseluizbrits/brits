import { Point } from "./styles";
import points from "@/utils/points";
import Animation from "./animation";

function Points() {
  Animation(points);

  return (
    <>
      {points.map((id) => (
        <Point key={id} id={id}></Point>
      ))}
    </>
  );
}

export default Points;
