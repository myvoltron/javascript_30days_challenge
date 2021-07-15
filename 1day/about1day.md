html - kbd태그 - [https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd](https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd)

키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다.

html - data-* 속성 - [https://mygumi.tistory.com/341#:~:text=data 속성은 HTML 요소,저장한다고 생각하면 된다](https://mygumi.tistory.com/341#:~:text=data%20%EC%86%8D%EC%84%B1%EC%9D%80%20HTML%20%EC%9A%94%EC%86%8C,%EC%A0%80%EC%9E%A5%ED%95%9C%EB%8B%A4%EA%B3%A0%20%EC%83%9D%EA%B0%81%ED%95%98%EB%A9%B4%20%EB%90%9C%EB%8B%A4).

data-* 속성은 표준이 아닌 속성이나 추가적인 DOM속성 등 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.  어느 엘리먼트에서나 data-로 시작하는 속성을 추가할 수 있습니다.  자바스크립트에서 getAttribute()나 dataset.* 으로 읽어낼 수 있습니다. 

자스 - 키보드 이벤트 - [https://hianna.tistory.com/496](https://hianna.tistory.com/496)

대표적으로 keydown, keyup, keypress 등이 있고 document.addEventListener('~',  ~)를 통해서 쓸 수 있다. 키보드 이벤트 객체에서는 key속성, code속성 등이 있다. 

자스 - 오디오 객체 얻어서 실행시키기 - [https://curryyou.tistory.com/337](https://curryyou.tistory.com/337)  

객체를 얻어내서 play() 메서드를 사용하면 된다 ex) audioObj.play() 

자바스크립트 classList - [https://velog.io/@rimu/자바스크립트-classList.add-remove-contains-toggle](https://velog.io/@rimu/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-classList.add-remove-contains-toggle) 

classList를 이용하면 클래스를 조작하는 다양한 메서드들을 쓸 수 있다.
classList.add : 클래스를 필요에 따라 삽입한다.
classList.remove : 클래스를 필요에 따라 제거한다.

transitionend 이벤트 - [http://www.w3bai.com/ko/jsref/event_transitionend.html](http://www.w3bai.com/ko/jsref/event_transitionend.html) 

CSS 전환이 완료되면 transitionend 이벤트가 반환됩니다.
