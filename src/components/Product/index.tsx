import React from 'react';
import tshirtImage from '../../assets/Notbook.jpg';

import { Container, Row, Panel, Column, Gallery, Section, Description} from './styles';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';


const Product: React.FC = () => {
  return (
    <>
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
        <Gallery>
          <img alt ="T-shirt" src={tshirtImage} />
        </Gallery>
        <Info/>

        </Column>

        <Column>
          <ProductAction />
          <SellerInfo/>

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />

        </Column>

      </Panel>

    </Container>
    </>
  );
}

const WarrantySection =() => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description"> Receba o produto comprado ou o dinheiro de volta.</p>
      </span>
      <span>
        <p className="title">Garantia do Vendedor</p>
        <p className="description"> Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descição</h2>
    <p>
   <h2>Lenovo ideapad S145:</h2>
    Design sofisticado leve e compacto, possui tela antirreflexo de 15.6" para mais conforto visual e definição de imagem. Um notebook perfeito para produtividade e entretenimento com WiFi AC ultrarrápido e teclado numérico. Conta com abertura de tela de 180 graus para mais flexibilidade e facilidade de uso.  Possibilidade de utilizar o armazenamento de forma híbrida e ganhar muito mais agilidade e produtividade no seu dia a dia. Com o slot disponível, você tem a opção de adicionar um SSD NVMe M.2 para ter mais segurança ao armazenar seus dados. Nitidez e alta qualidade de som com certificação Dolby Audio.
    </p>
  </Description>
)

export default Product;
