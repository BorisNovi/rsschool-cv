# rsschool-cv

# Novikov Boris

## Junior Frontend Developer

![some photo](img/photo_cv_BorisNovi.png)

___

### Contacts
* **Phone:** +995 557 614 460 (Georgia)
* **Email:** borisnovikov4815@gmail.com
* **Discord:** Boris (@BorisNovi)
#### About me
Experience as a lead engineer for satellite monitoring systems and precision agriculture systems. Studying JS/HTML/CSS, doing small projects for self-development. I aspire to become a frontend developer. I want to not be tied to a place like in previous engineering positions and do really interesting work.

___

### Skills
* HTML5, CSS3
* JavaScript Basics
* Git, GitHub
* VS Code, Webstorm
* Adobe Photoshop, Adobe Lightroom

___

### Code samples

* Code snippet for the Kitsu API, which requests data from the server.

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


* Codewars "Does my number look big in this?" (Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.)

```javascript
function narcissistic(value) {
    // Code me to return true or false
    expo = [];
    numOfExpo = (value + "").length;
    (value + "").split('').forEach((item) => expo.push(item ** numOfExpo));
    expo = expo.reduce((sum, current) => sum + current);

    return value == expo
};
```

___

### Experience
**Junior Dev**
* Work with VK API https://github.com/BorisNovi/littleTasks/tree/master/APIToLearn
* Work with Kitsu API (Not pushed, only on local machine)
* Studying project for LearnJS https://github.com/BorisNovi/jsbasic-20221028_borisnovikov4815

___

### Education 
* Rostov Autotransport College 
* Rostov Railway Transport University
* Javascript Course by learn.javascript.ru "JavaScript/DOM/Interfaces" [Certificate:](https://learn.javascript.ru/courses/jsbasic-20221028/borisnovikov4815/en/certificate.jpg)
* RS Schools Course «JavaScript/Front-end. Stage 1» (in progress)

___

### Languages
* Russian (*Native*)
* English (*Intermediate*)
* Italian (*Elementary*)