let array = [1,3,3,4,7,6,3];
let certainElement = 3;
let numberOfTimes = 0;
let i = 0 ;

while(i < array.length){
    if(array[i] == certainElement){
        numberOfTimes++;
    }
    i++;
}

console.log(numberOfTimes);