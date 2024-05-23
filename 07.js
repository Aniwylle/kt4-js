const products = require('./products');

console.log('Отфильтруйте товары по условию, если их количество будет больше 10.')
console.log(Object.values(products).filter(products => products.count > 10));

console.log('Найдите значение элемента массива (товара), чья цена находится в диапазоне от 800 до 900 включительно.')
console.log(Object.values(products).find(products => products.price >= 800 && products.price <= 900));

console.log('Отсортируйте данные товаров по цене (по убыванию)')
console.log(Object.values(products).slice().sort((a, b) => b.price - a.price));

console.log('Посчитайте итоговую стоимость всех товаров в массиве.')
console.log(Object.values(products).reduce((acc, product) => acc + product.price * product.count, 0));

console.log('Преобразуйте массив таким образом, чтобы изменить сво-во marks и получить итоговую сумму оценок. Пример для первой записи: {id: 1, title: ‘велосипед’, price: 45000, count: 3, marks_total: 15} Итоговый результат отсортируйте по marks_total')
function transformProducts(products) {
    return products.map(product => ({
        ...product,
        marks_total: product.marks.reduce((acc, mark) => acc + mark, 0)
    }));
}
console.log(transformProducts(products));

console.log('Итоговый результат:')
console.log(Object.values(products).sort((a, b) => b.marks_total - a.marks_total))


