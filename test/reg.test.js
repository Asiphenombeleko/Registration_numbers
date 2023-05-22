describe("The RegistrationNumber Function",function(){
it ("Should return true if registration is from Cape Town",function(){
    var CA1234 = "Cape Town"
    var regNumber = RegistrationNumbers
    assert.equal("CA1234",regNumber("Cape Town"))
})
})