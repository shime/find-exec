var expect = require("expect.js")
var shell = require('./../')

it("returns the first command available", function(){
  var result = shell(["./test/shims/foo", "./test/shims/baz", "./test/shims/bar"])
  expect(result).to.be('./test/shims/foo')
})

it("is okay if one of the bins is missing", function(){
  var result = shell(["./test/shims/baz", "./test/shims/bar"])
  expect(result).to.be('./test/shims/bar')
})

it("raises errors if command was not found", function(){
  expect(function () {shell(["./test/shims/baz"])}).to.throwException()
})
