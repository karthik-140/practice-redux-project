import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 4,
    title: "Book",
    description: "My First Book"
  },
  {
    id: "p2",
    price: 5,
    title: "Bottle",
    description: "For Drinking"
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
