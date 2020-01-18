   
   //getting the template referance


    const template = document.getElementById('recipeList');
    const addRecipe = (recipe,id) =>{
         let time = recipe.created_at.toDate();
        let html = `
        <li data-id =${id}>
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class ="btn btn-danger btn-sm my-2"> Delete </button>
        </li>
        `;
       
    template.innerHTML += html; 
    }

    //setting up a real time listener for any data added to retrieve it
    //everytime there is change in collection firestore takes a snap shot of collection
dbConnectionInstance.collection('recipes').onSnapshot( (snapshot) =>{
    console.log('snapshot', snapshot.docChanges())
    snapshot.docChanges().forEach(change =>{
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    })
})

const deleteRecipe =  (id) =>{
   const recipes = document.querySelectorAll('li');
    recipes.forEach((recipe)=>{
        if(recipe.getAttribute('data-id') ===id){
            recipe.remove();
        }
    })
}
//-----------------------------------------------------------------------------
//getting the collection recipes using the connection instance of the database


// dbConnectionInstance.collection('recipes').get().then((data) =>{
// data.docs.forEach((doc) =>{
//     addRecipe(doc.data(), doc.id);
  
// })
// }).catch((error)=> console.log('error', error));

//--------------------------------------------------------------------------------------


//saving documents to the database
const form = document.getElementById("myForm");

form.addEventListener('submit', e =>{
    //this stop page from reloading
    e.preventDefault();
            const now = new Date();
    const recipe = {
        title : form.recipe.value,
        created_at : firebase.firestore.Timestamp.fromDate(now)
    };
    dbConnectionInstance.collection('recipes').add(recipe)
    .then(()=>{console.log('recipe saved')})

    .catch((error)=> console.log('error', error))
})

//deleting datas from database
template.addEventListener('click', e =>{
   if(e.target.tagName ==='BUTTON'){
    //when clicked on the button it will trigger an even and it will get the attribute from
    //the parent element from li tag to get the id of the document.
       const id = e.target.parentElement.getAttribute('data-id');
       //this will give us an instance of single document by id and delete it
       dbConnectionInstance.collection('recipes').doc(id).delete()
       .then(()=> console.log('recipe deleted'))
       .catch((error)=> console.log(error))
   }
})
