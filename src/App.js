import React, {useState} from "react";

import NewExpense from "./componets/NewExpense/NewExpense";


import Expenses from "./componets/Expenses/Expenses"; 

let DUMMY_Expense = [

    {
        id: 'e1',
        title:'Collage Fee',
        amount:250,
        date: new Date(2021,5,12)
    },

    {
        id: 'e2',
        title:'Notebooks',
        amount:230,
        date: new Date(2021,2,22)
        
    },

    {
        id: 'e3',
        title:'House Rent',
        amount:700,
        date: new Date(2021,4,2)
    },

    {
        id: 'e4',
        title:'Laptop',
        amount:50000,
        date: new Date(2021,5,5)
    }

   ];



const App = () =>{

    const [expenses , setExpense] = useState( DUMMY_Expense);

 

   const addExpenseHandler = (expense) => {
    const updatedExpense = [expense , ...expenses];
    setExpense(updatedExpense)
   };

    return (
        <div>

            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item= {expenses}/>
    
         
          </div>

          );
    
    
}

export default App;