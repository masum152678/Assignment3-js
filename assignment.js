// Assignment name: feet to mile
function feetToMile(feet){
    var Mile = feet*0.000189394;
    return Mile;
}
var FeetValue = feetToMile(10);
console.log("Your equivallent Miles value = ",FeetValue);


//Assignment name: woodCalculator
function woodCalculator(chair,table,khat){
    var chairWood = chair*1;
    var tableWood = table*3;
    var khatWood  = khat*5;
    var totalWoodNeeded = chairWood+tableWood+khatWood;
    return totalWoodNeeded;
}
var YourValue = woodCalculator(10,3,5);
console.log("you need", YourValue, "cubick feet wood");


//Assignment name: brickCalculator

function brickCalculator(floorNumber){
    if(floorNumber<=10){
        var BricksNeeded = floorNumber*15*1000;
        return BricksNeeded;
    }
    else if(floorNumber>10 && floorNumber<=20){
        var FirsTenFloors = 10*15*1000;
        var TenToNextFloors = (floorNumber-10)*12*1000;
        var totalBricks = FirsTenFloors +TenToNextFloors;
        return totalBricks;
    }
    else if (floorNumber>10 && floorNumber<=40){
        var FirsTenFloors = 10*15*1000;
        var TenToTwentyFloors = (20-10)*12*1000;
        var TwentyToNextFloors = (floorNumber-20)*10*1000;
        var totalBricks = FirsTenFloors+TenToTwentyFloors+TwentyToNextFloors;
        return totalBricks;
    }
   
}

var YourFloor = brickCalculator(22);
console.log("total bricks needed = ",YourFloor);


//4.Assignment name: tinyFriend 
function tinyFriend(arr) {

    let shortest = '';

       if(arr.length > 0){
         for(let i = 0; i < arr.length; i++){
           if(typeof arr[i] === 'string' && arr[i].length < shortest.length)
             {
              shortest = arr[i];
            }
          }
         }
       
        return shortest; 
    }

var output = tinyFriend(['masum','al','abdullah','jasim']);
console.log("shortest value",output);