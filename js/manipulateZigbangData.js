import data from './zigbangData';
import _ from 'lodash';

// Simple Exercise #1
const answerOne = data.items.filter((room) => {
  if (room.item.agent_no === 26002) return true;
  return false;
}).length


console.log(answerOne);

// Simple Exercise #2
let mostExpensive = 0;

data.items.forEach((room) => {
  if (room.item.deposit > mostExpensive) {
    mostExpensive = room.item.deposit;
  }
})

console.log(mostExpensive);

// Simple Exercise #3
let mostExpensiveRent = 0;

data.items.forEach((room) => {
  if (room.item.rent > mostExpensiveRent) {
    mostExpensiveRent = room.item.rent;
  }
})

console.log(mostExpensiveRent);

// Simple Exercise #4
const answerFour = data.items
  .map(room => {
    return room.item.view_count;
  })
  .reduce((room1, room2) => {
    return room1 + room2;
  })

console.log(answerFour);

// Challenging Exercise #1
const roomsList = _.filter(data.items, (room) => {
  return room.item.rent >= 70;
})

const roomsLocalList = _.map(roomsList, (room) => {
  return room.item.local3;
})

const uniqueLocalList = _.uniq(roomsLocalList);

const finalAnswer = uniqueLocalList.map((local) => {
  return {
    name: local,
    count: _.filter(roomsList, (room) => room.item.local3 === local).length,
  }
})

console.log(finalAnswer);
