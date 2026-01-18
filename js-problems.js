//Find longest word in sentence
 function findLongestWord(string){
   let str =string.split(" ");
   let longest=0;
   let longestWord="";
   
   for(let word of str){
    if(word.length>longest){
        longest=word.length;
        longestWord=word;
    }
   }
   return longestWord;
}

let str="hello goodmorning everyone";
console.log(findLongestWord(str))

function longest(string){
    let str=string.split(" ");
    return str.reduce((max,curr)=>max.length>curr.length?max:curr,0)
}
console.log(longest(str))

function longestWord(string){
    let str=string.split(" ")
    let sort=str.sort((a,b)=>b.length-a.length)
    return sort[0]
}
console.log(longestWord(str))


//Remove vowels from the sentence

function removeVowels(str){
    let vowels="aeiou";
    let string="";
    for(let i=0;i<str.length;i++){
        let isVowels=false;
        for(let j=0;j<vowels.length;j++){
            if(str[i]===vowels[j]){
                isVowels=true
                break;

            }
        }if(!isVowels){
                string+= str[i]
            
        }
    }return string;
}
console.log(removeVowels(str))

function remove(str){
    let vowels="aeiou";
    let string=""
    
    for(let word of str){
        if(!vowels.includes(word)){
            string+=word
        }
    }return string;
}

console.log(remove(str))


function remove1(str){
    let string=str.split("");
    let vowels="aeiou"
    return string.filter(ch=>!vowels.includes(ch)).join('')
}

console.log(remove1(str))

function remove3(str){
    let string=str.split("")
    let result=""
    let vowels="aeiou"
     string.forEach(ch=>{
        if(!vowels.includes(ch)){
            result+=ch
        }
    })
    return result;
}

console.log(remove3(str))

//Missing numbers from an array

let arr=[1,2,3,4,5,7]

function missingNumber(arr){
    let sum1=arr.reduce((acc,curr)=>acc+curr,0)
    let sum2=0;
    let i=0;
    while(i<=arr.length+1){
        sum2+=i;
        i++
     
    }return sum2-sum1
}
console.log(missingNumber(arr))


//Palindrome

//Print 1 to 10 using setTimeout
setTimeout(()=>{
    for(let i=1;i<=10;i++){
        console.log(i)
    }
},2000)

//Count duplicate elements
//Print 1 to 10 with 1 second gap 
let count=1
let interval= setInterval(()=>{
    console.log(count);
    count++
    if(count>=10){
        clearInterval(interval)
    }
},2000)

//Largest element from an array
function largest(arr){
    return Math.max(...arr)
}
//Smallest element from an array

function smallest(arr){
    return Math.min(...arr)
}
//Reverse a string
function reverse(str){
    let string="";
    for(let i=str.length-1;i>=0;i--){
        string+=str[i]
    }return string;
}

console.log(reverse("asyabi"))
//Check if two strings are anagrams

function anagram(str1,str2){
    return str1.split("").sort().join("")===str2.split("").sort().join("")
}
console.log(anagram("silent","listen"))
//Check if a number is prime
//Factorial of a number
//Sum and avg of elements from an array
function sumandavg(arr){
    let sum=arr.reduce((curr,acc)=>curr+acc,0)
    return sum/arr.length
}

console.log(sumandavg([12,34,56,78]))
//Count odd and even numbers
function countnum(arr){
    let odd=0;
    let even=0;
    for(let ar of arr){
        if(ar%2===0){
            even+=1
        }else{
            odd+=1
        }
    }return [even,odd]
}

console.log(countnum([12,23,3,4,45,56,6]))
//Swapping
function swapping(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }return arr
}

console.log(swapping([12,34,56,78]))
//Add only truthy values in an array

function truthy(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            res[res.length]=arr[i]
        }
    }return res;
}
console.log(truthy([1,2,3,"hello",null,"",-1]))
//generate odd numbers in between 1 and 10 in reverse order
for(let i=9;i>=0;i-=2){
    console.log(i)
}
//Add an element to an array without .push or .unshift
function addElement(arr,val){
    arr[arr.length]=val
return arr;
}
console.log(addElement([12,45,67],89))

function addElem(arr,value){
    for(let i=arr.length;i>0;i--){
        arr[i]=arr[i-1];
        arr[0]=value
    }return arr;
}
console.log(addElem([12,34,56],90))
//Remove the last element of an array without .pop.

//Reverse an array without using built-in methods.
function reverse(arr){
    let arr1=[]
    for(let i=arr.length-1;i>=0;i--){
      arr1[arr1.length] =arr[i] 
    }return arr1;
}
console.log(reverse([12,34,56,78]))
//Merge 2 arrays manually
function merge(arr1,arr2){
    let arr3=[];
    for(let i=0;i<arr1.length;i++){
        arr3[arr3.length]=arr1[i]
    }
        for(let j=0;j<arr2.length;j++){
            arr3[arr3.length]=arr2[j]
        
    }return arr3
}

console.log(merge([12,34,56],[56,78,90]))
//Find if a given element exists in an array (no .includes)
function find(arr,val){
    let isExist=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
             isExist =true;
        }
    }return isExist
}

console.log(find([12,34,56],12))

//First occurance of the target

function occurence(arr,target){
    return arr.indexOf(target)
}
console.log(occurence([12,34,56,12,67],12

))