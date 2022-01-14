const permutation = {
  basicPermuation : (inputArr, num) => {
    /* 
      basicPermuation:
        배열 inputArr가 주어졌을 때 num개를 뽑아 나열할 수 있는 모든 경우의 수를 리턴하라.
       
        * 예시
        var inputArr = [1, 2, 3, 4]
        var num = 3
        [
          [1, 2, 3], 
          [1, 2, 4], 
          [1, 3, 2],
          [1, 3, 4], 
          [1, 4, 2],
          [1, 4, 3],

          [2, 1, 3],
          [2, 1, 4],
          [2, 3, 1],
          [2, 3, 4],
          [2, 4, 1],
          [2, 4, 3],

          [3, 1, 2],
          [3, 1, 4],
          [3, 2, 1],
          [3, 2, 4],
          [3, 4, 1],
          [3, 4, 2],

          [4, 1, 2],
          [4, 1, 3],
          [4, 2, 1],
          [4, 2, 3],
          [4, 3, 1],
          [4, 3, 2]
        ]
        .. 이므로 총 4 * 3 * 2 * 1 = 24
    */
    
    // TODO : 여기부터 코드 작성
    
    let answer = 0;
    return answer
  },

}

module.exports = permutation;