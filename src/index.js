document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    workToDo(e.target)
  })
});

function workToDo(todo) {
 
  let li = document.createElement('li')
  let btn = document.createElement('button')
  
  li.innerHTML = todo
  
  document.querySelector('ul').appendChild(li);

  document.querySelector('li').appendChild(btn);

  document.querySelector('ul').appendChild(li);

  document.querySelector('li').remove

}

function handleDelete(e){
  e.target.parentNode.remove()
}