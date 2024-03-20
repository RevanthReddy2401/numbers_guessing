var ran=(Math.ceil(Math.random()*100));
console.log(ran);
count=1;
function findnum()
{   num=document.getElementById("no").value;
    if(num==ran)
    {
        document.getElementById("res").textContent="Congratulations!! You guessed the number in " +count+" tries";
    }
    else if(num < ran)
    {
        document.getElementById("res").textContent="Try with the higher Number";
    }
    else{
        document.getElementById("res").textContent="Try with the lower Number";
    }
    document.getElementById("tries").textContent=count;
    count+=1;
    
}