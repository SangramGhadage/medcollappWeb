import logo from './logo.svg';
import NavBar from './component/navbar/navbar';
import Country from './component/countrySection';
import Listing from './component/listingSection';
import Numbers from './component/numberSection';
import Header from './component/header';
import Footer from './component/footer/footer'
import Services from './component/services/services'
import Steps from './component/steps/steps';
import Blog from './component/blogs/blogs';

function App() {
  return (
    <>
      <NavBar />
      <Header/>
      <Services/>
      <Steps/>
      <Country />
      <Listing/>
      <Numbers/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
