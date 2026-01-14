import "./App.css";
import CatsList from "./CatsInfo/CatsInfo";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import cats from "../cats.json";
import Section from "./Section/Section";
import FormOrder from "./FormOrder/FormOrder";


export default function App() {

  function handleOrder(userName: string) {
    console.log(userName);
    
  }
  return (
    <>
      <Header />
      <main>
        {/* <CatInfo cat={cats[0]}/>
        <CatInfo cat={cats[1]}/> */}
        <Section title="Available cats">
          <CatsList cats={cats.filter((cat) => cat.available)} />
        </Section>
        <Section title="Taken cats">
          <CatsList cats={cats.filter((cat) => !cat.available)} />
        </Section>

        {/* form*/}
        <Section title="Order">
          <FormOrder onSubmit={handleOrder} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
