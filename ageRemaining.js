function lifeInWeeks(age){
    var yearLeft=90-age;
    var monthsLeft= yearLeft*12;
    var weeksLeft=yearLeft*52;
    var daysLeft=yearLeft*365;
    console.log("You have "+daysLeft+" days, "+weeksLeft+" weeks, "+monthsLeft+" months left.");

}

lifeInWeeks(50);