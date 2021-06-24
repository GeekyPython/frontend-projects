import {createStore} from 'redux';

const CLEAR = "CLEAR";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";
const DISPLAY = "DISPLAY";
const COMPUTE = "COMPUTE";
const NUMBER = "NUMBER";

let calcReducer = (state = "0" , action) =>
{
  switch(action.type)
  {
    case ADD:
      return state.concat('+');
     
    case SUBTRACT:
      return state.concat('-');
    
    case MULTIPLY:
      return state.concat('*');
    
    case DIVIDE:
      return state.concat('/');
    
    case COMPUTE:
      return state.concat(action.result);
    
    case NUMBER:
        return state.concat(action.value);
    
    default:
      return state;
  }
}

let chooseNumber = (id) =>
{
    let numbers = ["one","two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
    let ref = document.getElementById(id).innerHTML;
}

let includeNumber = () =>
{
    return {
        type: NUMBER,
        value: document.getElementById()
    }
}

let addNumbers = (a,b) =>
{
  return {
    type: ADD,
    value: "+"
  }
}

let subtractNumbers = (a,b) =>
{
  return {
    type: SUBTRACT,
    value: "-"
  }
}

let multiplyNumbers = (a,b) =>
{
  return {
    type: MULTIPLY,
    value: "*"
  }
}

let divideNumbers = (a,b) =>
{
  return {
    type: DIVIDE,
    value: "/"
  }
}

let compute = (string) =>
{
  let operator = /[^0-9]/;
  let arr = string.split('');
  let temp = 0;
  let result;
  let ref=0;
  
  let numOperators = (arr) => 
  {
    let count=0;

    for(let i=0;i<arr.length;i++)
    {
        if(operator.test(arr[i]))
        {
            count++;
        }

        return count;
    }
  }

  while(numOperators(arr)!==0)
    {
      while(!regex.test(arr[ref]))
        {
          ref++;
        }
      
      switch(arr[ref])
      {
        case "+":
          temp = parseInt(arr[ref-1])+parseInt(arr[ref+1]);
          
        case '-':
          temp = parseInt(arr[ref-1])-parseInt(arr[ref+1]);
          
        case '*':
          temp = parseInt(arr[ref-1])*parseInt(arr[ref+1]);
        
        case '/':
          temp = parseInt(arr[ref-1])/parseInt(arr[ref+1]);
        
        default:
          temp=0; 
      }
      arr.splice(ref-1,ref+1);
      temp = String(temp);
      arr.unshift(result);
    }
    result = arr.join('');
    return result;
}

let store = createStore(calcReducer);
console.log(store.getState());