# SupaForm Documentation

### Первый запуск
* Скачали и подключили jQuery
* Скачали и подключили SupaShop

Пример: [туть](https://rybakooov.github.io/supaForm/index.html)

Применять следующие атрибуты для 
```
<input type="text>
```
### Атрибуты data-*="..."
* data-type="email" — вставляет  маску почты
* data-type="tel" — вставляет 
* data-required — делает атрибут обязательным

Применять следующие атрибуты для
```
<button></button>
```
### Атрибуты data-type="..."
* "clean" — очищает форму

## Внимание!!!
* Для отправки формы всегда использовать 
```
<button type="submit"></button>
```
* Все элементы формы обязательно должны находиться в 
```
<form></form>
```

Используем  
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