let favHolidayDestinations = [ 
    "Venice, Italy", 
    "Paris, France",
    "Barcelona, Spain"
]
console.log(favHolidayDestinations[2])

let favFilm = [
    "Batman The Dark Knight",
    "The Return of The King",
    "Black Panther"
]
console.log(favFilm[0])

favHolidayDestinations[1] = "Florida, USA"
console.log(favHolidayDestinations)
console.log(favHolidayDestinations.length)
console.log(favHolidayDestinations.pop())

//  shift() This method removes the first element from an array and returns that removed element. This method changes the length of the array.

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// slice() The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.