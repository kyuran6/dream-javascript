// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

// function changeColor(bb) {
//   console.log(bb.name);
//   console.log(bb.styles);
// }
// changeColor(prop);

function changeColor({styles: {color}}){
  console.log(color);
}
changeColor(prop);