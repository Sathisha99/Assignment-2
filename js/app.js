// Assignment 2 - Fetch, async/await, API, JSON, Array Methods
// Author: Your Name
// Date: Today's date

// 1️⃣ Fetch data from TheMealDB API
async function fetchMeals() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        const meals = data.meals;

        console.log('All meals:', meals);

        // 2️⃣ Print first 5 meal names in alphabetical order
        const firstFive = meals
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
            .slice(0, 5)
            .map(meal => meal.strMeal);
        console.log('First 5 meals alphabetically:', firstFive);

        // 3️⃣ Print all meals that contain a given category (example: "Seafood")
        const category = 'Seafood';
        const filteredMeals = meals.filter(meal => meal.strCategory.toLowerCase() === category.toLowerCase());
        console.log(`Meals in category "${category}":`, filteredMeals.map(m => m.strMeal));

        // 4️⃣ Create object showing how many times each category appears
        const categoryCount = meals.reduce((acc, meal) => {
            const cat = meal.strCategory;
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        console.log('Meal count by category:', categoryCount);

    } catch (error) {
        console.error('Error fetching meals:', error);
    }
}

// 5️⃣ Run the function
fetchMeals();
