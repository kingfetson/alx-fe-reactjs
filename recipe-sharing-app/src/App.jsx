import AddRecipeForm from "./store/components/AddRecipeForm";
import RecipeList from "./store/components/RecipeList";



function App() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Recipe Sharing App 🍲</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
