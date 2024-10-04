import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
const TodoList = ({
  content,
  editBtn = false,
  dltBtn = false,
  id,
  editCb,
  dltCb,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingVal, setEditingVal] = useState(content);
  const domRef = useRef(null);

  const editHandler = () => {
    setIsEditing((isEdit) => !isEdit);
    editCb(id, editingVal);
  };
  const deleteHandler = () => {
    dltCb(id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (domRef.current && !domRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={domRef} className="todo-list">
      <li>
        {isEditing ? (
          <input
            onChange={(e) => setEditingVal(e.target.value)}
            value={editingVal}
          />
        ) : (
          editingVal
        )}
      </li>
      <div>
        {editBtn && (
          <button onClick={editHandler}>{isEditing ? "save" : "edit"}</button>
        )}
        {dltBtn && <button onClick={deleteHandler}>delete</button>}
      </div>
    </div>
  );
};
export const ToDo = ({ todos = [] }) => {
  const [todosList, setTodosList] = useState(todos);
  const [inputTxt, setInputTxt] = useState("");

  const addToddo = () => {
    setTodosList([{ id: Date.now(), text: inputTxt }, ...todosList]);
    setInputTxt("");
  };
  const editHandler = useCallback(
    (targetId, editText) => {
      const newState = todosList.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            text: editText,
          };
        } else return todo;
      });
      setTodosList(newState);
    },
    [todosList]
  );
  const deleteHandler = useCallback(
    (targetId) => {
      setTodosList(todosList.filter((todo) => todo.id !== targetId));
    },
    [todosList]
  );

  return (
    <div className="todos-cont">
      <div className="input-cont">
        <input
          value={inputTxt}
          onChange={(e) => setInputTxt(e.target.value)}
          type="text"
        />
        <button type="button" onClick={addToddo}>
          Add
        </button>
      </div>
      <ul className="todos">
        {todosList.map((todo) => (
          <TodoList
            editCb={editHandler}
            dltCb={deleteHandler}
            editBtn="true"
            dltBtn="true"
            id={todo.id}
            key={todo.id}
            content={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
