# rsschool-cv
## h2_test
## h3_test
*cursive_test*
**bold_test**
_cursive and **bold**_

```javascript
function response() {
    let currentPage = 0;

    function fetchPage(numOnPage = 1, page = 0) {
        fetch('https://kitsu.io/api/edge/anime?page[limit]=' + numOnPage + '&page[offset]=' + page)
            .then(response => response.json()) // Декодируем ответ в формате json
            .then(data => show(data)); // ВЫВОД - Выводим ответ в функцию show
    }

    document.querySelector('.lastButton').addEventListener('click', () => {
        fetchPage(1, currentPage -= 1); // Перелистываем на пред страницу
    });
    document.querySelector('.nextButton').addEventListener('click', () => {
        fetchPage(1, currentPage += 1); // Перелистываем на след страницу
    });
    document.querySelector('.rndButton').addEventListener('click', () => {
        fetchPage(1, currentPage = Math.floor(Math.random() * 18742)); // Открываем рандомную страницу
    });

    fetchPage(1, currentPage); // Загружаем стартовую страницу
}
response();
```