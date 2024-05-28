import React from "react";
import Header from "./components/BODY/Header";
import Items from "./components/BODY/Items";
import Section from "./components/BODY/section";
import Footer from "./components/BODY/footer";
import ProviderForm from "./components/Functions/hooks/useForm";
import Form from "./components/Form/Form";
import ContextForm from "./components/Context/TheFormContext";
import SuccessFull from "./components/Form/SuccessFull";
function App() {
  return (
<ContextForm>
    <ProviderForm>
      <SuccessFull />
      <Form/>
  <Header />
  <Section />
  <Items />
  <Footer />
    </ProviderForm>
    </ContextForm>

  );
}

export default App;
