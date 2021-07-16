#2day 정리 

start버전이 내가 만든 것 
finished버전이 완성본 

- 자바스크립트로 css transform속성  다루기

obj.style.transform = ""; 이런식으로 transform속성을 다룰 수 있다. 

예를 들어 

obj.style.transform = "rotate(30deg)"; 

- transform속성 기준점 설정하기 - [https://mjmjmj98.tistory.com/41](https://mjmjmj98.tistory.com/41)

transform에는 다양한 속성 값들 - 대표적으로 translate, rotate, scale 등 - 이 있는데 사용하다 보면 기준점을 정해야 할 때가 있다. 그것을 정할 수 있는 속성이 바로 transform-origin 이다. 

```css
transform-origin: x-axis
transform-origin: x-axis y-axis 
transform-origin: x-axis y-axis z-axis;
```

이런식으로 사용할 수 있다. 

예를 들어 

transform-origin: 100% 를 하였다면 해당 객체의 x축 기준 가장 오른쪽을 기준점으로 잡는 다는 것이다. 

- margin: 50px auto; /*위 아래 여백은 50px로 주고 좌우여백은 균등하게 배분한다는 뜻이다. */
- cubic-bezier - [https://kutar37.tistory.com/entry/CSS-cubic-bezier란](https://kutar37.tistory.com/entry/CSS-cubic-bezier%EB%9E%80)

cubic-bezier() 함수는 transition이나 transition-timing-function 속성에서 전환하는데 시작과 끝까지의 효과를 제어하는 데 쓰인다. 

cubic-bezier(<float>x1, <float>y1, <float>x2, <float>y2) 

이런식으로 1보다 작은 값들을 인자값으로 넘겨주게 되는데 이걸 통해 베지어 곡선이라는 것이 형성된다고 한다. 이 베지어 곡선에 따라서 전환되는데 중간중간 속도가 바뀌게 되고 일정하게 바뀔 수도 있다. 

예를 들어, transition-duration을 2s로 줬다고 하면 이 2초동안 전환이 될 때 처음에는 느리게 전환되다가 나중에는 빠르게 전환될 수도 있다는 것이다. 

이렇게 역동적인 애니메이션을 만들 수도 있는것이다. 

하지만 이 값을 일일이 계산하기 어려우니 기본적으로 정해져 있는 키워드가 있다. 

1. ease(default) : 처음과 끝은 느리고 중간은 빠르게 
2. linear : 직선 - 일정
3. ease-in : 처음은 느리고 갈수록 빨라짐 
4. ease-out : 처음은 빠르고 갈수록 느려짐 
5. ease-in-out : ease와 유사하지만 더 부드럽다
- box-shadow - [https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)

box-shadow는 요소의 테두리를 감싼 그림자 효과를 추가한다. 

공식문서 예제 

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* Global keywords */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```
