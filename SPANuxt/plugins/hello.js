export default (context, inject) => {
    function hello() {
        return console.log(`Hello, Plugin`)
    }

    inject('hello', hello)

    context.$hello = hello //Не обязательно
}