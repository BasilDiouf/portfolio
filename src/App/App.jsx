import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import ProfilSection from "../components/ProfilSection/ProfilSection";
import Title from "../components/Title/Title";
import Skills from "../components/Skills/Skills";
import Card from "../components/Card/Card";

const App = () => {
  return (
    <div class=" text-amber-50">
      <Title />
      <ProfilSection />
      <Skills />
      <Card />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
