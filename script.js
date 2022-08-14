// ------SUM OF DISTINCT ELEMENTS :  SOLUTION 1 : ARRAYS ------------

var set1 = [3, 1, 7, 9]
var set2 = [2, 4, 1, 9, 3]




function sommedistinct(tab1,tab2) {
  var tab = [...tab1,...tab2]
  var sum = 0;
  for (let i = 0; i < tab.length; i++) {
    for (let j = i+1; j < tab.length; j++) {
      if (tab[i] == tab[j])
       { tab[i]=0;
         tab[j]=0;        
            }   
    }
   
    sum += tab[i]
  }
  return (sum)
  }


console.log(sommedistinct(set1,set2))

// ------SUM OF DISTINCT ELEMENTS :  SOLUTION 2 : HASH TABLE -----------


let hash = new Map();

function SumDistinct(A, B) {

  for (let i = 0; i <A.length; i++) {
    
    if (hash.has(A[i])) {
      hash.set(A[i], 1 + hash.get(A[i]));
    }
    else
      hash.set(A[i], 1);
  }

  for (let i = 0; i < B.length; i++) {


    if (hash.has(B[i]))
      hash.set(B[i], 1 + hash.get(B[i]));
    else
      hash.set(B[i], 1);
  }

  let sum = 0;
  //we will get tables containes of 2 index the number and the number of his iteration
  for (let entry of hash) {
    // need to acces to the iteration numbers of each number
    if (parseInt((entry[1]).toString()) == 1)
      sum += parseInt((entry[0]).toString());
  }
  console.log(sum);
  return sum;

}


var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];



// function call
document.write(SumDistinct(set1, set2));






// ------SUM OF OVERLAPPING ELEMENTS :  SOLUTION 1 : ARRAYS ------------


var set1 = [12, 13, 6, 10]
var set2 = [13, 10, 16, 15]


function sommeoverlap(tab1, tab2) {
  var tab = [...tab1, ...tab2]
  var sum = 0;
  for (let i = 0; i < tab.length; i++) {
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[i] == tab[j]) {
      
    sum+= tab[i] *2
      }
    }
  }
  return (sum)
}


console.log(sommeoverlap(set1, set2))

// ------SUM OF OVERLAPPING ELEMENTS :  SOLUTION 2 : HASH TABLE ------------


// let hash = new Map();

function SumOverlap(A, B) {

  for (let i = 0; i < A.length; i++) {

    if (hash.has(A[i])) {
      hash.set(A[i], 1 + hash.get(A[i]));
    }
    else
      hash.set(A[i], 1);
  }

  for (let i = 0; i < B.length; i++) {


    if (hash.has(B[i]))
      hash.set(B[i], 1 + hash.get(B[i]));
    else
      hash.set(B[i], 1);
  }

  let sum = 0;
  //we will get tables containes of 2 index the number and the number of his iteration
  for (let entry of hash) {
    // need to acces to the iteration numbers of each number
    if (parseInt((entry[1]).toString()) > 1)
      sum += parseInt((2*entry[0]).toString());
  }
  console.log(sum);
  return sum;
 

}


var set1 = [12, 13, 6, 10]
var set2 = [13, 10, 16, 15]



// function call
document.write(SumOverlap(set1, set2));




