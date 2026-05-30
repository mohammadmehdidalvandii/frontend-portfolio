import { QueryProvider } from "@providers/QueryProvider";
import { ToasterProvider } from "@providers/ToasterProvider";
import { Suspense } from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <ToasterProvider/>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  );
}

export default App;
