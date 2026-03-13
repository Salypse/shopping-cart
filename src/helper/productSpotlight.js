export function decreaseIndex(index, length) {
   let startIndex = index;

   if (startIndex - 1 < 0) {
      return length - 1;
   } else {
      return startIndex - 1;
   }
}

export function increaseIndex(index, length) {
   let startIndex = index;

   if (startIndex >= length - 1) {
      return 0;
   } else {
      return startIndex + 1;
   }
}

export function getRandomProducts(data) {
   const dataCopy = [...data];
   const randomItems = [];

   for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * dataCopy.length);
      randomItems.push(dataCopy.splice(randomIndex, 1)[0]);
   }
   return randomItems;
}
