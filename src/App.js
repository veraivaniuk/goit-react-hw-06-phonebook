import "./App.css";
import Container from "./components/Container/";
import Section from "./components/Section";
import SubmitForm from "./components/SubmitForm";
import List from "./components/List";
import FilterContacts from "./components/FilterContacts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Container>
        <Section title="Phonebook">
          <SubmitForm />
        </Section>
        <Section title="Contacts">
          <FilterContacts />
          <List />
        </Section>
      </Container>
    </>
  );
}
