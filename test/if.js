var expect  = require('chai').expect;

var jsxIf   = require('../if');

var _if     = jsxIf._if,
    _elseif = jsxIf._elseif,
    _else   = jsxIf._else;

describe('_if', function(){

  it ('should handle a true condition', function(){
    var hasRun = false;
    _if(true, function(){
      hasRun = true;
    });

    expect(hasRun).to.be.true;
  });

  it ('should handle a false condition', function(){
    var hasRun = false;
    _if(false, function(){
      hasRun = true;
    });

    expect(hasRun).to.be.false;
  });

  it ('can take a value as second parameter', function(){
    var shouldBeOne = _if(true, 1);

    expect(shouldBeOne).to.equal(1);
  });
})

describe('_else', function(){
  it ('should run if statement is false', function(){
    var hasRun = false;

    _if(false, null,
    _else(function(){
      hasRun = true;
    }));

    expect(hasRun).to.be.true;
  });

  it ('should not run if statement is true', function(){
    var hasRun = false;

    _if(true, null,
    _else(function(){
      hasRun = true;
    }));

    expect(hasRun).to.be.false;
  });
})