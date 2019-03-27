import Page from './page';

class ProductsPage extends Page {

    // Web Elements
    get url() { return "products" };
    get addProductButton() { return $('a.mat-flat-button.mat-primary'); }

    
    // Parameterized Web Element
    productsInTable(productName) { return $$(`td='${productName}'`); }

}

export default new ProductsPage();