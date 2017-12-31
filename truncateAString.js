function truncateString(str, num) {
  // Clear out that junk in your trunk
  
    var result = (str.length <= 3 || num <= 3) ? str.slice(0 , num) + "..." :
    (str.length > num) ? str.slice(0,num -3)+ "..." :  str ;
  	return result;
    
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
