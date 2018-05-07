const utils = require("./utils");
const expect = require("expect");

it('should add 2 numbers', () =>{
    let result = utils.add(33,11);

    expect(result).toBe(44).toBeA('number');
    // expect will take care of this
    // if(result !== 44){
    //     throw new Error(`Expected 44 got ${result}`);
    // }
});

it ('should square a number', (done) =>{
    utils.square(12,(squaredResult)=>{
        
        expect(squaredResult).toBe(144).toBeA('number');
        // if(squaredResult !== 144){
        //     throw new Error(`Expected 144 got ${squaredResult}`);
        // }
        done();
    });

});

it('should expect some values',() => {
    expect(12).toNotBe(13);
    expect({name:"myself"}).toNotEqual({name:"Myself"});
    expect([1,2,3]).toInclude(3);
    expect([2,4,6]).toNotInclude(7);
    expect([2,4,6]).toExclude(7);
    expect({
        name:"me",
        age:"21",
        time:"today"
    }).toInclude({
        age:"21"
    })
})

it('should expect a first name and a last name',()=>{
    let nameObj = {time:'12:03',age:29};
    let bigName = utils.setName(nameObj,'john pickle');
    expect(nameObj).toInclude({
        first:'john',
        last:'pickle'
    })

})