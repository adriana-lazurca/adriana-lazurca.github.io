export const getDate = (stringDate) => {
   const date = new Date(stringDate);
   const month = date.toLocaleString('default', { month: 'long' });
   const year = date.getFullYear();

   return `${month} ${year}`;
};
