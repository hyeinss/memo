let input = document.getElementById("memo-input");
let button = document.getElementById("memo");
let list = document.getElementById("memo-list");

// 버튼 클릭했으 때 input에 적힌 글자 가져와서
// li태그 생성 후, ul태그에 추가

button.addEventListener('click', function () {
  console.log("click")
  let memo = input.value;

  // 만약에 memo에 아무것도 없는 게 아니라면?
  if (memo != "") { //null 과 emptyString = null(공간 자체가 없는 것) / 0(데이터가 공란)
    let li = document.createElement("li");
    li.innerText = memo;
    li.style.cursor = "pointer"; // 커서 바꾸기

    // span 태그 생성!
    let span = document.createElement("span");
    span.innerText = new Date().toLocaleString(); // 현재 날짜와 시간 가져오는 명령
    span.style.float = "right";
    li.appendChild(span); //span을 li에 추가

    list.appendChild(li); //list태그에 자식노드로 추가하기

    //li태그를 삭제하고 싶다면? 부모노드.removchild();
    li.addEventListener("click", function () {
      // alert = 버튼이 "확인"
      // confirm = "확인", "취소"
      let ok = confirm("기록을 삭제 하시겠습니까?"); //사용자가 확인을 누르면 true, 취소는 false

      if (ok == true) {
        li.parentNode.removeChild(li);
      }
    });

    input.value = ""
  }
});