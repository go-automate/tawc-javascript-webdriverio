// Page Objects
import ProductsPage from '../page_objects/products.page';
import ViewProductPage from '../page_objects/view-product.page';
import EditProductPage from '../page_objects/edit-product.page';
import AddProductPage from '../page_objects/add-product.page';

// Test Data

import using from "jasmine-data-provider";
import productData from "../test-data/speed-test-data.json"
// const products = require('../data/debug-data.json');

// Helper functions
function deleteProducts(productName){

  let counter = ProductsPage.productsInTable.length;

  for (var i = 0; i < counter; i++){ 

    if(ProductsPage.productsInTable[i].getText().includes(productName)) {

      ProductsPage.productsInTable[i].click();

      expect(browser.getUrl()).toContain(ViewProductPage.url);

      ViewProductPage.deleteButton.click();

      expect(browser.getUrl()).toContain(ProductsPage.url);

      counter = counter - 2 ;
    }
  }
}
  
function createProduct(product){
  
  let productPresent = checkForProductInTable(product.name);
  
  if(!productPresent){

    expect(browser.getUrl()).toContain(ProductsPage.url);
        
    ProductsPage.addProductButton.click();

    expect(browser.getUrl()).toContain(AddProductPage.url);

    AddProductPage.productName.addValue(product.name);
    AddProductPage.productDescription.addValue(product.description);
    AddProductPage.productPrice.addValue(product.price);

    AddProductPage.submitButton.click();
    

    expect(browser.getUrl()).toContain(ViewProductPage.url);

    ViewProductPage.returnToProductsPageButton.click();

    expect(browser.getUrl()).toContain(ProductsPage.url);

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
  
  

using(productData, function(product) {
    describe('Create tests for product', () => {

      beforeEach( function(){
        browser.url('');
        deleteProducts(product.name);
      })

      afterEach( function() {
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
            expect(browser.getUrl()).toContain(ProductsPage.url);
    
            // CP02
            // Click on the `Add Product` button
            ProductsPage.addProductButton.click();

            // ASSERT: We're on the `Add Product` page
            expect(browser.getUrl()).toContain(AddProductPage.url);
    
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
            expect(browser.getUrl()).toContain(ViewProductPage.url);
    
            // ASSERT: The product details are correct (`name`, `description`, `price`).
            expect(ViewProductPage.productName.getText()).toBe(product.name);
            expect(ViewProductPage.productDescription.getText()).toBe(product.description);
            expect(ViewProductPage.productPrice.getText()).toBe(product.price);
    
            // CP05
            // Press the `Products Page` button.
            ViewProductPage.returnToProductsPageButton.click();

            // ASSERT: We're returned to the `Products Page`
            expect(browser.getUrl()).toContain(ProductsPage.url);
    
            // ASSERT: The new `Product` is listed.
            expect(checkForProductInTable(product.name)).toBe(true)
            expect(checkForProductInTable(product.price)).toBe(true)
    
            // CPTD01
            // TEARDOWN: Delete the `Product` that was created.
            // ASSERT: `Product` is no longer listed.
            // This is in the @AfterEach method
    
        });
    
    });

    // describe('Read Update and Delete tests for product', () => {

    //   beforeEach( function(){
    //     browser.url('');
    //     createProduct(product);
    //   })

    //   afterEach( function() {
    //     deleteProducts(product.name) ;
    //   })

    //     it('should be able to view a product', () => { 
    
    //     });

    //     it('should be able to edit a product', () => { 
    
    //     });

    //     it('should be able to delete a product', () => { 
    
    //     });

    
    // });

 });
