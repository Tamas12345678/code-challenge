
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
    console.log(sum);

    return sum;
} 
//sum of multiples of 3 and 5
sumOfNumbers(3,5);