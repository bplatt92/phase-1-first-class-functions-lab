function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,4);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    function fare(charge){
       return charge*fareMultiplier
    }
    return fare
}

function fareDoubler(charge){
    return charge*2
}

function fareTripler(charge){
    return charge*3
}

function selectDifferentDrivers(arrayOfDrivers, selectedDrivers) {
    return selectedDrivers(arrayOfDrivers);

    function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}
    function returnLastTwoDrivers(drivers) {
        return drivers.slice(2,4);
    }
}
arrayOfDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])