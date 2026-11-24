import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import PackagesPage from "./pages/PackagesPage";
import EventsPage from "./pages/EventsPage";
import LocationPage from "./pages/LocationPage";
import ContactPage from "./pages/ContactPage";
import BrochuresPage from "./pages/BrochuresPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="amenities" element={<AmenitiesPage />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="brochures" element={<BrochuresPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
