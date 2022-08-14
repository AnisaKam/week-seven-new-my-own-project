import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponents';




function App() {

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState ('avacado');

  useEffect(() => {
    getRecipes()
  },[wordSubmitted])

  const getRecipes = async () => {
    const responce = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&q=mushrooms&app_id=83add193&app_key=0aa33501d8f495f7379a0626377fd590');
    //console.log(responce)
    const data = await responce.json();
    console.log(data.hits)
    setMyRecipes(data.hits);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
        </video>
          <h1>Find a Recipe</h1>
      </div>


      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search' onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>
      </div>

      <div className='container'>
        <button>
        <img src='https://cdn-icons.flaticon.com/png/128/3466/premium/3466268.png?token=exp=1660467423~hmac=c418317cd1733cd9f9fca9b6bf5c87af' width='30px' alt='icon' className='icon'/>
        </button>
      </div>

      <div>
      {myRecipes.map(element => (
        <MyRecipesComponent 
        label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        />
      ) )}
      </div>
    

    </div>
  );
}

export default App;
