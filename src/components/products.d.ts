
interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductsData {
  success: boolean;
  products: Product[];
}


interface Card {
  info: Product
}