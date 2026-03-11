export function getCategories(data) {
   const categories = [];

   for (const item of data) {
      if (!categories.includes(item.category)) {
         categories.push(item.category);
      }
   }

   return categories;
}

export function filterData(data, filter) {
   return data.filter((item) => item.category === filter);
}
