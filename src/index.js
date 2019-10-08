document.addEventListener("DOMContentLoaded", function() {
  let listOfTasksUL = document.querySelector("#tasks")
  let createTaskForm = document.querySelector("#create-task-form")
  
  createTaskForm.addEventListener("submit", handleForm)
  listOfTasksUL.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
      e.target.remove()
    }
  })
  
  
  let selectTag = document.createElement("select")
  document.querySelector('form').append(selectTag)
  
  for (let i = 0; i < 3; i++){
    let optionTag = document.createElement("option")
    optionTag.className = "color"
    document.querySelector('select').append(optionTag)
  }
  
  let red = document.querySelectorAll(".color")[0]
  red.innerText = "High Priority"
  let yellow = document.querySelectorAll(".color")[1]
  yellow.innerText = "Medium Priority"
  let green = document.querySelectorAll(".color")[2]
  green.innerText = "Low Priority"
  
  function handleForm(e){
    e.preventDefault()
    let form = e.target
    let newTask = form["new-task-description"].value
    
    let newTaskLi = document.createElement("li")
    newTaskLi.innerText = newTask
    selectTag.addEventListener("change", handleChange)
  
    function handleChange(e){
      e.preventDefault()
      if (e.target.value === "High Priority"){
        newTaskLi.style.color = "red"
      }
      else if (e.target.value === "Medium Priority"){
        newTaskLi.style.color = "yellow"
      }
      else if (e.target.value === "Low Priority"){
        newTaskLi.style.color = "green"
      }
    }
    listOfTasksUL.append(newTaskLi)
  }
});
