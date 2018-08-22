var years = [1999, 1998, 2006, 1996, 1880];
var ages = [];

for (i = 0; i < years.length; i++){
	ages[i] = 2018 - years[i];
}

agecheck(ages)

function agecheck(age){
	for(i=0; i < age.length; i++){
		if(age[i] < 18)
			console.log("underage");
		else
			console.log("Adult");
	}

}