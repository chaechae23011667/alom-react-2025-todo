import { useState, useEffect } from "react";

function Example() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedToDos = localStorage.getItem("my-todos");
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("my-todos", JSON.stringify(toDos));
    }
  }, [toDos, isInitialized]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const onDelete = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, i) => i !== index)
    );
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>My To Dos ({toDos.length})</h1>

      <form
        onSubmit={onSubmit}
        style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}
      >
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            padding: "10px 15px",
            fontWeight: "bold",
            backgroundColor: "#00C851",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add To Do
        </button>
      </form>

      <hr />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {toDos.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f8f9fa",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
            }}
          >
            {item}
            <button
              onClick={() => onDelete(index)}
              style={{
                background: "none",
                border: "none",
                color: "red",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example;
