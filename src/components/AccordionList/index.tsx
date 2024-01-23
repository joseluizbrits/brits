import { Container, Details, Summary } from "./styles";
import { useState } from "react";

import Drop from "@/icons/Drop";
import accordionList from "@/utils/accordionList";
import StarOne from "@/icons/StarOne";

function AccordionList() {
  const [activeItem, setActiveItem] = useState("");

  function handleItem(e: React.MouseEvent<HTMLElement>) {
    if (!e.currentTarget) return;

    const item = e.currentTarget.id;

    if (item === activeItem) return setActiveItem("");

    return setActiveItem(item);
  }

  return (
    <Container>
      {accordionList.map(({ id, summary, details, icon }) => (
        <li key={id}>
          {icon}
          <Summary
            id={id}
            className={activeItem === id ? "active" : ""}
            onClick={(e) => handleItem(e)}
          >
            <h3>{summary}</h3>
            <Drop />
          </Summary>
          <Details className={activeItem === id ? "active" : ""}>
            <p>{details}</p>
          </Details>
        </li>
      ))}
    </Container>
  );
}

export default AccordionList;
