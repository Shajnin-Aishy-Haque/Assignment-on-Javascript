
//Converting unit feet to mile
function feetToMile(feet) {

    if(feet<0){  
       return("Distance cannot be negative!!!");
    }

    else{
        const  mile = feet * 0.000189;
        return mile;
    }
}
    




//Calculate the total amount of wood
function woodCalculator(chair,table,bed){

    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var total = woodForChair + woodForTable +  woodForBed;
    return total;
}





//Count total amount of brick for the whole building
function brickCalculator(floor){
    
    if(floor != Math.ceil(floor) || floor < 1)
    {
        return("Input cannot be a fructional number or less than 1!!!")
    }
    else{
            var brickNeed;

        if(floor <= 10){
            brickNeed = floor * 15 * 15000;
            return brickNeed;
        }

        else if(floor <= 20){
            brickNeed = (floor - 10) * 12 *15000;
            floor = 10;
        }

        else{
            brickNeed = (floor - 20) * 10* 15000;
            floor = 20;
        }

        return brickNeed + brickCalculator(floor);
    }
    
}





//finding my tiny friend
function tinyFriend(names){
    if(names.length < 1|| names == undefined)
    {
        return ("Sorry!!! There is no name.");
    }
    else{
        var  tinyName = names[0];
        for(var i = 1; i < names.length; i++){
            if(tinyName.length > names[i].length){
                tinyName = names[i];
            }
        }
        return tinyName;
    }


}
