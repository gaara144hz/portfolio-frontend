import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;