import { romanToInt } from './../src/romanToInt_v2';



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
  });

  it("input VI return 6",()=>{
    expect(romanToInt("VI")).toBe(6);
  });

  it("input IX return 9",()=>{
    expect(romanToInt("IX")).toBe(9);
  });
  it("input XL return 40",()=>{
    expect(romanToInt("XL")).toBe(40);
  });
  it("input XC return 90",()=>{
    expect(romanToInt("XC")).toBe(90);
  });
  it("input CD return 400",()=>{
    expect(romanToInt("CD")).toBe(400);
  });
  
  it("input CM return 900",()=>{
    expect(romanToInt("CM")).toBe(900);
  });
});

describe("3 alphabets",()=>{
  it("input CXC return 190",()=>{
    expect(romanToInt("CXC")).toBe(190);
  })
});

describe("4 alphabets",()=>{
  it("input CXC return 190",()=>{
    expect(romanToInt("CCXC")).toBe(290);
  })
})
