import ProductData from '../../data/ProductData';
import {
  ProductContainerStyled,
  SectionProductsStyled,
  BtnContainerStyled,
} from './ProductsStyled';
import Card from '../../components/UI/Card/Card';
import { Button } from '@nextui-org/react';
const Products = ({ isEnabled }) => {
  return (
    <SectionProductsStyled>
      <div>
        <h1>PRODUCTOS DESTACADOS</h1>
      </div>
      <BtnContainerStyled style={{ display: isEnabled ? 'flex' : 'none' }}>
        <Button>Opcion1</Button>
        <Button>Opcion2</Button>
        <Button>Opcion3</Button>
        <Button>Opcion4</Button>
      </BtnContainerStyled>
      <ProductContainerStyled>
        {ProductData.map((ProductData) => {
          // const [id, name, src, price] = ProductData;
          return (
            <Card
              key={ProductData.id}
              src={ProductData.src}
              name={ProductData.name}
              price={ProductData.price}
            ></Card>
          );
        })}
      </ProductContainerStyled>
    </SectionProductsStyled>
  );
};

export default Products;
