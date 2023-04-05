class ProductManager {
  #precioBaseGanancia = 0.15;

  constructor() {
    this.products = [];
  }

  getProduct = () => {
    return this.products;
  }

  addProduct = (
    title, description, product, price = 50, thumbnail, stock, code
  ) => {
    const productAdded = {
      title,
      description,
      product,
      price,
      thumbnail,
      code,
      stock
    };

    if (this.products.length === 0) {
      productAdded.id = 1;
    } else {
      productAdded.id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push(productAdded);
  }

  getProductById = (id) => {
    const event = (product) => product.id === id;
    const findProduct = this.products.some(event)? this.products.find(event) : 'Not found product'
    return findProduct
  }

};

const handleProduct = new ProductManager();
handleProduct.addProduct('Foldsack No. 1 Backpack, Fits 15 Laptops', 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category', 'Fjallraven', 200, 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 20, new Date().now);

// console.log(handleProduct.getProduct());
console.log(handleProduct.getProductById(2));