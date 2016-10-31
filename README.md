# Скрывает часть телефона для статистики его просмотра
**Disclaimer:** Module is not complete and not ready for use yet.

Необходимо добавить стили на страницу
```
<link href="/-magic-phone/phone.css" rel="stylesheet">
```

Javascript полкючается автоматически с помощью [infrajs/config](https://github.com/infrajs/config)

У HTML-элементов с телефоном на странице должен быть класс ```magic-phone``` и часть телефона будет скрыта от пользователя.

Для сбора количества кликов по телефону яндекс-метрикой, необходимо в конфигурации указать номер счетчика yaCounter и в метрике должна быть создана цель с индентификатором phone.
В корне проекта или в папке data/ нужно создать файл [.infra.json](https://github.com/infrajs/config) с содержимым
```
{
"magic-phone": {
 "yaCounter":"Указать номер счётчика"
}
```
Для смены дизайна скрытия телефона, необходимо в конфигурации в свойстве design установить одно из значений:
dotted;
background;
blur;
