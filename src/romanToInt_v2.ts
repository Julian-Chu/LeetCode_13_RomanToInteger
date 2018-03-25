export let romanToInt = function (input: string): number {
  let total: number = 0;
  let roman: string | any = input.toUpperCase();

  let romanArray: string[] | any[] = roman.split('');
  let previousValue: number = 0;
  let value: number = 0;
  for (let i: number = romanArray.length - 1; i >= 0; i--) {
    switch (romanArray[i]) {
      case "I": value = 1; break;
      case "V": value = 5; break;
      case "X": value = 10; break;
      case "L": value = 50; break;
      case "C": value = 100; break;
      case "D": value = 500; break;
      case "M": value = 1000; break;
    }

    if ( value < previousValue) {
      total -= value;
    } else {
      total += value;
    }
    previousValue = value;
  }
  return total;
}