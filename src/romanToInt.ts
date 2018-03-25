import { romanEnum } from "./romanEnum";

export let romanToInt = function (input: string): number {
  let total: number = 0;
  let roman: string | any = input.toUpperCase();

  let romanArray: string[] | any[]= roman.split('');
  let temp:string[];
  for(let i:number=romanArray.length -1; i >= 0;i--){
      let lastValue:number = parseInt(romanEnum[romanArray[i+1]]);
      let currentValue:number = parseInt(romanEnum[romanArray[i]]);

      if( i<romanArray.length-1 && currentValue < lastValue){
          total -=  parseInt(romanEnum[romanArray[i]]);

      }else{
        total += parseInt(romanEnum[romanArray[i]]);
      }    
  }
  return total;
}



