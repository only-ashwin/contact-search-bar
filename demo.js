const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("contact-list");
    const contact = document.querySelectorAll(".contact");
    const cname = document.getElementsByTagName("h2");

    for(var i=0; i < cname.length; i++){
        let match = contact[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                contact[i].style.display = ""; 
            }else{
                contact[i].style.display = "none";
            }
        }
    }
}