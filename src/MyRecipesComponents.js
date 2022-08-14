function MyRecipesComponent({label,image,calories,ingredients}) {
    return(<div>
        
        <div className="container">
        <h2>{label}</h2>
        </div>

        <div className='container'>
        <img src={image} alt='food'/>
        </div>

        <div className="container">
        <p>{calories.toFixed()} calories</p>
        </div>

        <div>
        
        <ul className="list">
            {ingredients.map(ingredient => (
                <li><img src='https://cdn-icons-png.flaticon.com/128/992/992535.png' width='20px' alt='mark'/>
                {ingredient}
                </li>
            ))}
        </ul>
        </div>

    </div>)
}

export default MyRecipesComponent;