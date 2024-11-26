// Code your solution in this file!
const distanceFromHqInBlocks = (block) => block > 42 ? block - 42 : 42 - block;

const distanceFromHqInFeet = (block) => {
    let inBlock = block > 42 ? block - 42 : 42 - block;
    return inBlock * 264;
}

const distanceTravelledInFeet = (start, finish) => finish > start ? (finish - start) * 264 : (start - finish) * 264;

const calculatesFarePrice = (start ,finish) => {
    let distance = distanceTravelledInFeet(start, finish);
    if (distance < 400) {
        return 0 ;
    } else if ( 400 < distance && distance < 2000 ) {
        return (distance - 400)* 0.02;
    } else if ( 2000 < distance && distance < 2500 ) {
        return 25;
    } else {
        return 'cannot travel that far'; 
    }
}