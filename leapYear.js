function isLeap(year) {
  if (year % 4 === 0){
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              
              } else {
                  return "Not leap year.";
              }
          
        } else {
        return "Not leap year.";
        } 
  } else {
      return "Not leap year.";
    }
}