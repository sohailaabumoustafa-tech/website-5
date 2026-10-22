



let books=document.getElementById("books")
let addbtn=document.getElementById("addbtn")
let count=document.getElementById("count")
let content=document.getElementById("content")

let edit=null

let allbooks=[
    {id:1, name:"لن يكسرني رجل",price:"100ج",img:"./image/img4.jpg"},
    {id:2, name:"ليطمئن قلبي",price:"120ج",img:"./image/img6.jpg"},
    {id:3, name:"عقدك النفسية سجنك الابدي",price:"110ج",img:"./image/img8.jpg"},
    {id:4, name:"الي المنكسرة قلوبهم",price:"130ج",img:"./image/img9.jpg"},
]
function deletebtn(id){
        
        let index =allbooks.map((del)=>{
return del.id

        }).indexOf(id)
        // console.log(id)/
        // console.log(index)/
        if (index != -1){
            allbooks.splice(index,1)
        }
        drow()
        count.innerHTML=`${allbooks.length}`
        console.log(allbooks)

    }


function drow(){
    content.innerHTML=""
allbooks.forEach((ele)=>{
    
    content.innerHTML+=`<div class="bg-stone-100  shadow-sm p-8">
    <div ><img src="${ele.img}"class="w-full  h-32 md:h-48 "></div>
   <h4 class="font-bold mt-1 text-center"> ${ele.name}</h4> 
  <div class="price font-bold text-center mt-1">${ele.price}</div> 
  <div class="btn items-center justify-between mt-2 flex">
 <button  onClick="editbtn(${ele.id})" class="border border-gray-400 bg-stone-200 pl-5 pr-5 cursor-pointer">Edit</button>
 <button onClick="deletebtn(${ele.id})" class="border border-gray-400 bg-red-100 pl-5 pr-5 cursor-pointer">Delete</button>  
 </div>
 </div>
 
 `
    

})

}
drow(allbooks)

let db=allbooks.some(d=>d.name ===books.value)
if( db){
    alert("الاسم موجود مسبقا")
    // return;/
}

function editbtn(id){
    
    // console.log(findbooks)/

let findbooks=allbooks.find(f => f.id===id)
    if(findbooks){
        books.value=findbooks.name
        
    
        addbtn.innerHTML="save edit"
        edit=id
    }
}





let newbook=[
    {name:"أحببت وغدا",price:"150ج",img:"./image/img10.jpg"},
    {name:"قوانين التحرر من الصراع النفسي",price:"130ج",img:"./image/img13.jpg"},
    {name:"لست أسفة",price:"140ج",img:"./image/img14.jpg"},
    {name:"ابقي قويا",price:"160ج",img:"./image/img15.jpg"},
]
    
addbtn.addEventListener("click",()=>{
     if(books.value==""){
     Swal.fire({
  icon: "warning",
   title: "ثانية واحدة",
   text: "من فضلك اكنب/ي اسم الكتاب الاول",
   

     });    
            

    }  


    
let findbook=newbook.find(b =>b.name.includes(books.value))
 if(edit=null) {

let findbooks=allbooks.find(f => f.id===edit)

if(findbooks){
   
        findbooks.name=books.value
      
        
        
    
}
edit=null
addbtn.innerText="add"


 }else{
if (findbook){

    let lasID =allbooks.length?  allbooks[allbooks.length -1].id:0
allbooks.push({
id:++lasID,name:findbook.name,price:findbook.price,img:findbook.img

 })
 
 
 



 let newbooks=allbooks[allbooks.length -1]
    content.innerHTML+=`<div class="bg-stone-100  shadow-sm p-8">
    <div ><img src="${newbooks.img}"class="w-full  h-32 md:h-48 "></div>
   <h4 class="font-bold mt-1 text-center"> ${newbooks.name}</h4> 
  <div class="price font-bold text-center mt-1">${newbooks.price}</div> 
  <div class="btn items-center justify-between mt-2 flex">
 <button onClick="editbtn(${newbooks.id}) class="border border-gray-400 bg-stone-200 pl-5 pr-5 cursor-pointer">Edit</button>
 <button onClick="deletebtn(${newbooks.id})" class="border border-gray-400 bg-red-100 pl-5 pr-5 cursor-pointer">Delete</button>  
 </div>
 </div>
 
 `
 count.innerHTML=`${allbooks.length} `
 books.value=""


}


}

})

    addbtn.addEventListener("click",()=>{
        let text=document.querySelector(" h4 ")
    
        
            text.innerHTML=books.value
        
        
    })
let btn=document.getElementById("btn")
let mobile =document.getElementById("mobile")

btn.addEventListener("click",()=>{
    mobile.classList.toggle("hidden")
    mobile.classList.toggle("flex")
})
