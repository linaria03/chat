const content = "안녕하세요. 넷틴스입니다. \n 문의사항 있으시면 저를 눌러주세요."
const text = document.querySelector(".text")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(2000);
    }
}
setInterval(typing, 100)

// 💛 msg
$(".chatAi").mouseenter(function () {
    $('.chatAi').addclass('on');  
  });
