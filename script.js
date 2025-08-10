  const dialogform = document.querySelector("dialog")
  const addbtn = document.querySelector("#addbookbtn")
  const closebtn = document.querySelector("#submitbtn")
  
  dialogform.close();

  addbtn.addEventListener("click", ()=>{
    dialogform.showModal();
  })

  closebtn.addEventListener("click", ()=>{
    dialogform.close();
  })