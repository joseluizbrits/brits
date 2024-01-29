import StarOne from "@/icons/StarOne";
import StarThree from "@/icons/StarThree";
import StarTwo from "@/icons/StarTwo";

const accordionList = [
  {
    id: "item-1",
    summary: "Design moderno e criativo",
    details:
      "Um site de responsa precisa ter o seu próprio design para demonstrar autenticidade e animações suaves para dar aquele toque especial.",
    icon: <StarOne />,
  },
  {
    id: "item-2",
    summary: "Performance e fluidez",
    details:
      "Ninguém suporta um site lento e lerdo, portanto é necessário usar das tecnologias mais modernas para que o carregamento seja rápido e liso.",
    icon: <StarTwo />,
  },
  {
    id: "more-3",
    summary: "Responsividade",
    details:
      "Um site moderno precisa se adaptar a todos os tamanhos de telas. Deixar o layout quebrado já é considerado um crime sem direito à fiança.",
    icon: <StarThree />,
  },
];

export default accordionList;
