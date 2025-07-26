import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from "./context/UserContext";

function App() {
  const users = [
    { name: "Alice", age: "25", bio: "Loves hiking and photography" },
    { name: "Bob", age: "30", bio: "Enjoys street food and architecture" }
  ];

  return (
    <UserContext.Provider value={users}>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', maxWidth: '800px' }}>
        <Header />
        <MainContent />
        <UserProfile />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
