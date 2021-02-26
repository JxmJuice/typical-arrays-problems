
exports.min = function min (array) {
  if(!Array.isArray(array))
  {
      return 0;
  }    
  let minValue = array[0];
  for(let i=0;i<array.length;i++)
  {
      if(array[i]<minValue)
      {
          minValue=array[i];
      }
  }
  return minValue;
}

exports.max = function max (array) {
  if(typeof array[0]==='undefined')
    {
        return 0;
    }    
    let maxValue = array[0];
    for(let i=0;i<array.length;i++)
    {
        if(array[i]>maxValue)
        {
            maxValue=array[i];
        }
    }
    return maxValue;
}

exports.avg = function avg (array) {
  if(typeof array[0]==='undefined')
  {
      return 0;
  }    
let sum = 0;
for(let i=0;i<array.length;i++)
  {
      sum+=array[i];
  }
return sum/array.length;
}
