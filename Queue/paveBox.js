

function paveBox(boxes) {
  let people = [];
  let i = 0;

  if (boxes.length <= 1) {
    return boxes.length;
  }

  while (i < boxes.length) {
    let cur = boxes[i];
    let count = 1;
    for (let j = i + 1; j < boxes.length ; j++) {
      i = j - 1
      if (cur >= boxes[j]) {
        count ++;
      } else {
        people.push(count);

        break;
      }
      if (j === boxes.length - 1) {
        people.push(count);
      }
    }
    i ++;
  }

  return Math.max(...people);
  
}


module.exports = paveBox;


