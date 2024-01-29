// Kobe Swier 1/28/24

const scores = [85, 44, 62, 73]
let x = 24;
let y = 65;
function addFunction(x)
{
    x = x + 1;
    console.log(x);
}

function functionn(x) {

}

function oddFunction(functionn, y) 
{
    if (y%2 == 0) 
    {
        functionn(y);
    }
    else
    console.log("the number is odd")
}

for (let i in scores ) 
{
    oddFunction(addFunction[i]);
}



