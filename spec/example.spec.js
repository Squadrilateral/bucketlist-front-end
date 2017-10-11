describe('Example DOM test', function () {
  const myElement = document.getElementById('myDiv')

  it('has the right text', function () {
    (myElement.innerHTML).should.equal('Hello World!')
  })
})
