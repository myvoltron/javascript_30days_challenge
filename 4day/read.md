#4day

**em태그 - 강조된 텍스트를 표현할 때 사용 -** [http://tcpschool.com/html-tags/em](http://tcpschool.com/html-tags/em)

**Array.prototype.filter() -**[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 

주어진 함수의 조건을 통과하는 배열의 모든 요소들을 모아 새로운 배열을 반환

배열의 각 요소들에 대해 한번 callback함수가 주어지고, 콜백함수가 true를 반환하는 각 요소들의 새로운 배열을 반환합니다. 

**Array.prototype.map() -** [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

map은 콜백함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만든다. 

**Array.prototype.sort() -** [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 

배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환 

매개변수로 compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니코드 순으로 문자열을 정렬합니다. 

compareFunction이 제공되면 배열 요소들은 이 함수의 반환값에 따라서 정렬됩니다. a, b가 비교되는 요소라면, 

compareFunction(a, b)에서 

0보다 작은 값 반환 → a가 먼저 나옴 

0보다 큰 값 반환 → b가 먼저 나옴 

**Array.prototype.reduce() -** [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 

배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환

reduce() 함수는 크게 두 가지 매개변수를 받습니다 : callback함수와 initialValue입니다. 

Callback함수에서도 네 가지 인수를 받습니다 

accumulator : 누산기는 콜백의 반환값을 누적합니다.

currentValue : 처리할 현재 요소

currentIndex : 처리할 현재 요소의 인덱스 

arrya : reduce()를 호출한 배열  

initialValue는 callback의 최초 호출에서 첫 번째 인수에 주는 값입니다. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 

**console.table() - 테이블 형태로 표시한다.**
