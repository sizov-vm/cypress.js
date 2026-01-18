describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввожу верный логин
        cy.get('#pass').type('qa_one_love1'); //Ввожу верный пароль
        cy.get('#loginButton').click(); //Кликаю по кнопке"Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Вижу что "Авторизация прошла успешно"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что видно крестик
    })
      it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#forgotEmailButton').click(); //Кликаю по кнопке "Забыли пароль"
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Вижу окно "Восстановите пароль"
        cy.get('#mailForgot').type('sizov.vm1994@mail.ru'); //Ввожу любую почту
        cy.get('#restoreEmailButton').click(); //Кликаю по кнопке "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Вижу окно "Успешно отправили пароль на e-mail"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что видно крестик
    })
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввожу верный логин
        cy.get('#pass').type('helloworld'); //Ввожу НЕверный пароль
        cy.get('#loginButton').click(); //Кликаю по кнопке"Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет') //Вижу что "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что видно крестик
    })
     it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('sizov.vm1994@mail.ru'); //Ввожу НЕверный логин
        cy.get('#pass').type('qa_one_love1'); //Ввожу верный пароль
        cy.get('#loginButton').click(); //Кликаю по кнопке"Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет') //Вижу что "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что видно крестик
    })
     it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввожу логин без "@"
        cy.get('#pass').type('qa_one_love1'); //Ввожу верный пароль
        cy.get('#loginButton').click(); //Кликаю по кнопке"Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации') //Вижу что "Нужно исправить проблему валидации"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что видно крестик
    })
      it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввожу верный логин
        cy.get('#pass').type('qa_one_love1'); //Ввожу верный пароль
        cy.get('#loginButton').click(); //Кликаю по кнопке"Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Вижу что "Авторизация прошла успешно" (По факту вижу, что "Такого логина или пароля нет" из-за неверно введённого логина)
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что видно крестик
    })
})


// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
