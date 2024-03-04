export const getCurrentDate = () => {
    const currentDate = new Date();
  
    const day = currentDate.getDate(); // Day of the month (1-31)
    const month = currentDate.getMonth() + 1; // Month (0-11) - adding 1 to match 1-12
    const year = currentDate.getFullYear();
  
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  };
  