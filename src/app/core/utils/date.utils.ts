export const getDateDifference=(date:string):string=>{
    let difference: number;
    let dateObj = new Date(date);
    const presentDate: Date = new Date();

    if (dateObj.getFullYear() < presentDate.getFullYear()) {
      difference = presentDate.getFullYear() - dateObj.getFullYear();
      return `${difference} year${difference > 1 ? 's' : ''} ago`;
    }
    else if (dateObj.getMonth() < presentDate.getMonth()) {
      difference = presentDate.getMonth() - dateObj.getMonth();
      return `${difference} month${difference > 1 ? 's' : ''} ago`;
    }
    else if (dateObj.getDate() < presentDate.getDate()) {
      difference = presentDate.getDate() - dateObj.getDate();
      return `${difference} day${difference > 1 ? 's' : ''} ago`;
    }
    else if (dateObj.getHours() < presentDate.getHours()) {
      difference = presentDate.getHours() - dateObj.getHours();
      return `${difference} hour${difference > 1 ? 's' : ''} ago`;
    }
    else if (dateObj.getMinutes() < presentDate.getMinutes()) {
      difference = presentDate.getMinutes() - dateObj.getMinutes();
      return `${difference} minute${difference > 1 ? 's' : ''} ago`;
    }
    else if (dateObj.getSeconds() < presentDate.getSeconds()) {
      difference = presentDate.getSeconds() - dateObj.getSeconds();
      return `${difference} second${difference > 1 ? 's' : ''} ago`;
    }
    return "0 seconds ago";
  }