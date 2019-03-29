// Page Objects
import ProductsPage from '../page_objects/products.page';
import ViewProductPage from '../page_objects/view-product.page';
import EditProductPage from '../page_objects/edit-product.page';
import AddProductPage from '../page_objects/add-product.page';

// Test Data

import using from "jasmine-data-provider";
import productData from "../test-data/speed-test-data.json"

// Helper functions
function deleteProducts(productName){

  let counter = ProductsPage.productsInTable.length;

  for (var i = 0; i < counter; i++){ 

    if(ProductsPage.productsInTable[i].getText().includes(productName)) {

      ProductsPage.productsInTable[i].click();

      expect(ViewProductPage.pageIdentifier.isDisplayed()).toBe(true);

      ViewProductPage.deleteButton.click();

      expect(ProductsPage.pageIdentifier.isDisplayed()).toBe(true));

      counter = counter - 2 ;
    }
  }
}
  
function createProduct(product){
  
  let productPresent = checkForProductInTable(product.name);
  
  if(!productPresent){

   expect(ProductsPage.pageIdentifier.isDisplayed()).toBe(true);
        
    ProductsPage.addProductButton.click();

    expect(AddProductPage.pageIdentifier.isDisplayed()).toBe(true);

    AddProductPage.productName.addValue(product.name);
    AddProductPage.productDescription.addValue(product.description);
    AddProductPage.productPrice.addValue(product.price);

    AddProductPage.submitButton.click();
    

    expect(ViewProductPage.pageIdentifier.isDisplayed()).toBe(true);

    ViewProductPage.returnToProductsPageButton.click();

    expect(ProductsPage.pageIdentifier.isDisplayed()).toBe(true);

  }


}

function checkForProductInTable(productDetail){

  const counter = ProductsPage.productsInTable.length;

  for (var i = 0; i < counter; i++){ 

    if(ProductsPage.productsInTable[i].getText().includes(productDetail)) {

      return true;

    }

  }
  return false;
}

function findProductInTable(productDetail){

  const counter = ProductsPage.productsInTable.length;

  for (var i = 0; i < counter; i++){ 

    if(ProductsPage.productsInTable[i].getText().includes(productDetail)) {

      return ProductsPage.productsInTable[i];

    }

  }
  return null;
}
  
  

using(productData, function(product) {
    describe('Create tests for product', () => {

      beforeEach( function(){
        browser.url('');
        deleteProducts(product.name);
      })

      afterEach( function() {
        browser.url('');
        deleteProducts(product.name) ;
      })

        it(`should be able to create a product called ${product.name}`, async function() {
            
            // CPSU01
            // SETUP: Check whether the `Product` is present in the list, if it's there, delete it.
            // ASSERT: `Product` isn't in list. 
            // Done in the 'before' statement
    
            // CP01
            // Navigate to the `Products Page`
            // ASSERT: We're on the `Products Page` of the Website
            expect(ProductsPage.pageIdentifier.isDisplayed()).toBe(true);
    
            // CP02
            // Click on the `Add Product` button
            ProductsPage.addProductButton.click();

            // ASSERT: We're on the `Add Product` page
            expect(AddProductPage.pageIdentifier.isDisplayed()).toBe(true);
    
            // CP03
            // Enter a `Name`, `Description` and `Price` for a Product (see `test-data.adoc` for Test Data)
            // `Product` details entered
            AddProductPage.productName.addValue(product.name);
            AddProductPage.productDescription.addValue(product.description);
            AddProductPage.productPrice.addValue(product.price);
    
            // CP04
            // Press the `Save` button.
            AddProductPage.submitButton.click();
            // ASSERT: The `View` product page opens.
            expect(ViewProductPage.pageIdentifier.isDisplayed()).toBe(true);
    
            // ASSERT: The product details are correct (`name`, `description`, `price`).
            expect(ViewProductPage.productName.getText()).toBe(product.name);
            expect(ViewProductPage.productDescription.getText()).toBe(product.description);
            expect(ViewProductPage.productPrice.getText()).toBe(product.price);
    
            // CP05
            // Press the `Products Page` button.
            ViewProductPage.returnToProductsPageButton.click();

            // ASSERT: We're returned to the `Products Page`
            expect(ProductsPage.pageIdentifier.isDisplayed()).toBe(true);
    
            // ASSERT: The new `Product` is listed.
            expect(checkForProductInTable(product.name)).toBe(true)
            expect(checkForProductInTable(product.price)).toBe(true)
    
            // CPTD01
            // TEARDOWN: Delete the `Product` that was created.
            // ASSERT: `Product` is no longer listed.
            // This is in the @AfterEach method
    
        });
    
    });

    describe('Read Update and Delete tests for product', () => {

      beforeEach( function(){
        browser.url('');
        createProduct(product);
      })

      afterEach( function() {
        browser.url('');
        deleteProducts(product.name) ;
      })

        it('should be able to view a product', () => { 

          // VPSU01
          // SETUP: Check whether the `Product` is present in the list, if it's not, create it.
          // ASSERT: `Product` in list. 
          // Done in the 'beforeEach' method

          // VP01
          // Navigate to the `Products Page`
          // ASSERT: We're on the `Products Page` of the Website
          // browser.getUrl() not working - async?

          // VERIFY: The `name` and `description` are correct.
          expect(checkForProductInTable(product.name)).toBe(true)
          expect(checkForProductInTable(product.price)).toBe(true)

          // VP02
          // Click on the `Product` name
          findProductInTable(product.name).click();


          // ASSERT: We're on the `View Product` page
          // browser.getUrl() not working - async?

          // VERIFY: The `name`, `description` and `price` of the product are correct.
          expect(ViewProductPage.productName.getText()).toBe(product.name);
          expect(ViewProductPage.productDescription.getText()).toBe(product.description);
          expect(ViewProductPage.productPrice.getText()).toBe(product.price);

          // VPTD01
          // TEARDOWN: Delete the `Product` that was created.
          // ASSERT: `Product` is no longer listed.
          // Done in the 'afterEach' method.
    
        });

        it('should be able to edit a product', () => { 

          // EPSU01
          // SETUP: Check whether the `Product` is present in the list, if it's not, create it.
          // ASSERT: `Product` in list. 
          // In 'beforeEach' method

          // EP01
          // Navigate to the `Products Page`
          // ASSERT: We're on the `Products Page` of the Website
          // browser.getUrl() not working (async?)

          // EP02
          // Click on the `Product` name
          findProductInTable(product.name).click();

          // ASSERT: We're on the `View Product` page
          // browser.getUrl() not working (async?)

          // EP03
          // Click on the `Edit Product` button
          ViewProductPage.editProductButton.click();

          // ASSERT: We're on the `Edit Product Page`
          // browser.getUrl() not working (async?)

          // EP04
          // Clear the `name`, `description` and `price` fields.
          // VERIFY: The fields are empty.
          // This is done as part of the 'setValue' command in Webdriver.IO

          // EP05
          // Enter new details from the `test-data-edit-product.json` file
          // New details are entered
          EditProductPage.productName.setValue(product.editName);
          EditProductPage.productDescription.setValue(product.editDescription);
          EditProductPage.productPrice.setValue(product.editPrice);

          // EP06
          // Click on the `Save` button
          expect(EditProductPage.saveProductButton.isEnabled()).toBe(true);
          EditProductPage.saveProductButton.click()

          // ASSERT: We are taken to the `View Product` screen
          // browser.getUrl() not working (async?)

          // ASSERT: The `name`, `description` and `price` of the product have been updated.
          expect(ViewProductPage.productName.getText()).toBe(product.editName);
          expect(ViewProductPage.productDescription.getText()).toBe(product.editDescription);
          expect(ViewProductPage.productPrice.getText()).toBe(product.editPrice);

          // EP07
          // Click on the `Products Page` button
          ViewProductPage.returnToProductsPageButton.click();

          // ASSERT: The `name` and `description` have been updated.
          expect(checkForProductInTable(product.editName)).toBe(true);
          expect(checkForProductInTable(product.editPrice)).toBe(true);

          // EPTD01
          // TEARDOWN: Delete the `Product` that was created.
          deleteProducts(product.editName);
          // ASSERT: `Product` is no longer listed.
          expect(checkForProductInTable(product.editName)).toBe(false);
    
        });

        it('should be able to delete a product', () => { 

          // DPSU01
          // SETUP: Check whether the `Product` is listed, if it's not, create it.
          // ASSERT: `Product` in list. 
          // Done in the 'beforeEach' method.

          // DP01
          // Navigate to the `Products Page`
          // ASSERT: We're on the `Products Page` of the Website
          // browser.getUrl() not working (async?)

          // DP02
          // Click on the `Product` name
          findProductInTable(product.name).click();

          // ASSERT: We're on the `View Product` page
          // browser.getUrl() not working (async?)

          // DP03
          // Click on the `Delete Product` button
          ViewProductPage.deleteButton.click();
          // ASSERT: We're returned to the `Products Page`
          // browser.getUrl() not working (async?)

          // ASSERT: The `Product` is no longer listed.
          expect(checkForProductInTable(product.name)).toBe(false);
    
        });

    });

 });
