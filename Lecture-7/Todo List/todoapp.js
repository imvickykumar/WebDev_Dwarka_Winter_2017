/**
 * Created by aayusharora on 12/31/17.
 */

window.onload = function() {
    let inp = document.getElementById('inp');
    let result = document.getElementById('result');
    let btn = document.getElementById('btn');

    let todoList = [];
    btn.onclick = function() {
        let todo = inp.value;
        todoList.push(todo);
        display();
    };

    function display() {
        let finalList = "";
        for(let i=0; i<todoList.length; i++) {

            finalList += `<li>${todoList[i]}</li>`
        }
        result.innerHTML = "";
        result.innerHTML = finalList;

    }
}