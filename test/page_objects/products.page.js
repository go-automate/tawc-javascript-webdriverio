import Page from './page';

class ProductsPage extends Page {

    // Web Elements
    get url() { return "products"; }
    get addProductButton() { return $('a.mat-flat-button.mat-primary'); }
    get productsInTable() { return $('tbody').$$('td'); }

}

export default new ProductsPage();