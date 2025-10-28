// Assignment 2 – Fetch, async/await, API, JSON, Array Methods
// Author: Sathisha
// Date: 28.10.2025

// 1) Fetch data from TheMealDB API and work with it using array methods
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

        // 2a) First 5 names alphabetically (names only)
        const firstFive = [...meals]
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
            .slice(0, 5)
            .map(m => m.strMeal);
        console.log('First 5 meals alphabetically:', firstFive);

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

// 5) Run
fetchMeals();
