import React from 'react';

import {

Container,
Condition,
Row,
HeartIcon,
DispatchTag,
PriceCard,
PriceRow,
InstallmentsInfo,
StockStatus,
MethodCard,
CheckIcon,
Actions,
Button,
Benefits,
ShieldIcon

 } from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo  |  5 vendidos</Condition>

      <Row>
        <h1>Notebook Lenovo Ultrafino Ideapad S145 I5-1035g1 8gb 256gb</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando Normalmente</DispatchTag>
      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">3.599</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 12X de R$ 299,92 </InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>
      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete Grátis</span>
          <span className="details">Benefício Lorem Ipsum</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon/>
          <p>
            Compra garantida, receba o produto que está esperando ou seu dinheiro de volta.
          </p>
        </li>
      </Benefits>
    </Container>
  );
}

export default ProductAction;
