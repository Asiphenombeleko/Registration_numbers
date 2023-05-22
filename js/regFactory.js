function RegistrationNumbers(RegNo,Place){
var allPLates = []


    function regNumbers(){
        if(Place.startsWith("CA") && RegNo === undefined){
            allPLates.push(Place)
            }
    }
    return {
        RegistrationNumbers,
        regNumbers
    }
}