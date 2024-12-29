import LoginPage from "../support/pages/LoginPage";
import ProductPage from "../support/pages/ProductPage";

describe('Testes no Produto', () =>{
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillUsername('standard_user')
        LoginPage.fillPassword('secret_sauce')
        LoginPage.submit()
    })

    it('Deve adicionar um produto ao carrinho', () => {
        ProductPage.validateProductList();
    })

    it('Deve adicionar um produto ao carrinho e validar a quantidade', () => {
        ProductPage.addProductToCart(0);
        ProductPage.validateCartBadge(1);
    });

    it('Deve filtrar os preços dos produtos (menor pro maior)', () => {
        ProductPage.sortProductsBy('lohi');
        ProductPage.validateProductSorting([7.99, 9.99, 15.99, 15.99, 29.99, 49.99]);
    });
})