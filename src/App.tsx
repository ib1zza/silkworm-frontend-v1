import "./App.css";
import AppRouter from "@/app/config/AppRouter";
import { Header } from "@/shared/ui";

function App() {
  return (
    <div className="test">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
