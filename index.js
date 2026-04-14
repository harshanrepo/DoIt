const arr=[]
function adding(event){
    if(event.key ==='Enter'){
        add()
    }
}

function add(){
    const inputElement=document.querySelector('#todo-list')
    const DateInputElement=document.querySelector('#date')
    const name=inputElement.value
    const due_date=DateInputElement.value
    arr.push({
        name,
        due_date
    })
    inputElement.value=''
    DateInputElement.value=''
    display()
}

function display(){
    let todoListHTML=''
    arr.forEach((todoObject, index) =>{
        const {name, due_date}=todoObject
        let html=`
        <div>→  ${name}</div>
        <div>${due_date}</div>
        <button onclick="arr.splice(${index},1);
        display();" id="delete">
        Delete</button>`
        todoListHTML +=html
    })
    document.querySelector('.lists').innerHTML =todoListHTML
}

