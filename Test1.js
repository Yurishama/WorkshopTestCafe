import { Selector } from 'testcafe';

fixture ('Pagina de inicio')
    .page ('http://automationpractice.com');

test('Primera prueba', async t => {
    await t
    .typeText('#search_query_top','Dress', {speed: 0.1})
    .click('#searchbox > button', {speed: 0.1});
});

test('Busqueda negativa', async t=> {
    await t
    .typeText('#search_query_top','Camiseta', {speed: 0.1})
    .click('#searchbox > button', {speed: 0.1});

    await t
    .wait(300)
    .expect('#center_column > h1').exist

});
