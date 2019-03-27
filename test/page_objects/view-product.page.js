import Page from './page';

class ViewProductPage extends Page {

    // Web Elements + Locators
    get url() { return "product-details"; }

    get returnToProductsPageButton() { return $("div.button-row a.mat-flat-button.mat-primary"); }

    get deleteButton() { return $("mat-card-actions a.mat-flat-button.mat-warn"); }

    get editProductButton() { return $("mat-card-actions a.mat-flat-button.mat-primary"); }


    // Parameterized Web Elements + Locators
    productName(productName) { return $(`h2='${productName}'`); }

    productDescription(productDescription) { return $(`mat-card-subtitle='${productDescription}'`); }

    productPrice(productPrice) { return $(`dd='${productPrice}'`); }

}

export default new ViewProductPage();