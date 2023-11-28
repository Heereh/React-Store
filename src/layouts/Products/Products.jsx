import ProductData from '../../data/ProductData';
import {
  ProductContainerStyled,
  SectionProductsStyled,
} from './ProductsStyled';
import Card from '../../components/UI/Card/Card';

const Products = () => {
  return (
    <SectionProductsStyled>
      <div>
        <h1>PRODUCTOS DESTACADOS</h1>
      </div>
      <ProductContainerStyled>
        {ProductData.map((ProductData) => {
          return (
            <Card
              key={ProductData.id}
              src={ProductData.src}
              name={ProductData.name}
              price={ProductData.price}
            />
          );
        })}
      </ProductContainerStyled>
    </SectionProductsStyled>
  );
};

export default Products;
