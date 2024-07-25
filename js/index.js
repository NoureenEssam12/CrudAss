var SiteName=document.getElementById("SiteName")
var itemList=[]

var url=document.getElementById("SiteURL")




if (localStorage.getItem("list")) {
  itemList = JSON.parse(localStorage.getItem("list"));
  displayitems(itemList);
}

function add() {

  if (validateName()) {
   
    if (validateURL()) {
      var items = {
        name: SiteName.value,
        url: url.value
      };
      itemList.push(items);
      displayitems(itemList);
      localStorage.setItem("list", JSON.stringify(itemList));
    } else {
      console.log(alert(`Site Name or URL is not valid, Please follow the rules below:
        -> Site name must contain at least 3 characters
        -> Site URL must be a valid one`));
    }
  } else {
    console.log(alert(`Site Name or URL is not valid, Please follow the rules below:
     -> Site name must contain at least 3 characters
     -> Site URL must be a valid one`));
  }
}


function displayitems(list){
  var cartona=""
  for(var i=0;i<list.length;i++){
    cartona+=`<tr>
<td>${i + 1}</td>
<td>${list[i].name}</td>
<td><a href= ${list[i].url} target="_blank" class="btn btn-sm visitt "><i class="fa-solid fa-eye"></i> Visit</a></td>
<td><button class="btn btn-sm deletee " onclick='deleteList(${i})'><i class="fa-solid fa-trash-can"></i> Delete</button></td>

</tr>`;
  }
  document.getElementById("data").innerHTML=cartona;
  
}
console.log(itemList);
function deleteList(index){
  itemList.splice(index,1)
  displayitems(itemList)
  localStorage.setItem("list",JSON.stringify(itemList))
}
function validateName(){
  var regex=/^[a-zA-Z]{3,}$/
  if (regex.test(SiteName.value)) {
    SiteName.classList.add("is-valid");
    SiteName.classList.remove("is-invalid");
    return true;
  } else {
    SiteName.classList.add("is-invalid");
    url.classList.remove("is-valid");

    return false;
  }

}






function validateURL(urlValue) {
  
  var urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (urlPattern.test(url.value)) {
    url.classList.add("is-valid");
    url.classList.remove("is-invalid");
    return true;
  } else {
    url.classList.add("is-invalid");
    url.classList.remove("is-valid");

    return false;
  }
}
function visit(index){
  var urlValue = url.value;

  if (validateURL(urlValue)) {
    window.open(urlValue, '_blank');
}

}
