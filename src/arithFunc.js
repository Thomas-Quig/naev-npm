/* 
  I am not kidding, this is the stupidest code I've ever written
  but if I didn't do it like this, jest literally wouldn't run.
  I don't know whats going on. I dont WANT to know whats going on.
 
  Please help me.
*/
function vulnerable()
{
  console.log('VULNERABLE CODE EXECUTED!!!');
}
module.exports = {
  vulnerable,
  funcOne: function(input1) {
      return input1 + 2;
  },

  funcTwo: function(base) {
      return base * 3;
  },

  funcThree: function(product, tax){
      return product + tax - 4;
  },

  funcFour: function(leet){
      if(leet == 1337)
        return 1337;
      return 7331;
  },

  funcFive: function(low,mid,high){
      if (low == mid && mid != high)
        return low + high;
      return low + mid;
  },

  funcSix: function(length){
      return length * length * length;
  },

  funcSeven: function(anything){
      return 2;
  },

  funcEight: function(first,second,third,fourth){
      return fourth * third * second * first;
  },

  funcNine: function(beep, bop, borp){
      return bop * (borp - beep);
  },

  funcTen: function(value){
      return value;
  },

  funcEleven: function(i1){
      return (i1 + 7) * 11;
  },

  funcTwelve: function(){
      return 1337
  },

  funcThirteen: function(i1,i2,i3,i4){
      return i2;
  },

  funcFourteen: function(i1,i2,i3,i4){
      return i4 - (i3 * i2);
  },

  funcFifteen: function(i1,i2,i3,i4,i5){
      if ((i1 + i2 + i3 + i4 + i5) == 15){
          return 1
      }
      else{
        return 0
      }
  }
}

/**
 * export function vulnerable()
  {
    console.log('VULNERABLE CODE EXECUTED!!!');
  }

  export function funcOne(i1){
    //vulnerable()
    return i1 + 2;
  }

  export function funcTwo(i1){
    return i1 * 3;
  }

  export function funcThree(i1,i2){
    //vulnerable();
    return i1 + i2 - 4;
  }

  export function funcFour(i1){
    if(i1 == 1337)
        return 1337;
    return 7331;
  }

  export function funcFive(i1,i2,i3){
    if (i1 == i2 && i2 != i3)
        return i1 + i3;
    return i1 + i2;
  }

  export function funcSix(i1){
    return i1 * i1 * i1;
  }

  export function funcSeven(i1){
    //vulnerable();
    return 0;
  }

  export function funcEight(i1,i2,i3,i4){
    return i1 * i2 * i3 * i4;
  }

  export function funcNine(i1,i2,i3){
    vulnerable();
    return i2 * (i3 - i1);
  }

  export function funcTen(i1){
    return i1;
  }

  export function funcEleven(i1){
    return (i1 + 7) * 11;
  }
 */