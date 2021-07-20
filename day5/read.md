#day5

**CSS -  box-sizing 이란 -** [https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing) 

요소의 너비와 높이를 계산하는 방법을 지정 

두가지 값이 있는데 content-box, border-box 입니다. 

content-box : 너비 = 콘텐츠 너비, 높이 = 콘텐츠 높이이고 테두리와 안쪽 여백은 계산하지 않음 

border-box : 너비 = 테두리 + 안쪽 여백 + 콘텐츠 너비, 높이 = 테두리 + 안쪽 여백 + 콘텐츠 높이로 계산 

**CSS - flex: 1 || flex: 1 0 auto 뜻 - flex 축약형 -** [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) 

flex-grow : 모든 항목의 flex-grow 값을 1로 지정하면 사용가능한 공간은 각 항목에 동일하게 적용됨, 

첫 항복의 flex-grow값을 2로 지정하고 나머지를 1로 지정하면 비율이 2:1:1~로 된다. 

flex-shrink:주축의 공간이 부족할때 각 항목의 사이즈를 줄이는 방법을 정의 

flex-basis: 항목의 크기를 결정, 기본값은 auto

우선 flex 축약형의 값은 flex-grow, flex-shrink, flex-basis 순서로 지정됨 

flex: 1 은 flex: 1 1 0 이다. 

**CSS -  :befor 이란  -** [https://developer.mozilla.org/ko/docs/Web/CSS/::before](https://developer.mozilla.org/ko/docs/Web/CSS/::before) 

요소에 장식용 콘텐츠를 추가할 때 사용 

**CSS - :after 이란 -** [https://developer.mozilla.org/ko/docs/Web/CSS/::after](https://developer.mozilla.org/ko/docs/Web/CSS/::after) 

요소에 장식용 콘텐츠를 추가할 때 사용 

**CSS - :first-child 뜻 -** [https://developer.mozilla.org/ko/docs/Web/CSS/:first-child](https://developer.mozilla.org/ko/docs/Web/CSS/:first-child)  

형제 요소 중 제일 첫 요소를 나타냄 

**CSS - :last-child 뜻** - [https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) 

형제 요소 중 제일 마지막 요소를 나타냄 

**CSS - :nth-child() 이란 -** [https://developer.mozilla.org/ko/docs/Web/CSS/:nth-child](https://developer.mozilla.org/ko/docs/Web/CSS/:nth-child) 

형제 사이에서의 순서에 따라 요소를 선택 

**`tr:nth-child(odd)` 또는 `tr:nth-child(2n+1)`**

HTML 표의 홀수번째 행을 나타냅니다.

**`tr:nth-child(even)` 또는 `tr:nth-child(2n)`**

HTML 표의 짝수번째 행을 나타냅니다.

**`:nth-child(7)`**

임의의 7번째 요소를 나타냅니다.

**`:nth-child(5n)`**

**5** [=5×1], **10** [=5×2], **15** [=5×3], **...** 번째의 요소를 나타냅니다. 패턴 공식을 만족하는 첫 번째 값은 **0** [=5x0]으로서 아무 요소도 선택하지 않는데, 요소의 인덱스는 1부터 시작하지만 `n`은 0부터 증가하기 때문입니다. 다소 의아할 수 있으나, 바로 아래 예제처럼 공식의 B 부분이 >0인 경우 보다 납득하기 쉬워집니다.

**`:nth-child(n+7)`**

7번째와 그 이후의 모든 요소, 즉 **7** [=0+7], **8** [=1+7], **9** [=2+7], **...** 를 나타냅니다.

**`:nth-child(3n+4)`**

**4** [=(3×0)+4], **7** [=(3×1)+4], **10** [=(3×2)+4], **13** [=(3×3)+4], **...** 번째의 요소를 나타냅니다.

**`:nth-child(-n+3)`**

앞에서 세 개의 요소를 나타냅니다. [=-0+3, -1+3, -2+3]

**`p:nth-child(n)`**

형제 그룹 내의 모든 `<p>` 요소를 나타냅니다. 단순한 `p` 선택자와 동일하지만 더 높은 [명시도](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)를 가집니다.

**`p:nth-child(1)` 또는 `p:nth-child(0n+1)`**

형제 그룹 내의 모든 첫 번째 `<p>` 요소를 나타냅니다. `[:first-child](https://developer.mozilla.org/ko/docs/Web/CSS/:first-child)` 선택자와 동일하며 같은 [명시도](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)를 가집니다.

**`p:nth-child(n+8):nth-child(-n+15)`**

형제 그룹 내에서 8번째부터 15번째 까지의 `<p>` 요소를 나타냅니다.  

**CSS - text-transform 이란 -** [https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) 

문자를 변환시키는 속성 

none : 기본값 

capitalize : 각 단어의 첫번째 문자를 대문자로 만듦 

uppercase : 대문자로 바꿈 

lowercase : 소문자로 바꿈 

**자바스크립트 - .includes() 메서드 -** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 

인자로 준 값이 배열에 있다면 true, 아니라면 false 값을 반환한다. 

**자바스크립트 - .toggle() 메서드 -** [https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)  

스위치같은 함수 

보통 classList와 함께 이용해서 css style을 준 클래스명을 on off 한다.
