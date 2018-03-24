let romanToInt = function (input: string): number {
  let total: number = 0;
  let roman: string | any = input.toUpperCase();

  let romanArray: string[] | any[]= roman.split('');
  let temp:string[];
  for(let i:number=romanArray.length -1; i >= 0;i--){
    
      if(romanArray[i] < romanArray[i+1]){
          total -= parseInt(romanNumerals[romanArray[i]])
      }else{
        total += parseInt(romanNumerals[romanArray[i]]);
      }
    
  }
  return total;
}
enum romanNumerals {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000
}

describe("Single Alphabet", () => {
  it("give I, return 1", () => {
    expect(romanToInt("I")).toBe(1);
  });
  it("give V, return 5", () => {
    expect(romanToInt("V")).toBe(5);
  });
  it("give X, return 10", () => {
    expect(romanToInt("X")).toBe(10);
  });
  it("give L, return 50", () => {
    expect(romanToInt("L")).toBe(50);
  });
  it("give C, return 100", () => {
    expect(romanToInt("C")).toBe(100);
  });
  it("give D, return 500", () => {
    expect(romanToInt("D")).toBe(500);
  });
  it("give M, return 1000", () => {
    expect(romanToInt("M")).toBe(1000);
  });
})

describe("2 alphabet",()=>{
  it('input IV return 4',()=>{
    expect(romanToInt("IV")).toBe(4);
  })

  it("input VI return 6",()=>{
    expect(romanToInt("VI")).toBe(6);
  })
})
