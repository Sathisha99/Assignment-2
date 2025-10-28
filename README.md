# Assignment 2 – Fetch, JSON & Array Methods

**Course:** DAN25S  
**Focus:** Fetch API, Async/Await, JSON, and Core Array Methods  
**Author:** Sathisha  
**Date:** 28.10.2025

---

## Code Flow

1. **Fetch Data:**  
   The script fetches meal data from *TheMealDB* API using the Fetch API with async/await.

2. **Data Transformations:**
    - **sort + slice + map:** Selects and prints the first 5 meal names alphabetically.
    - **filter:** Finds all meals in a given category (case-insensitive) and prints their names and categories.
    - **reduce:** Builds an object showing how many meals belong to each category.

3. **VG Stretch Goals:**
    - **groupBy(items, key):** Groups meals by a selected key (e.g., category or area).
    - **summarizeMeals():** Maps meals to compact summaries `{ id, name, category, ingredients[] }`.
    - **ingredientFrequency:** Creates an ingredient frequency map `{ ingredient: count }` using `flatMap` and `reduce`.

4. **Output:**  
   All results are printed to the **Console**.  
   Open **DevTools → Console** in your browser to view them.
