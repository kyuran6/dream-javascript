// Bubbling up, Propagating
function a() {
  throw new Error('error!');
}

function b(){
  // try{              // 제일 근접한 곳에서 에러 잡기
  //   a();
  // } catch(error){
  //   console.log(error);
  // }
  try{
    a();
  } catch(error){
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw error; // 잡은 에러를 다시 throw
  }
}

function c(){
  b();
}

try{
  c();
} catch (error) {
  console.log('Catched!'); // 에러가 최종적으로 잡힘
}
console.log('done!');