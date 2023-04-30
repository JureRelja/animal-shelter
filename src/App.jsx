import "./App.css";
import UserStatusProvider from "./store/UserStatusProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./pages/RootNavigation";
import HomePage from "./pages/HomePage";
import AnimalsPage from "./pages/AnimalsPage";
import NewAnimalPage from "./pages/NewAnimalPage";
import DonationsPage from "./pages/DonationsPage";
import NewsPage from "./pages/NewsPage";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigation />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "animals", element: <AnimalsPage /> },
      { path: "animals/new", element: <NewAnimalPage /> },
      { path: "donations", element: <DonationsPage /> },
      { path: "news", element: <NewsPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <UserStatusProvider>
        <RouterProvider router={BrowserRouter} />
      </UserStatusProvider>
    </div>
  );
}

export default App;
