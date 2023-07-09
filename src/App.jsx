import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  )
}

export default App
