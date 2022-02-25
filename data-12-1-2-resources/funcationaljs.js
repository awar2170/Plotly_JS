var numbers1 = [1,2,3,4,5];
var doubled = numbers1.map(function(num){
    return num * 2;
});
console.log(doubled);

// Code above explained: 
// The numbers array calls the map()method.
// Inside the map() method, there is another function. This function is anonymous, meaning that the function does not have a name. When map() is called, it in turn calls this anonymous function.
// The anonymous function takes a parameter, named num, and returns the number multiplied by 2. Its sole task is to perform this single action.
// For every element in the array, the map() method calls the anonymous function, which doubles the value of the element.
// The map()method returns an array of doubled values, which is assigned the variable doubled.

// .map() will do something to everything on an array 
// It "maps" something onta an array

// NOTE: The anonymous function method, the name of the input of the function doens't matter 
var doubled = numbers1.map(function(integer) {
    return integer * 2;
    });

    // the above code does the same thing as the double numbers function
    // This is because it just does whatever the function we have defined in the parthentheses appying that to the array that is in blue that is the array

var numbers2 = [0,2,4,6,8]; 

// ANONYMOUS FUNCTIONS SYNTAX: 
    // var NAME_ASSINGED_TO_CALCULATIONS = ARRAY_WE_WANT_TO_DOUBLE.map(function(FUNCTION_VARIABLE_ANYNAME))
        // {
        // return FUNCTION_VARIABLE_ANYNAME 
        // }
    // TO MAKE THIS FUNCTION DO ANYTHING, YOU HAVE TO INTERACT WITH FUNCTION_VARIABLE_ANYNAME WITHIN THE FUNCTION 

var add_five = numbers2.map(function(plus_five){
    return plus_five + 5; 
    }); 
console.log(add_five)

//HOW TO USE MAP TO EXTRACT A SPECIFIC PROPOERTY FROM EACH OBJECT IN AN ARRAY//
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

//WHAT THE ABOVE CODE IS DOING: 
    // 1. cities is an array of objects. Each object has multiple properties, such as Rank, City, and State.
    // 2. The map() method is used to extract only the City property of each object, i.e., San Antonio, Phoenix, and Dallas. During each iteration, the anonymous function inside map() returns only that property of each object.
    // 3. cityNames is an array of only these city names.

var lineskip = 0 // This just separates the above condensed form and the bottom 

//SKILL DRILL: MODIFY THE CODE ABOVE SO THAT YOU EXTRACT THE POPULATION INSTEAD//
var city_populations = cities.map(function(city){
    return city.population;
});
console.log(city_populations);

// THE FILTER METHOD 
    //it accepts another function as its parameter. Like map(), filter() performs an operation on every element in the original array. Unlike map(), however, filter()does not necessarily return an array whose length is the same as the original array.
    let numbers3 = [11,22,36,54,55]
    // What if we wanted to get only the even numbers in this array? 
        //LOOP METHOD 
            let evenNumbers = [] 
            numbers3.forEach(function(number) { 
                if (numbers3 % 2 == 0) {
                    evenNumbers.push(number)
                }
            })
            console.log(evenNumbers)
        // THE FILTER METHOD 
            let evenNumbers2 = numbers3.filter(number => number %2 == 0)
            console.log(evenNumbers2)
                //NOTE: YOu could also filter this by using the anonymous function format above 

    // FILTERING NUMBERS LARGER THAN 1 
                //NOTE: The methods below are the same for each, they are just separated by example 
        // LARGER THAN 1
            var numbers4 = [1,2,3,4,5];
            var larger = numbers4.filter(function(num){
                return num > 1;
            });
            
            console.log(larger);
        // LARGER THAN 5
            var familyAge = [2,3,39,37,9];
            var olderThanFive = familyAge.filter(function(age){
                return age > 5;
            });
            console.log(olderThanFive)
    
    // SKILL DRILL: FILTERING STRINGS 
        var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
        var words_start_s = words.filter(function(word){
            return word.startsWith("s");
        })
        console.log(words_start_s)

// ARROW FUNCTION REVIEW 
    // Simplfying doubled into an arrow function 
        var doubled = numbers4.map(num => num * 2);
        console.log(doubled);
    // Ordering Family Ages with an Arrow FUnction 
        var familyAge2 = [3,2,39,37,9];
        var sortedAge2 = familyAge2.sort((anElement,anotherElement) => anElement -
        anotherElement);
        console.log(sortedAge2)
            // WHAT THE ABOVE CODE IS DOING:
                // 1. The variables a and b are replaced by anElement and anotherElement.
                // 2. The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, and anotherElement to 2.
                // 3. The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
                // 4. Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
                // 5. The sort()method compares another pair of elements in the array, for example 37 and 39.
                // 6. Since 37 - 39 is a negative number, their ordering is kept.
                // 7. The process is repeated until the array is sorted.


// THE SLICE FUNCTION 
    //INTRODUCTION 
        var integers = [0,1,2,3,4,5];
        var slice1 = integers.slice(0,2);
            // WHAT THE CODE ABOVE IS DOING:
                //In this example, the slice()method returns the first two elements of the integer array: [0,1]. 
                //The first argument is the position of where to begin the selection. 
                //Here, it is at index position 0. The next argument, 2, denotes the position of the array where the slicing ceases. 
                    // In other words, the slice()method begins selecting the array at index position 0, and stops right before reaching index position 2. So here, it returns elements at index positions 0 and 1, but not 2.
    // SKILL DRILL: use slice to select the first three elements of the words array 
        console.log(words.slice(3,));
