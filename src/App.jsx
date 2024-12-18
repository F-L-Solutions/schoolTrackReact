import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SubstitutesPage from "./pages/SubstitutesPage";
import AttendancePage from "./pages/AttendancePage";
import ReservationPage from "./pages/ReservationPage";
import MyAccountPage from "./pages/MyAccountPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import SelectKidLayout from "./layouts/SelectKidLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/muj-ucet" element={<MyAccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/" element={<SelectKidLayout />}>
          <Route path="nahrady" element={<SubstitutesPage />} />
          <Route path="dochazka" element={<AttendancePage />} />
          <Route path="hlidane-lekce" element={<ReservationPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
