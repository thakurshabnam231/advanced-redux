import ProductItem from './ProductItem';
import classes from './Products.module.css';
const products = [
  {
    id: 'p1',
    title: ' first book',
    amount: 6,
    description: 'my first book'
  },
  {
    id: 'p1',
    title: 'second book',
    amount: 6,
    description: 'my second book'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product =>
          <ProductItem
          key={product.id}
          id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
         ) }
      </ul>
    </section>
  );
};

export default Products;
