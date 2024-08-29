import { createSlice } from "@reduxjs/toolkit";

//Initialisation du state de todo
const initialState = [
    {
        id : 1,
        task : "Faire la vaisselle",
        completed : false,
        isEditing : false
    },
    {
        id : 2,
        task : "Faire le ménage",
        completed : true,
        isEditing : false
    }
];

//Création de mon reducer et de ses actions
export const todoSlice = createSlice(
    {
        name : "todo",
        initialState,
        reducers : {

            //Fonction qui permet d'ajouter une tâche
            addTask : (state, action) => {
                console.log("addTask", action.payload);
            },

            //Fonction qui permet de supprimer une tâche
            deleteTask : (state, action) =>{
                console.log("deleteTask", action.payload);
            },

            //Fonction qui permet de modifier l'etat d'une tâche
            completedTask : (state, action) =>{
                console.log("completedTask", action.payload);
            }
        }
    }
)

//Action creator
export const { addTask, deleteTask, completedTask } = todoSlice.actions;

export default todoSlice.reducer;