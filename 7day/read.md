#7day

**some() -** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 

배열안의 최소 하나 이상의 요소가 주어진 콜백함수를 통과하는지 여부를 테스트한다. 통과 시 true반환 

// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )

**every() -** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 

배열내의 모든 요소가 주어진 콜백함수를 통과하는지 여부를 테스트한다. 통과 시 true반환 

// Arrow function
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

**find() -** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 

filter()와 비슷한 메서드이다. 

배열에서 주어진 함수를 통과하는 제일 처음 요소를 반환한다. 

// Arrow function
find((element) => { ... } )
find((element, index) => { ... } )
find((element, index, array) => { ... } )

**findIndex() -** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 

배열에서 주어진 함수를 통과하는 제일 처음 요소의 Index를 반환한다. 반면에, 찾을 수 없다면 -1을 반환한다. 

// Arrow function
findIndex((element) => { ... } )
findIndex((element, index) => { ... } )
findIndex((element, index, array) => { ... } )

**spread ... -** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 

한국어로 전개구문 

배열이나 문자열 등을 0개 이상의 인수나 요소로 확장한다. 

**몇 가지 예제**

function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args); 

🔽

function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

**splice() -** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 

배열의 요소들을 제거하거나 대체하면서 새로운 요소를 추가

**문법**

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

start는 배열 change가 시작되는 곳의 Index 

deleteCount는 start로 부터 제거해야하는 요소의 수를 지칭 

item1, item2, ... 는 배열에 추가할 요소들. 따로 이러한 요소를 특정하지 않으면 splice는 배열의 요소를 제거하는데만 쓰이게 된다. 

**반환값**

제거된 요소들이 포함된 배열을 반환한다. 

**예제1**

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

**예제2**

let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
