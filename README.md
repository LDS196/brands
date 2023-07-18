:seedling: <a href="https://lds196.github.io/brands/" target="_blank">Brands</a>
---
приложение представляет интернет магазин. Пользователи могут сортировать и фильтровать товары, добавлять и удалять их из корзины, и другое.

## Технологии
![React](https://img.shields.io/badge/-React-61daf8?logo=react&logoColor=black)
![REDUX](https://img.shields.io/badge/-Redux-yellow)
![TypeScript](https://img.shields.io/badge/-TypeScript-blue)

![BEM](https://img.shields.io/badge/-BEM-blue)
![HTML5](https://img.shields.io/badge/-HTML5-e34f26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?logo=javaScript&logoColor=black)

![Webpack](https://img.shields.io/badge/-Webpack-99d6f8?logo=webpack&logoColor=black)
![API](https://img.shields.io/badge/-Fake_Api-yellow)

Clone repositories:
```
git clone https://github.com/LDS196/brands.git
```
Install dependencies:
```
yarn install
```
Start project: 
```
yarn start
```
Deploy project:
```
yarn deploy
```
![image](https://github.com/LDS196/brands/assets/105713345/9e9d3564-8b84-4bd3-8d4f-20c7da02a439)

Тестовая задача:
Файлы для задачи: https://app.aaccent.su/js/frontend-test.zip
Необходимо адаптивную страницу со списком товаров, фильтром по брендам. Список товаров находится в файле /assets/products.json, список брендов в файле /assets/brands.json 
Дизайн на свое усмотрение, примерный вид отображены в схемах desktop.png, mobile.png 
Также на странице должна быть иконка корзины, со счетчиком товаров в корзине. По клику на иконку должен совершаться переход на страницу корзины.
Должна быть пагинация, по 6 товаров на страницу
Должна быть возможность отправлять товары в корзину. Счетчик должен обновляться без перезагрузки страницы. Фильтрация товаров должна проходить без перезагрузки.
На странице корзины должен быть список товаров, с ценой, переключателем количества, автоматическим пересчетом итоговый цены, должна быть поля имя, телефон и кнопка «Оформить заказ».
При оформлении заказа должен отправиться POST-запрос на адрес https://app.aaccent.su/js/confirm.php с json-данными о заказе в свободном формате.
Запрос вернет JSON-ответ “{“result”:”ok”}” , по возвращению этих данных должно всплыть модальное окно об успешном оформлении, при нажатии на кнопку «закрыть» корзина должна очищаться и переадресовываться на главную страницу

Веб-приложение необходимо сделать в виде SPA-приложения.
Результат должен быть выгружен на github.com 
Будет плюсом добавление «фишек», а-ля сортировки товаров, окон с быстрым просмотром товаров. 
Можно добавлять дополнительные json-данные, файлы и пр., по усмотрению исполнителя
