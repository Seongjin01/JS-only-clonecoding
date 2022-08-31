# onlyJS clone-coding

```youtube에서 노마드코더(nomad coder)로 활동중인 니콜라스쌤의 JS만 써서 간단한 웹을 만드는 클론코딩입니다.```

[참고 사이트(Nomad Coders)](https://nomadcoders.co/)

완성된 화면 

<img width="1680" alt="image" src="https://user-images.githubusercontent.com/102296551/186579952-1fed448a-3075-451d-8373-74269c6abab0.png">

# index.html

```JS로 여러 기능들을 만들어 추가하였기 때문에 script를 import 시켜주는 코드들을 넣어주었고,``` <br>
<img width="287" alt="image" src="https://user-images.githubusercontent.com/102296551/187584577-310c12e7-9886-4949-a41f-c081108a3d0a.png">


```
css를 적용시켜주었고,
js를 실행시켜줄 div와 form을 만들어주었습니다.
```
<br>
<img width="592" alt="image" src="https://user-images.githubusercontent.com/102296551/187584767-60ba241a-1f1a-4d45-b011-3624256ff989.png">

# style.css

```
css는 각 기능들을 표현하여 줄 텍스트의 위치와 색을 정해주었습니다.
```

```css
.hidden {
    display: none;
}
#greeting {
    text-align: center;
    color: white;
}

#clock {
    text-align: center;
    font-size: 120px;
    color: white;
}

#login-form {
    text-align: center;
}

#todo-form {
    margin-top: 20px;
    text-align: center;
}

#todo-list {
    text-align: center;
}

#quote {
    text-align: center;
    color: white;
}
ul, li {
    list-style: none;
}

#todo-list, li, button {
    border: none;
    background: none;
    color: white;
}

#quote {
    position: absolute;
    bottom: 5%;
    left: 0%;
    right: 0%;
    color: white;
    font-size: 20px;
}

#weather {
    margin-top: 20px;
    margin-left: 20px;
    color: white;
}

input {
    font-size: 30px;
    background: none;
    border: none;
    color: white;
}
input::placeholder {
    color: white;
    font-size: 30px;
    text-align: center;
}
```

# clock.js
```
우선 setInterval 이라는 함수를 써서 1000ms, 즉 1초마다 getClock이라는 함수를 받아오게 하였습니다.
getClock에서는 각각 getHours, getMinutes를 써서 시간과 분을 받아왔습니다. 또 받아온 시간을 String형으로 바꿔주고,
만약 받아온 숫자가 2자리수가 아닌 1자리수면 padStart를 이용하여 0으로 시작하게 만들어주었습니다.
이렇게 받아와서 다른 것들을 추가한 시간을 innerText를 이용하여 h2에 넣어주었습니다.
```
<img width="514" alt="스크린샷 2022-08-31 오후 12 17 07" src="https://user-images.githubusercontent.com/102296551/187585094-0ef99a8f-abbe-45d3-afd8-b789c370bf6f.png">

# greetings.js
```
js는 오류가 발생하여도 사용자에게 잘 알려주지 않지만, const로 선언한 상수는 틀리게되면 어느정도 지적을 해줍니다.
그래서 절대 틀려선 안되는 hidden, username은 const로 선언함으로써 틀리지 않도록 선언해주었습니다.

웹에서 지원하는 기본 기능들은 웹을 개발하는 사람이 직접 제어할 수 있습니다. 바로 event.preventDefault()를 사용하면 기본값(Default)을 제어할 수 있습니다.

아래 코드의 전체적인 내용은, 아이디가 login-form인 form에 텍스트 벨류값 즉 username이 비어있다면 loginform의 hidden class를 제거해주고, 
만약 채워져있다면 hidden class를 add해서 loginform을 없애줍니다.(안보이게)

그리고 if 문에서 else의 상황이면 paintGreetings function을 사용해서 localStorage에 있는 username을 불러와 띄워줍니다.
```

<img width="514" alt="스크린샷 2022-08-31 오후 12 17 07" src="https://user-images.githubusercontent.com/102296551/187585707-31e4b1ec-659e-49c6-b135-716812feafec.png">

# quotes.js

```
명언으로 이루어진 배열을 하나 선언해주었습니다.
또한 상수 quote와 author 만들어 각각 first-child, last-child로 지정해 주었습니다.
여러 명언중 하나를 랜덤으로 뽑기 위해서 Math.random을 사용하였고, .length를 사용하여 배열읠 길이만큼 랜덤으로 돌렸습니다.(10개면 10개중 하나)
그리고 random은 소수값까지 랜덤으로 뽑아오기때문에 Math.floor을 사용하여 소수점이 나와도 정수의 값만 뽑아오도록 하였습니다.(5.435115436 = 5)

그리고 innerText로 span에 잘 넣어주었습니다.
```

<img width="538" alt="스크린샷 2022-08-31 오후 12 40 13" src="https://user-images.githubusercontent.com/102296551/187587629-6d387e8c-f1b3-4726-8d0d-eb54de824f52.png">

# weather.js
```
weather.js는 api를 사용하여 만들었습니다. 현재 경도와 위도로 사용자의 위치, 날씨 정보등을 얻을 수 있습니다.
얻은 날씨와 위치 정보만 사용하여 weather을 만들었습니다.
만약 위치정보를 받을 수 없다면 error를 띄워주도록 onGeoError를 만들었습니다.
```

<img width="538" alt="스크린샷 2022-08-31 오후 12 40 13" src="https://user-images.githubusercontent.com/102296551/187587629-6d387e8c-f1b3-4726-8d0d-eb54de824f52.png">

# todo.js

```
todo리스트는 username과 동일하게 localStorage에 저장되도록 만들었지만, 삭제 시 버튼은
자기가 없애야 할 todo를 알 수 없기 때문에 localStorage에 저장되는 todo value에 각각 id값을 주었습니다.
주어진 id는 Date.now()를 사용해서 완전 각각 다른 값을 줄 수 있게 해주었고,
button을 눌렀을 때 받은 event는 id를 찾아서 각각 맞는 id를 가진 todo를 localStorage에서 지워줍니다.
```

<img width="511" alt="image" src="https://user-images.githubusercontent.com/102296551/187589545-2c06f26a-ffc7-4fa1-97f6-c933bdf06f4b.png">






