


function iterate(max, action){
  for(let i=0; i<max; i++){
  action(i);
  }
}

function log(a){
  console.log(a);
}

function doubleAndLog(a){
  console.log(a * 2);
}
iterate(3, (a)=>console.log(a));
iterate(3, (a)=>console.log(a*2));

setTimeout(()=>{
  console.log('1초뒤 이 함수 실행될에거요');
}, 1000);