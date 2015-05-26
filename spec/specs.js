describe('cryptoSquare', function() {
  it("downcases the entire string", function () {
    expect(cryptoSquare("THIS IS SO FUN")).to.equal("this is so fun");
  });
});
