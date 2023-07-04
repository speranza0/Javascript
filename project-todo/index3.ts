interface TodoItemProps {
  index: number;
  content: string;
  success: boolean;
}

let index:number = 1;


let todoList: TodoItemProps[] = [];

// Dom 선택자
const inputDom = document.getElementById("input") as HTMLInputElement | null;
const submitDom = document.getElementById("submit") as HTMLButtonElement | null;
const todoListDom = document.getElementById("todoList") as HTMLUListElement | null;

// TodoList의 상태값을 변경하는 함수
// 등록 상태 함수
const addTodo = (todoItem: TodoItemProps) => {
  todoList.push(todoItem);
  index++;
}

// 체크 상태 함수
const checkTodo = () => {

}

// 삭제 상태 함수
const removeTodo = (index:number) => {
  todoList = todoList.filter(todo=>todo.index !== index);
}

// 할일 Dom을 생성하는 함수
// html element li로 리턴
const createTodoDom = (todoItem: TodoItemProps): HTMLLIElement => {

  const {index, content} = todoItem;

  const button = document.createElement("button");
  button.setAttribute("class", "del");
  button.innerHTML = "삭제";

  button.addEventListener('click', (event) => {
    // 배열을 동기화해준다.
    removeTodo(index);
    // 이 돔을 삭제한다.
    const btnDom = event.target as HTMLButtonElement
    const parentLiDom = btnDom.closest(`li`) as HTMLLIElement | null    
    parentLiDom?.remove();
  })

  const li = document.createElement("li");
  li.setAttribute("id", `item${index}`);
  li.innerHTML = `<input type="checkbox">${content}`;
  li.append(button);

  return li;
}

// 상태와 화면을 동기화해주는 함수
const renderTodo = () => {

  // 먼저 기존에 todoList를 비워준다.
  todoListDom?.replaceChildren();

  // 조건에 맞게 처리
  for(let todoItem of todoList) {
    const li = createTodoDom(todoItem);
    todoListDom?.append(li);
  }
  
}

// 등록
submitDom?.addEventListener('click', () => {
  const content = inputDom?.value;


  // 벨리데이션
  if(!content) {
    alert("할일을 입력해주세요.");
    return;
  }
  
  const todoItem = {
    index,
    content,
    success: false,
  }

  addTodo(todoItem); 
  renderTodo();

  // 인풋창 초기화
  inputDom.value = '';

});