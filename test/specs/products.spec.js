// Page Objects
import ProductsPage from '../page_objects/products.page';
import ViewProductPage from '../page_objects/view-product.page';
import EditProductPage from '../page_objects/edit-product.page';
import AddProductPage from '../page_objects/add-product.page';

// Test Data
// const products = require('../data/debug-data.json');

// Helper functions
function deleteProducts(productName){

    // Check for a product that's been created by the test data
    while(productsPage.getProductInTable != undefined || productsPage.getProductInTable.length != 0){
  
      productsPage.addProduct.click();  

      actions.clickOnFirstElementInList(productsPage.getProductInTable(product.name));
  
      expect(checks.getUrl()).toContain(viewProductPage.url);
  
      actions.clickOnElement(viewProductPage.deleteButton);
  
      expect(checks.getUrl()).toContain(productsPage.url);
    }
  
    // Check for a product that's been edited by the test data
    while(checks.elementsArePresent(productsPage.getProductInTable(product.editName))){
  
      actions.clickOnFirstElementInList(productsPage.getProductInTable(product.editName));
  
      expect(checks.getUrl()).toContain(viewProductPage.url);
  
      actions.clickOnElement(viewProductPage.deleteButton);
  
      expect(checks.getUrl()).toContain(productsPage.url);
    }
  
  }
  
function createProduct(productName, productDescription, productPrice){
  
    while(!ProductsPage.productsInTable(productName).length == 0){
  
        expect(browser.getUrl()).toContain(ProductsPage.url);
        
        ProductsPage.addProductButton.click();

        expect(browser.getUrl()).toContain(AddProductPage.url);
  
        AddProductPage.productName.addValue(productName);
        AddProductPage.productDescription.addValue(productDescription);
        AddProductPage.productPrice.addValue(productPrice);

        AddProductPage.submitButton.click();
        

        expect(browser.getUrl()).toContain(ViewProductPage.url);

        ViewProductPage.returnToProductsPageButton.click();
        // browser.debug();

        expect(browser.getUrl()).toContain(ProductsPage.url);
  
    }
  
  }


// products.forEach(({ name, description, price, editName, editDescription, editPrice }) => {
    
    describe('CRUD tests for product', () => {

        it('should be able to create a product', () => {
            
            browser.url('');

            createProduct("name", "description", "100");
            
            // CPSU01
            // SETUP: Check whether the `Product` is present in the list, if it's there, delete it.
            // ASSERT: `Product` isn't in list. 
    
            // CP01
            // Navigate to the `Products Page`
            // ASSERT: We're on the `Products Page` of the Website
    
            // CP02
            // Click on the `Add Product` button
            // ASSERT: We're on the `Add Product` page
    
            // CP03
            // Enter a `Name`, `Description` and `Price` for a Product (see `test-data.adoc` for Test Data)
            // `Product` details entered
    
            // CP04
            // Press the `Save` button.
            // ASSERT: The `View` product page opens.
    
            // ASSERT: The product details are correct (`name`, `description`, `price`).
    
            // CP05
            // Press the `Products Page` button.
            // ASSERT: We're returned to the `Products Page`.
    
            // ASSERT: The new `Product` is listed.
    
            // CPTD01
            // TEARDOWN: Delete the `Product` that was created.
            // ASSERT: `Product` is no longer listed.
    
    
        });
    
    });




// })
