
//Problem 1

//x and y are the numbers used in the reminder check
function sumOfMultiples(x,y)
{
    let sum = 0;

    for(let i = 0 ; i<1000 ; i++)
    {
        if(i%x == 0 || i%y == 0)
        {
            sum += i; 
        }
    }

    return sum;
} 
//sum of multiples of 3 and 5
 console.log("Problem-1 solution: ", sumOfMultiples(3,5)); 

//Problem 2

//methods takes a string value, reverse it and checks if it still equals to the original string 
function isPalindromic(string)
{
    let mirroredString = string.split('').reverse().join('');

    if(string === mirroredString)
    {
        return true;    
    } else
        {
            return false;
        }
}


//method checks gratest palindrome number based on given number digit
// numberDigit 1 will check between 1-10, 2 checks between 10-100, 3 checks between 100-1000 
function gratestPalindrome(numberDigit)
{
    let greatestNumber = 0;

    let startValue = 1;

    for(let i = 0; i < numberDigit-1 ; i++)
    {
        startValue *= 10;
    }

    let endValue = startValue * 10 ;

    // TODO: optimise this in the future
    for(let i = startValue ; i<endValue ; i++)
    {
        for(let j = startValue + 1 ; j < endValue; j++)
        {
            let potentialNr = i*j;
            if(isPalindromic(potentialNr.toString()) == true && greatestNumber < potentialNr)
            {
                greatestNumber = potentialNr;
            }
        }
    }
    return greatestNumber;
}

// largest palindrome made from the product of two 3­digit numbers
console.log("Problem-2 solution: ",gratestPalindrome(3));