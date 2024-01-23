import { Container, Content, Options, Value, Observation } from "./styles";

function Price() {
  return (
    <Container>
      <Content>
        <span>Vamos saber qual o tamanho do projeto...</span>
        <p>Quantas páginas você quer?</p>
        <Options>
          <li>
            <input type="radio" id="a-1" name="a-1" value="1" />
            <label htmlFor="a-1">1</label>
          </li>
          <li>
            <input type="radio" id="a-2" name="a-2" value="2" />
            <label htmlFor="a-2">2</label>
          </li>
          <li>
            <input type="radio" id="a-3" name="a-3" value="3" />
            <label htmlFor="a-3">3</label>
          </li>
          <li>
            <input type="radio" id="a-4" name="a-4" value="4" />
            <label htmlFor="a-4">4</label>
          </li>
          <li>
            <input type="radio" id="a-5" name="a-5" value="5" />
            <label htmlFor="a-5">5</label>
          </li>
        </Options>
      </Content>
      <Content>
        <span>Vamos entender o que você já tem...</span>
        <p>Já possui algum conteúdo?</p>
        <Options>
          <li>
            <input type="radio" id="b-1" name="b-1" value="1" />
            <label htmlFor="b-1">Possuo somente textos</label>
          </li>
          <li>
            <input type="radio" id="b-2" name="b-2" value="2" />
            <label htmlFor="b-2">Possuo somente imagens</label>
          </li>
          <li>
            <input type="radio" id="b-3" name="b-3" value="3" />
            <label htmlFor="b-3">Possuo textos e imagens</label>
          </li>
          <li>
            <input type="radio" id="b-4" name="b-4" value="4" />
            <label htmlFor="b-4">Possuo um layout com design pronto</label>
          </li>
          <li>
            <input type="radio" id="b-5" name="b-5" value="5" />
            <label htmlFor="b-5">Possuo nada, somente vontade</label>
          </li>
        </Options>
      </Content>
      <Content>
        <span>Vamos ver o que o projeto precisa ter...</span>
        <p>Quais as funcionalidades?</p>
        <Options>
          <li>
            <input type="checkbox" id="c-1" name="c-1" value="1" />
            <label htmlFor="c-1">Formulário para contato</label>
          </li>
          <li>
            <input type="checkbox" id="c-2" name="c-2" value="2" />
            <label htmlFor="c-2">Galeria de fotos</label>
          </li>
          <li>
            <input type="checkbox" id="c-3" name="c-3" value="3" />
            <label htmlFor="c-3">Integração com redes sociais</label>
          </li>
          <li>
            <input type="checkbox" id="c-4" name="c-4" value="4" />
            <label htmlFor="c-4">Botão de WhatsApp</label>
          </li>
          <li>
            <input type="checkbox" id="c-5" name="c-5" value="5" />
            <label htmlFor="c-5">Mapa de localização</label>
          </li>
        </Options>
      </Content>
      <Content>
        <p>VOILA! A pechincha sairia por:</p>
        <Value>
          <p>R$ 623</p>
        </Value>
        <Observation className="obs">
          Lembrando que isso é apenas uma estimativa. Se você quiser fazer um
          orçamento mais detalhado, entre em contato comigo que juntos
          descobriremos o valor ideal para o seu projeto,
        </Observation>
      </Content>
    </Container>
  );
}

export default Price;
