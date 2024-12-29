import selectors from '../../fixtures/selectors/productPage.json';

class ProductPage{
    validateProductList(){
        cy.get(selectors.productList).should('exist');
    }
    addProductToCart(productIndex){
        cy.get(selectors.addToCartButtons).eq(productIndex).click();
    }
    validateCartBadge(quantity){
        cy.get(selectors.cartBadge).should('have.text', quantity.toString());
    }
    sortProductsBy(option) {
        cy.get(selectors.sortDropdown).select(option);
    }

    validateProductSorting(prices) {
        cy.get(selectors.productPrices).then(elements => {
            const actualPrices = [...elements].map(el => parseFloat(el.innerText.replace('$', '')));
            expect(actualPrices).to.deep.equal(prices);
        });
    }
}
export default new ProductPage;