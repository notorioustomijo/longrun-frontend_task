import { Routes, Route } from 'react-router-dom';
import QuizIntroPage from './pages/QuizIntroPage';

function App() {

  return (
    <main
      className="
        flex
        justify-center
        items-center
        w-full
        h-screen
        p-10
        bg-[rgba(51,65,94,1)]
        [background-image:linear-gradient(to_right,rgba(7,7,16,1)_0%,rgba(7,7,16,0.7)_50%,rgba(7,7,16,1)_100%)]
      "
    >
      <Routes>
        <Route path="/" element={<QuizIntroPage />} />
      </Routes>
    </main>
  )
}

export default App
