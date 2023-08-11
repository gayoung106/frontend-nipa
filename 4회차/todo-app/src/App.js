import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Container,
  Form,
  ListItem,
  SubmitInput,
  TextInput,
  TodoDelete,
  TodoText,
  UnorderdList,
  Title,
  CheckInput,
} from "./styledComponents";

const App = () => {
  const [todo, setTodo] = useState([]);

  const [todoId, setTodoId] = useState(0);

  /*
  할 일이 단순히 문자열이면 안 되는 이유.
  - 삭제나 수정을 할 때 구분할 방법이 없음
  => 따라서 하나의 할일은 하나의 객체{}로 관리하는 것이 좋음
  */

  // 1. Creat
  //입력값을 todoText로 받아와서, todoText를 이용해 객체를 생성해서 저장
  const handleSubmit = (todoText) => {
    setTodo([
      ...todo,
      {
        todoText: todoText,
        todoId: todoId,
        todoDone: false,
      },
    ]);
    //할 일 항목에 고유한 식별자를 지정하기 위해 todoId를 업데이트
    setTodoId(todoId + 1);
  };

  const handleToggle = (todoId) => {
    setTodo(
      todo.map((item, index) => {
        return item.todoId === todoId
          ? { ...item, todoDone: !item.todoDone }
          : item;
      })
    );
  };
  //filter는 콜백함수가 true를 반환하는 요소만 남겨진 배열을 반환
  const handleDelete = (todoId) => {
    setTodo(
      todo.filter((item) => {
        return item.todoId !== todoId;
      })
    );
  };

  // 컴포넌트가 만들어지는 순간마다 로컬스토리지 읽어들이기
  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"));

    //defaultTodo가 존재하지 않을때 이 함수는 의미가 없기때문에 강제종료
    if (!defaultTodo) return;
    //있으면?
    setTodo(defaultTodo);

    if (defaultTodo.length !== 0) {
      //기존에 내용이 몇개가 있다면
      setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1);
    }
  }, []);

  // todo가 갱신될 때마다 로컬스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <Container>
      <Title>Todos</Title>
      <Form
        onSubmit={(e) => {
          // 추가 버튼눌러도 새로고침 안 됨
          e.preventDefault();
          //handleSubmit 인수로 e.tartget.todo.value로 담아서 위 함수에서 받아온게 handleSubmit(todoText)이게 되는거
          handleSubmit(e.target.todo.value);
          // input(name을 todo로 정함) 서브밋 누르면 input창 지워짐
          e.target.todo.value = "";
        }}
      >
        <TextInput
          type="text"
          placeholder="Add a todo"
          name="todo"
          autocomplete="off"
        />
        <SubmitInput type="submit" value="+" />
      </Form>
      {/* 2. Read */}
      <UnorderdList>
        {todo.map((item, index) => {
          return (
            <ListItem key={index}>
              <CheckInput
                type="checkbox"
                onClick={() => {
                  handleToggle(item.todoId);
                }}
              />
              <TodoText
                onClick={() => {
                  handleToggle(item.todoId);
                }}
                className={item.todoDone ? "done" : "yet"}
              >
                {item.todoText}
              </TodoText>

              <TodoDelete
                onClick={() => {
                  handleDelete(item.todoId);
                }}
              >
                del
              </TodoDelete>
            </ListItem>
          );
        })}
      </UnorderdList>
    </Container>
  );
};

export default App;
