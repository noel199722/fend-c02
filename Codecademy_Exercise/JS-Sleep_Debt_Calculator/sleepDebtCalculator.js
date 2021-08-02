const getSleepHours = day => {
    /*if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 6;
    } else if (day === 'Wednesday'){
      return 6;
    } else if (day === 'Thursday') {
      return 9;
    } else if (day === 'Friday') {
      return 7;
    } else if (day === 'Saturday') {
      return 11;
    } else if (day === 'Sunday') {
      return 5
    } else {
      return 'Error!'
    };*/
    
    switch(day) {
      case 'Monday':
          return 8
          break;
      case 'Tuesday':
          return 6
          break;    
      case 'Wednesday':
        return 6
        break;     
      case 'Thursday':
        return 9
        break;    
      case 'Friday':
        return 7
        break;     
      case 'Saturday':
        return 10
        break;      
      case 'Sunday':
        return 5
        break;
      default:
        return 'Error!';
      };
  };
  
  /*console.log(getSleepHours('Monday'));
  console.log(getSleepHours('Wednesday'));
  console.log(getSleepHours('Saturday'));
  console.log(getSleepHours('July'));*/
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
     
  };
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    const idealHours = 7 
    return idealHours * 7;
  }
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours){
      console.log("You are full of energy. You slept " + (actualSleepHours-idealSleepHours) + " hours more than you needed this week. ");
    } else if (actualSleepHours < idealSleepHours) {console.log("You slept " + (idealSleepHours - actualSleepHours) + " hours less than you need this week. You should get some rest."); 
    } else {
      console.log('Have you slept?');
    }
  };
  
  calculateSleepDebt();