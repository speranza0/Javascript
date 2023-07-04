/**
 * 목록
 * 등록된 할일 목록을 화면에 표시한다.
 * 
 * 등록
 * 내용을 입력하고 등록 버튼을 누르면 목록의 가장 마지막에 추가된다.
 * 
 * 삭제
 * 해당하는 할일을 삭제한다.
 * 
 */
// 상태값 변수
let index = 1;
let todoList = [];
let search = {
  query: '',
  condi: 'all',
}
/*
{
  index: number;
  content: string;
  success: boolean;
}
*/

// Dom 선택자
const inputDom = document.getElementById("input");
const submitDom = document.getElementById("submit");
const todoListDom = document.getElementById("todoList");
const searchDom = document.getElementById("search");
const searchSubmitDom = document.getElementById("searchBtn");
const condiSelectDom = document.getElementById("selectBox");

// search의 상태값을 변경하는 함수
const clearSearch = () => {
  search = {
    query: '',
    condi: 'all',
  }
}

const renderSearch = () => {
  searchDom.value = search.query;
  condiSelectDom.value= search.condi;
}

// TodoList의 상태값을 변경하는 함수
// 등록 상태 함수
const addTodo = (todoItem) => {
  todoList = [...todoList, todoItem];
  index++;
}

// 체크 상태 함수
const checkTodo = (index) => {
  todoList = todoList.map(todoItem => {

    if(todoItem.index !== index) {
      return todoItem;
    }
    return {
      ...todoItem,
      success: !todoItem.success
    }
  });
}

// 삭제 상태 함수
const removeTodo = (index) => {
  todoList = todoList.filter(todo=>todo.index !== index);
}

// 할일 Dom을 생성하는 함수
// html element li로 리턴
const createTodoDom = (todoItem) => {

  const {index, content, success} = todoItem;

  const button = document.createElement("button");
  button.setAttribute("class", "del");
  button.innerHTML = "삭제";

  button.addEventListener('click', () => {
    // 배열을 동기화해준다.
    removeTodo(index);
    renderTodo();
  })

  // 할일 체크 처리
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = success;
  checkBox.setAttribute("id", `check${index}`);

  checkBox.addEventListener('click', () => {
    checkTodo(index);
    renderTodo();
  })

  const li = document.createElement("li");
  li.setAttribute("id", `item${index}`);
  if(success) {
    li.style.textDecoration = 'line-through';
  }
  li.innerHTML = content;
  li.prepend(checkBox);
  li.append(button);

  return li;
}

// 상태와 화면을 동기화해주는 함수
const renderTodo = () => {

  // 먼저 기존에 todoList를 비워준다.
  todoListDom.replaceChildren();

  // 조건에 맞게 처리
  const filterTodoList = todoList.filter(todoItem => {

    let isContain = true;

    if(!todoItem.content.includes(search.query)){
      isContain = false;
    }

    if(search.condi === 'todo' && todoItem.success) {
      isContain = false;
    }

    if(search.condi === 'success' && !todoItem.success) {
      isContain = false;
    }

    return isContain;
  });
  
  // todoList display 변경
  // if(todoList.length != 0) {
  //   document.getElementById('list-box').style.display = 'block';
  // }

  // 화면에 렌더링
  for(let todoItem of filterTodoList) {
    const li = createTodoDom(todoItem);
    todoListDom.append(li);
  }

}

// 등록
submitDom.addEventListener('click', () => {
  const content = inputDom.value;

  // 벨리데이션
  if(!content) {
    alert("할일을 입력해주세요.");
    return;
  }

  // 초기화
  inputDom.value = '';
  clearSearch();
  renderSearch();

  const todoItem = {
    index,
    content,
    success: false,
  }

  addTodo(todoItem); 
  renderTodo();

});

condiSelectDom.addEventListener('change', (event)=> {
  const condi = event.target.value;
  search = {
    ...search,
    condi,
  }
  renderTodo();
})

// 검색
searchSubmitDom.addEventListener('click', () => {
  const query = searchDom.value;
  search = {
    ...search,
    query,
  }
  renderTodo();
});