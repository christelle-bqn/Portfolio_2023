import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Christelle Boquillion",
    location: "Paris, FR",
    tagline: "développeuse interactif front-end",
    email: "christelleboquilliondev@gmail.com",
    availability: "Septembre 2023",
    brand: `Actuellement en poste chez 66 ORIGIN, studio de design d'expériences innovantes, en 3ème année Bachelor Développeur Interactif aux GOBELINS, je compte poursuivre en Mastère Design et Management de l'innovation interactive (option Lead Technique).\n -> Je cherche à rejoindre une entreprise dans la production et communication digitale/créative 3D afin de me spécialiser dans ce domaine.`,
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
