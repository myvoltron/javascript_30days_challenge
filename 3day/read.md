#3day 정리 

**html label 태그의 for 속성 -** [http://tcpschool.com/html-tags/label](http://tcpschool.com/html-tags/label)

for 속성을 사용해 다른 요소와 결합할 수 있다. 

for 속성값이 결합하고자 하는 요소 id값과 같아야 한다. 

이러한 label 태그의 텍스트를 클릭해도 label 과 연결된 요소를 바로 선택할 수 있어서 편하다. 

**슬라이더바(input type range)의 실시간으로 바뀌는 값을 확인하려면 input 이벤트를 이용하면 된다. -** [https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/input_event](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/input_event) 

input, select, textarea 요소의 value 속성이 바뀔 때마다 발생한다. 

**CSS로 블러효과 - [https://webisfree.com/2019-07-09/css-filter-프로퍼티-사용하여-블러-효과-적용하기-blur](https://webisfree.com/2019-07-09/css-filter-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B8%94%EB%9F%AC-%ED%9A%A8%EA%B3%BC-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-blur)** 

CSS의 filter 프로퍼티를 사용해 포토샵의 일부 효과들을 웹에서도 적용할 수 있다. 

img { filter: blur(값); } - 값이 커질 수록 더 흐릿해져 보임 

**CSS :root 란 ? - [https://designer-ej.tistory.com/entry/CSS-root-가상-클래스로-CSS-변수-다루기](https://designer-ej.tistory.com/entry/CSS-root-%EA%B0%80%EC%83%81-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A1%9C-CSS-%EB%B3%80%EC%88%98-%EB%8B%A4%EB%A3%A8%EA%B8%B0)**

CSS로 디자인을 할 때, 통일성을 위해 동일한 값을 자주 쓰게 되는데 이 때 유지보수를 쉽게 하기위해 :root 가상 클래스를 쓴다. 

:root를 사용해 최상위 요소에 변수를 선언하면 모든 요소에서 이 변수를 사용할 수 있다. 따라서 한번에 수정하기 용이하다. 

변수 선언은  —이름: 속성 값 이런식으로 하는데 

예를 들어 

```css
:root {
—color-black: #3f454d;
}
```

변수 사용은 var() 로 소괄호안에 속성 값을 입력한다. 

예를 들어 

```css
.item {

background-color: var(—color-black);

}
```

**Document.documentElement - document의 root element를 반환 -** [https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement) 

**style.setProperty(propertyName, value, priority); - [https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)** 

CSS 프로퍼티 설정을 할 수 있다. 

value와 priority는 옵션 값이다.

