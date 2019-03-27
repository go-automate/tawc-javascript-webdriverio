import Page from './page';

class ViewProductPage extends Page {

    // Web Elements + Locators
    get url() { return "product-details"; }

    get returnToProductsPageButton() { return $("div.button-row a.mat-flat-button.mat-primary"); }

    get deleteButton() { return $("mat-card-actions a.mat-flat-button.mat-warn"); }

    get editProductButton() { return $("mat-card-actions a.mat-flat-button.mat-primary"); }

    get productName() { return $('h2'); }

    get productDescription() { return $('mat-card-subtitle.mat-card-subtitle'); }

    get productPrice() { return $('mat-card-content.mat-card-content dd:first-of-type'); }

}

export default new ViewProductPage();