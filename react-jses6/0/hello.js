function hello() {
    console.log("Hello World!");
}

// alert(user);

// import 후 기존 alert 에도 에러가 없어진 것을 보니, import 는 자동으로 먼저 선언되는 듯 하다. 아니면, 호이스팅 느낌. 추측임.
import {user} from './user.js';
document.body.innerHTML = user;
