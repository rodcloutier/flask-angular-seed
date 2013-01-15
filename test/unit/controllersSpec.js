'use strict';

/* jasmine specs for controllers go here */

describe('MyCtrl1', function(){
  var myCtrl1;

  beforeEach(module("myApp"))

  beforeEach(inject(function($controller){
      myCtrl1 = $controller("MyCtrl1", {});
  }));

  it('should ....', inject(function($controller) {
  }));
});


describe('MyCtrl2', function(){
  var myCtrl2;

  beforeEach(module("myApp"))

  beforeEach(inject(function($controller){
      myCtrl2 = $controller("MyCtrl1", {});
  }));


  it('should ....', function() {
    //spec body
  });
});
