// Объект или комплексный тип данных
let person = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(person.name); // Получение значения первого свойства
console.log(person["name"]); // Второй способ получения значения свойства

let arr = ['plum.png', 'orange.png', 'apple.bmp'];
console.log(arr[0]);


//GIT 
//git bash
// echo >> README.md

//установка имени пользователя и пароля
// git config --local user.name "name"
// git config --local user.email example@gmail.com

// Настройка состояний
// 1 состояние -- файл находится в  проекте и не связан с git
// 2 состояние -- git следит за изменениями файла
// 3 состояние -- git отслеживает изменения и если нужно то можно вернуться

// git add -A -- перевод файла с 1 во 2 состояние
// git status -- посмотреть статус репозитория
// git commit -a -m "Мои первый коммит" --> перевод с 2 в 3 состояние(-a add, -m message  )
// git log -- отследить все изменения
// shift + insert
// git комманда --help --> выведет все информацию о команде

// git remote add test https://github.com/yvictorv/test.git --> remote -- удаленный
//                                                              test -- название репозитория
// git push -u test master --> push -- перемещения файлов с локального диска на удаленный диск 
//                               -u -- ключ сохраняет куда переместить файлы
//                             test -- названия репозитория
//                           master -- главная ветка
























