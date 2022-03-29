import React from 'react';
import classes from './AvailableMeals.module.css';
import { DUMMY_MEALS } from './DummyMeals';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
export {DUMMY_MEALS} from './DummyMeals'


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return(
            <MealItem 
            key = {meal.id}
            name = {meal.name} 
            description = {meal.description}
            id = {meal.id}
            price = {meal.price}/>
        )
    })
  return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
        
    </section>
  )
}

e