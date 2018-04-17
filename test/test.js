const expect = require('chai').expect
const toBinary = require('..').decimalTobinary
const toDecimal = require('..').binaryTodecimal

describe('#convert', function () {
  it('First test', function () {
    const convertion = toBinary(100)
    expect(convertion).to.equal('1100100')
  })
  it('Second test', function () {
    const convertion = toDecimal(111000011)
    expect(convertion).to.equal('451')
  })
})
