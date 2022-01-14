const basicPermuation = (inputArr, num) => {
  const permutation = (array, num) => {
    let result = [];

    if (num === 1) return array.map(el => [el]);

    array.forEach((el, idx, arr) => {

      const fixer = el;
      const restArr = arr.filter((_, index) => {
        // el 로 비교하면 배열이므로 무조건 false
        return index !== idx;
      })
      const permutateRest = permutation(restArr, num - 1);
      const combineFixer = permutateRest.map(e => [fixer, ...e]);

      result.push(...combineFixer);
    })

    return result;
  };
  
  let answer = permutation(inputArr, num).length;
  return answer
}

const basicCombination = (inputArr, num) => {
  // TODO : 여기부터 코드 작성

  const combination = (array, num) => {
    let result = [];

    if (num === 1) return array.map(el => [el]);

    array.forEach((el, idx, arr) => {
      const fixer = el;
      const restArr = arr.slice(idx + 1);
      const combinateRest = combination(restArr, num - 1);
      const combineFixer = combinateRest.map(e => [fixer, ...e]);

      result.push(...combineFixer);
    })

    return result;
  };
  
  let answer = combination(inputArr, num).length;
  return answer
}