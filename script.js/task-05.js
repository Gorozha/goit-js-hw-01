function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Доброе утро";
    } else if (time < 20) {
        greeting = "Добрый день";
    } else {
        greeting = "Добрый вечер";
    }
document.getElementById("demo").innerHTML = greeting;
}