function linearSearch(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===target)
        {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([10,20,30,4,05,-1,0,5],4))
console.log(linearSearch([10,20,30,4,05,-1,0,5],20))
console.log(linearSearch([10,20,30,4,05,-1,0,5],100))
