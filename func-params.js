// Modify the code here
// ======================

const calculateAverageRating = (tab) => {
 
  let somme = 0 //somme des elements du tab 
  let longeur = tab.length
  
  if(longeur === 0) return 0 
  
  for(let i in tab){
    if(i ===2){
      return 0
    }
    somme =+ tab[i]
  }
//  const total = somme / longeur 
  return somme / longeur
  }

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
}
