#2day 정리 

start버전이 내가 만든 것 
finished버전이 완성본 

- 자바스크립트로 css transform속성  다루기
- transform속성 기준점 설정하기 - [https://mjmjmj98.tistory.com/41](https://mjmjmj98.tistory.com/41)
- margin: 50px auto; /*위 아래 여백은 50px로 주고 좌우여백은 균등하게 배분한다는 뜻이다. */
- cubic-bezier - [https://kutar37.tistory.com/entry/CSS-cubic-bezier란](https://kutar37.tistory.com/entry/CSS-cubic-bezier%EB%9E%80)
- transform: rotate(90deg);

/*

transition을 활용한 단순한 애니메이션

transition: <property - 트랜지션을 적용해야 하는 CSS 속성의 이름 혹은 이름들을 명시> <duration - 트랜지션이 일어나는 지속 시간을 명시> <timing-function> <delay>; //단축 프로퍼티

transition-timing-function - 속성의 중간값을 계산하는 방법을 정의하는 함수

cubic-bezier(<float>x1, <float>y1, <float>x2, <float>y2)

<float>x1필수

베지어 곡선의 시작점을 만드는 핸들의 0~1사이의 x 좌표 값

<float>y1필수

베지어 곡선의 시작점을 만드는 핸들의 0~1사이의 y 좌표 값

<float>x2필수

시작점에서 끝점을 잇는 곡선을 만드는 핸들의 0~1사이의 x 좌표 값

<float>y2필수

시작점에서 끝점을 잇는 곡선을 만드는 핸들의 0~1사이의 y 좌표 값

*/

transition: all 0.05s;

transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
- box-shadow - [https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)
