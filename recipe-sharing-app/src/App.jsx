import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import searchBar from './components/searchBar'
function App() {
  return (
    <Router>
      <div style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
        <header style={{ marginBottom: '20px' }}>
          <h1>🍲 Recipe Sharing App</h1>
          <nav style={{ marginTop: '10px' }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
