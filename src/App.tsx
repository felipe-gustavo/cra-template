import { useState } from "react";

import { AppContainer, AppHeader } from "./App.style";
import { Button } from "./components/atoms/Button";
import { AppDescription } from "./components/molecules/AppDescription";
import { AppLogo } from "./components/molecules/AppLogo";

function App() {
  const [spin, setSpin] = useState(false);

  const handlerToogleLogoSpin = () => {
    setSpin(!spin);
  };

  return (
    <AppContainer>
      <AppHeader>
        <AppLogo spin={!!spin} />
        <AppDescription />
        <Button onClick={handlerToogleLogoSpin} type="primary">
          {spin ? "Static logo" : "Spin logo"}
        </Button>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
