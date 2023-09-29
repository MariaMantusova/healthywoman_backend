import findRecipesByType from '../apiGetters/getRecipesByType.js';
import findRecipeByID from '../apiGetters/getRecipeByID.js';

export const getRecipesByCalories = (req, res, next) => findRecipesByType('calories', req.params.calories)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);

export const getRecipesByKeyword = (req, res, next) => findRecipesByType('q', req.params.keyword)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);

export const getRecipesByCuisine = (req, res, next) => findRecipesByType('cuisineType', req.params.cuisine)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);

export const getRecipesByMeal = (req, res, next) => findRecipesByType('mealType', req.params.mealType)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);

export const getRecipesByDiet = (req, res, next) => findRecipesByType('diet', req.params.diet)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);

export const getRecipesByDishType = (req, res, next) => findRecipesByType('dishType', req.params.dishType)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);

export const getRecipesByHealth = (req, res, next) => findRecipesByType('health', req.params.healthLabel)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);

export const getRecipeByID = (req, res, next) => findRecipeByID(req.params.ID)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);
