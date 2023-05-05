import add from "./utility-module/add.js";
import minus from "./utility-module/minus.js";
import divide from "./utility-module/divide.js";
import multiply from "./utility-module/multiply.js";

const a = 10;
const b = 20;

console.log(new add().add(a, b).getResult());
console.log(new minus().minus(a, b).getResult());
console.log(new divide().divide(a, b).getResult());
console.log(new multiply().multiply(a, b).getResult());

//* Q2 a와 b를 인자로 받아서 typeof로 정수인지 판별 후에 return 해주고 다른 함수가 
//* 그 반환값의 조건문에서 판별하여 나올 수 있게 하면 된다고 생각합니다.
//* 함수 add()에서 반복되는 코드가 없기 떄문에 좋다고 생각합니다.
//* helper method를 사용하지 않고도 코드작성이 가능합니다. 하지만 함수하나가 없기 때문에
//* 반복되는 코드들이 생기기 마련입니다.