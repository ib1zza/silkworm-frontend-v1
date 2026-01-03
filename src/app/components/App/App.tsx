import "./App.scss";
import AppRouter from "@/app/config/AppRouter";
import { Header, Footer } from "@/shared/ui";

function App() {
  return (
    <div className="test">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
