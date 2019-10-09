# SupaForm Documentation

### Подключаем
* Скачали и подключили jQuery

Если у вас *установлен inputmask.js*
* Скачали и подключили этот [SupaShop](https://rybakooov.github.io/supaForm/dist/)

Если *не установлен*
* Скачали и подключили этот [SupaShop](https://rybakooov.github.io/supaForm/distWithInputmask/)

### Используем
Пример: [туть](https://rybakooov.github.io/supaForm/index.html)

(использовать в ```<input type="text">``` — **in input** )
(использовать в ```<button></button>``` — **in button** )
###### data-атрибуты
* data-type="email" — вставляет  маску почты **in input**
* data-type="tel" — вставляет маску для телефона **in input**
* data-required — делает атрибут обязательным **in input**
* data-type="clean" — атрибут проставляется в **in button**
* data-regexp — валидация почты по паттерну, использовать **in input** вместе с **data-type="email"**

### Внимание!!!
* Для отправки формы всегда использовать 
```<button type="submit"></button>```
* Все элементы формы обязательно должны находиться в 
```<form></form>```

### Вызываем функцию ```raValidation```
Валидация, в параметр передаем форму в виде jQuery-объекта ```$(this).closest('form'))```
```
<script>
  $('button[type="submit"]').click(function(e){
    e.preventDefault();
    if(!raValidation($(this).closest('form'))){   //если не проходит валидация
      console.log('Pizda forme');
      ifError($(this).closest('form'));           // функция ifError
    } else {
      console.log('zaebisssss!!!')
      ifSuccess($(this).closest('form'));         //функция ifSuccess
    }
  })
</script>
```
Функции **ifSuccess** и **ifError** можно вставить в функции success и error в отправке формы через ajax.js

-------------------------------------------------

Библиотека сделана на основе [inputmask.js](https://github.com/RobinHerbots/Inputmask), поэтому также можно использовать функции этой библиотеки. Данная библиотека будет расширяться
