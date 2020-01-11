const arraySamples = [3,10,15,25,11,19];
const filteredScores =arraySamples.filter((scores)=>{
    return scores >15;
});
console.log('returns all score greater than 15', filteredScores);

const mappedScores = arraySamples.map((mapped)=>{
    return mapped/2;
});
console.log('returns the half of each elements in an array--->', mappedScores);


