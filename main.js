let sendBtn=document.querySelector(".send");
let input=document.querySelector(".input");
let chatBox=document.querySelector(".chat-box");


sendBtn.addEventListener("click", () => {
    let msg=document.createElement("div");
    let txtmsg=document.createTextNode(input.value);

    msg.className="msgs";

    chatBox.appendChild(msg);
    msg.appendChild(txtmsg);
    input.value="";
});

// Emoji list
let emojiButton =document.querySelector(".emoji-button");
let emojiList=document.querySelector(".emoji-list");
let emoji=document.querySelector(".emoji");

emojiButton.addEventListener('click', () => {
    emojiList.style.display = emojiList.style.display === 'none' ? 'block' : 'none';
});

emojiList.addEventListener("click" , (e) =>{
    if(e.target.className === "emoji"){
        input.value += e.target.innerHTML;
    }
})

//Attachment
let attachmentInput=document.querySelector("#attachment-input");
attachmentInput.addEventListener("click", (e) => {
    input.value +=e.target;
});