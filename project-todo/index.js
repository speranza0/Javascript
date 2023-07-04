// 할 일 배열
let todoList = [];

// 등록 버튼 클릭 동작
const submit = document.getElementById("submit");

submit.addEventListener('click', () => {
  let input = document.getElementById("input");
  if(input.value) {
    let todo = {
      id: 0,
      content: input.value ,
      status: "TODO",
    }
    todoList.push(todo);
    let indexNum = todoList.findIndex((arr) => arr.content == todo.content);
    todoList[indexNum].id = indexNum;
  } else {
    alert('할 일을 입력해주세요');
  }
  input.value = '';

  // 리스트 만들기
  let ul = document.getElementById("todoList");

  for(let i = 0; i <todoList.length; i++) {
    ul.replaceChildren();
  }
  
  for(let i = 0; i < todoList.length; i++) {
    ul.innerHTML += `<ul id="todo${todoList[i].id}"><input type="checkbox">${todoList[i].content}<button class="del">삭제</butto></ul>`;
  }

  // 리스트 삭제
let delBtn = document.getElementsByClassName('del');
console.log(delBtn);

for(let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener('click', (event) => {
    let id = event.target.parentNode.id.substr(4);
  
    todoList = todoList.filter((todo) => todo.id !== parseInt(id));
    //
    for(let i = 0; i <= todoList.length; i++) {
      ul.replaceChildren();
    }

    for(let i = 0; i < todoList.length; i++) {
      ul.innerHTML += `<ul id="todo${todoList[i].id}"><input type="checkbox">${todoList[i].content}<button class="del">삭제</butto></ul>`;
    }
})
};
});