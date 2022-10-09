console.log('script online');
let targetDiv = document.getElementById("searchBar");
targetDiv.innerHTML = `
<div class="my-3">
    <input type="text" class="form-control" placeholder="Search the titles of this page.." onkeyup="search(this)">
    <p class="form-text">Powered by vanilla Javascript</p>
</div>
`;



function search(object){
        let objVal = object.value;
        let filter = objVal.toUpperCase();
        
        let pList = document.getElementsByClassName("new-post")[0];
        let headers = pList.getElementsByTagName("h2");
        
        if(objVal != ""){
            document.getElementsByClassName("bc")[0].style.display = "none";
            document.getElementsByClassName("pagination")[0].style.display = "none";
        }else{
            document.getElementsByClassName("bc")[0].style.display = "";
            document.getElementsByClassName("pagination")[0].style.display = "";
        };
        let textValue;
        for ( let i = 0; i <headers.length; i++){
            textValue = headers[i].textContent || a.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                headers[i].parentNode.parentNode.style.display = "";
            }else{
                headers[i].parentNode.parentNode.style.display="none";
            };
        };
        
};
