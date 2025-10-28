<<<<<<< HEAD
// Assignment 2 – Fetch, async/await, API, JSON, Array Methods
// Author: Sathisha
// Date: 28.10.2025

// 1) Fetch data from TheMealDB API and work with it using array methods
=======
// Assignment 2 - Fetch, async/await, API, JSON, Array Methods
// Author: Sathisha
// Date: 28.10.2025

// 1️. Fetch data from TheMealDB API
>>>>>>> 0bf9d0f8cadc7647fb27133aa239ca0864493076
async function fetchMeals() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        const meals = data.meals || [];

        if (!Array.isArray(meals) || meals.length === 0) {
            console.warn('No meals returned from API.');
            return;
        }

        console.log('All meals:', meals);

<<<<<<< HEAD
        // 2a) First 5 names alphabetically (names only)
        const firstFive = [...meals]
=======
        // 2️.  Print first 5 meal names in alphabetical order
        const firstFive = meals
>>>>>>> 0bf9d0f8cadc7647fb27133aa239ca0864493076
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
            .slice(0, 5)
            .map(m => m.strMeal);
        console.log('First 5 meals alphabetically:', firstFive);

<<<<<<< HEAD
        // 2b) All meals in a given category (print name + category)
        const category = 'Dessert';
        const filteredMeals = meals.filter(
            m => (m.strCategory || '').toLowerCase() === category.toLowerCase()
        );
        console.log(
            `Meals in category "${category}":`,
            filteredMeals.map(m => ({ name: m.strMeal, category: m.strCategory }))
        );

        // 2c) Count how many meals per category using reduce
        const categoryCount = meals.reduce((acc, m) => {
            const cat = m.strCategory || 'Unknown';
=======
        // 3️. Print all meals that contain a given category 
        const category = 'Dessert';
        const filteredMeals = meals.filter(meal => meal.strCategory.toLowerCase() === category.toLowerCase());
        console.log(`Meals in category "${category}":`, filteredMeals.map(m => m.strMeal));

        // 4️. Create object showing how many times each category appears
        const categoryCount = meals.reduce((acc, meal) => {
            const cat = meal.strCategory;
>>>>>>> 0bf9d0f8cadc7647fb27133aa239ca0864493076
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        console.log('Meal count by category:', categoryCount);


        // VG – Stretch goals

        // Helper: collect ingredient array from a MealDB item (strIngredient1..20)
        function extractIngredients(meal) {
            const list = [];
            for (let i = 1; i <= 20; i++) {
                const val = meal[`strIngredient${i}`];
                if (val && val.trim()) list.push(val.trim());
            }
            return list;
        }

        // 1) Group by a key (e.g., 'strCategory' or 'strArea')
        function groupBy(items, key) {
            return items.reduce((acc, item) => {
                const k = item[key] ?? 'Unknown';
                (acc[k] ||= []).push(item);
                return acc;
            }, {});
        }
        const byCategory = groupBy(meals, 'strCategory');
        console.log('Grouped by category:', byCategory);

        // 2) Select & reshape (compact summaries)
        function summarizeMeals(items) {
            return items.map(m => ({
                id: m.idMeal,
                name: m.strMeal,
                category: m.strCategory,
                ingredients: extractIngredients(m)
            }));
        }
        const summaries = summarizeMeals(meals);
        console.log('Meal summaries:', summaries);

        // 3) Ingredient frequency map across all meals
        const ingredientFrequency = meals
            .flatMap(extractIngredients)
            .reduce((acc, ing) => {
                acc[ing] = (acc[ing] || 0) + 1;
                return acc;
            }, {});
        console.log('Ingredient frequency:', ingredientFrequency);

    } catch (error) {
        console.error('Error fetching meals:', error);
    }
}

<<<<<<< HEAD
// 5) Run
=======
// 5️. Run the function
>>>>>>> 0bf9d0f8cadc7647fb27133aa239ca0864493076
fetchMeals();
