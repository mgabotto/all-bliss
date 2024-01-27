import "bulma/css/bulma.css";
import Navbar from "./Components/Navbar";
import Mision from "./Components/Mision";
import Equipo from "./Components/Equipo";
import Contact from "./Components/Contact";
import Portada from "./Components/Portada";
import BlogSection from "./Components/Blog/blogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen scroll-smooth">
      <div className="w-screen">
        <Navbar />
        <Portada />
        <Mision />
      </div>
      <Equipo />
      {/* <BlogSection />  */}
      <Contact />
    </main>
  );
}
