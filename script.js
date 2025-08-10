  const dialogform = document.querySelector("dialog");
  const addbtn = document.querySelector("#addbookbtn");
  const closebtn = document.querySelector("#submitbtn");
  const formElement = document.querySelector("form");

  dialogform.close();

  addbtn.addEventListener("click", ()=>{
    dialogform.showModal();
  })

  //constructor function for making new book objects
   function Book(title,author,description,read){
       this.title=title;
       this.author=author;
       this.description=description;
       this.read=read;
       this.id=crypto.randomUUID();
   }
 const BookArray = [];

 /* //testing
 addToArray("aaa","llll","jdowj","readd");
 addToArray("aaa","llll","jdowj","readd");
 addToArray("aaa","llll","jdowj","readd");
 console.log(BookArray);
 // */

//الداله الي تضيف الكتاب للمصفوفه حتاخذ القيم كارقيومنت وتضيفهم للكتاب الجديد وتدفعهم للمصفوفه
  function addToArray(title,author,description,read){
    const book = new Book(title,author,description,read)
    BookArray.push(book);
 }


 /*هنا حنسيطر على الفورم والاصح على السبمت 
 اننا لما ندوسه السبمت اولشي البيانات مراح تروح لسيرفر 
 او احنا ماعدنا سيرفر فاقصد ان البيانات مراح تختفي 
  ونما تروح للعناصر الي عرفناهم الي بعدين حيكونون ارقيومنت للداله الاضافه للسته 
 */
 formElement.addEventListener("submit",(event)=>{
    event.preventDefault();

    //getting data from the form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const description = document.getElementById("description").value;
  const read = document.querySelector('input[name="read"]:checked').value === "true";
  
  //using the data value as argument for the new book object which will be added to the array
   addToArray(title,author,description,read);
  
   //cleaning the form after each submit
   formElement.reset();
   dialogform.close();
   console.log(BookArray);

 })
 