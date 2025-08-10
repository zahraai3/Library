  const dialogform = document.querySelector("dialog");
  const addbtn = document.querySelector("#addbookbtn");
  const closebtn = document.querySelector("#submitbtn");
  const formElement = document.querySelector("form");
  const bookdiv = document.getElementsByClassName("list")[0];

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
    


  /*  //استدعاء الداله الي تظهر العناصر بالhtml
   showBook(BookArray); */

   //cleaning the form after each submit
   formElement.reset();
   dialogform.close();
   console.log(BookArray);

    //استدعاء الداله الي تظهر العناصر بالhtml
   showBook(BookArray);

 })

 //function for displying the array books 
function showBook(arr){

    bookdiv.textContent = "";
   for(let book of arr){
     

      const card = document.createElement("div");
      card.classList.add("cardbook");

      const titleElement = document.createElement("h2");
      titleElement.textContent = book.title;
      card.appendChild(titleElement);

       const authorElement = document.createElement("h3");
      authorElement.textContent = `Author : ${book.author}`;
      card.appendChild(authorElement);

       const descElement = document.createElement("p");
      descElement.textContent = `Description : ${book.description}`;
      card.appendChild(descElement);

      const statuebtn = document.createElement("select");
      statuebtn.classList.add("selects")

      const opYes = document.createElement("option");
      opYes.id="option1";
      opYes.value = "true";
      opYes.textContent="Read";
      statuebtn.appendChild(opYes);

      const opno = document.createElement("option");
      opno.id="option2";
      opno.value = "false";
      opno.textContent="Not Read";
      statuebtn.appendChild(opno);

      //نربط القيمه الحاليه لحاله القراءه 
      statuebtn.value = book.read.toString();

      //هذا حته لما نغير الحاله مال قراءه تتغير بالمصفوفه هم
      statuebtn.addEventListener("change", (e)=>{
        book.read = e.target.value === "true";
        console.log(`Book ${book.title} read status updated to: ${book.read}`);
      });

        const deletebtn = document.createElement("button");
      deletebtn.id="del";
      deletebtn.textContent="Delete"
      deletebtn.addEventListener("click",()=>{
      
        const index = BookArray.findIndex(b => b.id ===book.id);

        if(index !== -1){
          BookArray.splice(index,1);
        }

        showBook(BookArray);
     });

      card.appendChild(statuebtn);
      card.appendChild(deletebtn);

     bookdiv.appendChild(card);
   }
}


 