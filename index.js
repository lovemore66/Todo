let form = document.querySelector('#search');
let input = document.querySelector('#input-value')
let ulList = document.querySelector('.todos');
let testdiv = document.querySelector('.testdiv');
let lists = document.querySelector('li');
let Html = "";
const todos = JSON.parse(localStorage.getItem('todos'));


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addTodo();
    getTodos()
})

function addTodo(mytodo){
    let inputValue = input.value;
    if(mytodo) {
        inputValue = mytodo.text;
    }

    if(inputValue) {
        const listEl = document.createElement('li'); 
        if(mytodo && mytodo.completed){
            listEl.classList.add('completed')
        }

        listEl.innerText = inputValue;
        ulList.appendChild(listEl)
        console.log(listEl.innerText)
        updateTodos()
        //input.value = '';
        
        //MARK AS COMPLETED
        listEl.addEventListener('click', () => {
        listEl.classList.toggle('completed');
        updateTodos()
        })
       
        //REMOVED
        listEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            listEl.remove();
            })
            updateTodos()
    }

}


function getTodos(){
    const storedtodos = localStorage.getItem('todos')
    let parsed = JSON.parse(storedtodos)
    parsed.forEach((todoTask) => {

        Html += `
        <p>${todoTask.Text}</p>
        `
         testdiv.innerHTML = Html
        console.log(todoTask)
    })
    //console.log(parsed)
}

function updateTodos(){
    todoLists = document.querySelectorAll('li');
    savedTodos = [];

    todoLists.forEach(todoEl => {
        savedTodos.push({
            Text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem("todos", JSON.stringify(savedTodos));

}


//MENU
let menu = document.querySelector(".menu");
document.querySelector('#btn').addEventListener("click", () =>{
menu.classList.toggle("menu")
})

// function getValues(e) {
//     e.preventDefault();
//     //console.log(e)
//     if (e.code == "Enter") {
//         let value_input = e.target.value;
//         console.log(value_input);
//         let listCreated = document.createElement('li');
//         listCreated.textContent = value_input;
//         console.log(listCreated);
//         ulList.appendChild(listCreated)
//             listCreated.classList.add('completed');


//         listCreated.addEventListener('click', function () {
//             listCreated.classList.toggle('completed');
//             console.log("listclicked")
//         })
//     }
// }




// document.getElementById("input-value").addEventListener("keydown", function(e){
//     e.preventDefault()
//     if (e.code == "Enter") {
//         let value_input = e.target.value;
//         console.log(value_input);
//         console.log(value_input);
//         let listCreated = document.createElement('li');
//         listCreated.textContent = value_input;
//         console.log(listCreated);
//         ulList.appendChild(listCreated)
//             listCreated.classList.add('completed');


//         listCreated.addEventListener('click', function () {
//             listCreated.classList.toggle('completed');
//             console.log("listclicked")
//         })
//     }
//   });