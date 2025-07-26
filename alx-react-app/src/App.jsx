import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <MainContent />

      {/* You can render one or more UserProfile instances */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <Footer />
    </div>
  );
}

export default App;
