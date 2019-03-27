import Page from './page';

class EditProductPage extends Page {

    get url() { return "product-edit"; }

    get productName() { return $('[formcontrolname=prod_name]'); }
    get productDescription() { return $('[formcontrolname=prod_desc]'); }
    get productPrice() { return $('[formcontrolname=prod_price]'); }

    get saveProductButton() { return $('[type="submit"]'); }

}

export default new EditProductPage();