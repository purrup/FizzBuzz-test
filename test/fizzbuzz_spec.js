var should = chai.should()

describe('Test fizzBuzz function', function () {
  it('should return Fizz when num can be only divided by 3', function () {
    let num = 9
    let result = fizzBuzz(num)
    result.should.be.equal('Fizz')
  })
  it('should return Buzz when num can be only divided by 5', function () {
    let num = 10
    let result = fizzBuzz(num)
    result.should.be.equal('Buzz')
  })
  it('should return FizzBuzz when num can be divided by both 3 and 5 simultaneously', function () {
    let num = 15
    let result = fizzBuzz(num)
    result.should.be.equal('FizzBuzz')
  })
  it('should return num when num can be divided by neither 3 nor 5', function () {
    let num = 7
    let result = fizzBuzz(num)
    result.should.be.equal(num)
  })
})