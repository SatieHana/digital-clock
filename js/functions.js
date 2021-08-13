$(function () {

  //   setInterval(function(){
  // // console.log(1)←1が〇回処理されているよ
  //   }, 1000);
  //  ＊1000 = 1秒


// ページが読み込まれた際に時間を設定
  setTime();



  setInterval(function () {
// 1秒ごとに時間を設定
    setTime();
  }, 1000);


  // 時間を更新する関数
  function setTime(){

    const now = new Date();
    // console.log( now.getMonth() );

    // 年
    const year = now.getFullYear();
    // console.log(year)

    // 月　0からカウントする
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // console.log(monthList[now.getMonth()]);

    const monthStr = monthList[now.getMonth()];

    // console.log(month)
    // console.log(monthStr)


    // 日
    const date = now.getDate().toString().padStart(2, 0);
    // console.log(date)

    // 時
    const hour = now.getHours().toString().padStart(2, 0);
    // console.log(hour)

    // 分
    const minute = now.getMinutes().toString().padStart(2, 0);
    // console.log(minute)

    // 秒
    const secound = now.getSeconds().toString().padStart(2, 0);
    // console.log(secound)

    // 週
    const weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // console.log(weekList[3]); ←その何番目を取得する
    // console.log(weekList[now.getDay()]) //  ←今日がいつか

    const weekStr = weekList[now.getDay()];
    // console.log(weekStr);

    // ampm
    let ampm = "AM";
    if(now.getHours() >= 12){
      ampm = "PM";
    }
    // console.log(ampm);

      // ampm hour
      const ampmHour = (now.getHours() % 12).toString().padStart(2, 0);
      console.log(ampmHour)



    // 時間の置き換え

    $("#second").text(secound);
    $("#year").text(year);
    $("#month").text(month);
    $("#date").text(date);
    $("#hour").text(ampmHour);
    $("#minute").text(minute);

  }




});