let pro = 0;
let point = 0;
let result = 0;
let message = "";
function test1() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('test1').style.display = 'block';
    //alert(document.getElementsByName('test1c').length);
}
function test1co() {
  pro = document.getElementsByName('test2c').length;
  point = 0;
  for (var i=0; i<pro; i++) {
      if (document.getElementsByName("test2c")[i].checked == true) {
          point += 1;
      }
  }
  result = Math.round(point / pro * 1000) / 10;
  document.getElementById('test1').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  message = ""

  if(result <= 20){
    message = "결과 : 당신은 그 사람을 <br><p style='font-size : 45px; color:orange;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:orange; font-family : '>아직은 관심을 가지고 있지 않는, 그냥 아는 사람의 관계군요! 이 마음 유지해서 솔로의 길을 걸으세요!</p><button type='button' class='btn btn-info' onclick='share1();'>결과 공유</button><br />"

  }
  else if(result <= 50){
    message = "결과 : 당신은 그 사람을 <br><p style='font-size : 45px; color:skyblue;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:skyblue; font-family : '>점점 관심을 가지고 있지만, 아직 적극적으로 표출하거나 사랑으로 발전하지 않은 단계입니다! 한 달 후에 재검사 어떤가요?</p><button type='button' class='btn btn-info' onclick='share1();'>결과 공유</button><br />"

  } else if(result <= 75){
    message = "결과 : 당신은 그 사람을 <br><p style='font-size : 45px; color:green;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:green; font-family : '>그 사람에게 관심을 가졌고, 사랑의 감정으로 발달하고 있군요! 100점이 아니라고 사랑하지 않는 것이 아닙니다. 다음에 만날 때는 고백해보는 거 어떤가요?</p><button type='button' class='btn btn-info' onclick='share1();'>결과 공유</button><br />"

  } else if(result <= 100){
    message = "결과 : 당신은 그 사람을 <br><p style='font-size : 45px; color:blue;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:blue; font-family : '>사실상 완벽한 사랑 중! 하지만 높은 점수라고 무조건 사랑은 아닐 수 있어요! 만약 집착이나 소유욕을 가지고 있다면 스스로를 돌아보고 고백해보는 건 어떤가요?</p><button type='button' class='btn btn-info' onclick='share1();'>결과 공유</button><br />"

  }
  document.getElementById('result').innerHTML = message;
}
function test2() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('test2').style.display = 'block';
    //alert(document.getElementsByName('test1c').length);
}
function test2co() {
  pro = document.getElementsByName('test1c').length;
  point = 0;
  for (var i=0; i<pro; i++) {
      if (document.getElementsByName("test1c")[i].checked == true) {
          point += 1;
      }
  }
  result = Math.round(point / pro * 1000) / 10;
  document.getElementById('test2').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  message = "";

  if(result <= 20){
    message = "결과 : 그 사람은 당신을 <br><p style='font-size : 45px; color:orange;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:orange; font-family : '>아직은 아는 사람 정도의 관계입니다! 만약 연예인을 넣고 돌리지 않았다면 말이죠!</p><button type='button' class='btn btn-info' onclick='share2();'>결과 공유</button><br />"

  }
  else if(result <= 50){
    message = "결과 : 그 사람은 당신을 <br><p style='font-size : 45px; color:skyblue;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:skyblue; font-family : '>그 사람이 당신에게 관심을 가지고 있거나, 호감을 가진 것이 분명합니다! 하지만 사랑이 아닐 수도 있으니 섣부른 판단은 금물!</p><button type='button' class='btn btn-info' onclick='share2();'>결과 공유</button><br />"

  } else if(result <= 75){
    message = "결과 : 그 사람은 당신을 <br><p style='font-size : 45px; color:green;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:green; font-family : '>당신을 사랑하고 있는 것 같군요! 100점이 아니라고 사랑하지 않는 것이 아닙니다. 그 사람에 대한 나의 생각을 정리해보세요!</p><button type='button' class='btn btn-info' onclick='share2();'>결과 공유</button><br />"

  } else if(result <= 100){
    message = "결과 : 그 사람은 당신을 <br><p style='font-size : 45px; color:blue;'>" + result + "%</p>만큼 사랑합니다! <p style='font-size : 25px; color:blue; font-family : '>사실상 완벽한 사랑 중! 하지만 높은 점수라고 무조건 사랑은 아닐 수 있어요! 집착이나 소유욕을 가진 사람일 수도 있으니 한 번 잘 살펴보세요!</p><button type='button' class='btn btn-info' onclick='share2();'>결과 공유</button><br />"

  }
  document.getElementById('result').innerHTML = message;
}

function share1(){
  var tempElem = document.createElement('textarea');
  let passre = ((result * 10) + 231) * 21
  tempElem.value = "https://coshaman.github.io/testLove/share.html?re:"+passre+":case:0";
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
  alert('공유 링크 복사 완료! 친구들에게 마음껏 공유해보세요!');

}
function share2(){
  var tempElem = document.createElement('textarea');
  let passre = ((result * 10) + 231) * 21
  tempElem.value = "https://coshaman.github.io/testLove/share.html?re:"+passre+":case:1";
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
  alert('공유 링크 복사 완료! 친구들에게 마음껏 공유해보세요!');
}
