import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//과제1-2: 이곳에 assignments 폴더 내 작성한 코드를 불러오는 코드를 작성해주세요.
import Example from "./assignments/example";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
