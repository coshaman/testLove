function test1() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('test1').style.display = 'block';
    //alert(document.getElementsByName('test1c').length);
}
function test1co() {
  let pro = document.getElementsByName('test2c').length;
  let point = 0;
  for (var i=0; i<pro; i++) {
      if (document.getElementsByName("test2c")[i].checked == true) {
          point += 1;
      }
  }
  let result = Math.round(point / pro * 1000) / 10;
  document.getElementById('test1').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = "결과 : 당신은 그 사람을 <br><p style='font-size : 45px;'>" + result + "%</p>만큼 사랑합니다!";
}
function test2() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('test2').style.display = 'block';
    //alert(document.getElementsByName('test1c').length);
}
function test2co() {
  let pro = document.getElementsByName('test1c').length;
  let point = 0;
  for (var i=0; i<pro; i++) {
      if (document.getElementsByName("test1c")[i].checked == true) {
          point += 1;
      }
  }
  let result = Math.round(point / pro * 1000) / 10;
  document.getElementById('test2').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = "결과 : 그 사람은 당신을 <br><p style='font-size : 45px;'>" + result + "%</p>만큼 사랑합니다!";
}
