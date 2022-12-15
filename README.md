# 당근 받아 먹는 토끼 게임

리액트로 구현된 [바나나 먹는 미니언 게임](https://fe-developers.kakaoent.com/2022/220830-simple-canvas-game/)을 바닐라 js를 이용해 모션이 부드러운 간단 게임 만들어 보기.

## 기능들

- [x] 화살표 <- -> 좌우 키를 이용해 움직인다
- [x] 하늘에서 당근이 랜덤한 위치에서 떨어진다
- [x] 토끼가 받으면 당근은 사라지고 스코어 +1
- [x] 토끼가 못 받고 바닥에 떨어지면 당근은 사라지고 스코어 -1
- [x] 게임 버튼을 통해 플레이 스탑 리셋시킨다
- [ ] 토끼가 프레임 안에서만 움직이게 한다

## 그 외

움직이는 모션은 `requestAnimationFrame` 함수를 활용해 적용해 본다.  
기능별로 역할에 맞게 코드 리팩토링 해 본다.

PlayGame.js

- 키보드 이벤트 관련 코드
- play, stop, reset 메서드
- 게임 룰 관련 코드

Carrot.js

- 당근 렌더링 코드
- 당근들 위치 담는 배열
- 당근들 리셋 코드

moveRabbit.js

- 토끼 렌더링 코드
- 토끼 위치 가져오는 메서드
- 토끼 움직이는 메서드
- 토끼 리셋 코드
- Rabbit 클래스에서 상속받았는데 간단한 코드라 토끼 클래스 추상화시킬 필요는 없을 것 같다
