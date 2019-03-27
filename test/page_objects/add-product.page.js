import Page from './page';

class AddProductPage extends Page {

    get url() { return "product-add"; }

    get productName() { return $('[formcontrolname=prod_name]'); }
    get productDescription() { return $('[formcontrolname=prod_desc]'); }
    get productPrice() { return $('[formcontrolname=prod_price]'); }
    get submitButton() { return $('[type=submit]'); }

}
module.exports = new AddProductPage();