const headerLinks = document.querySelector(".header-style__links")
const headerLinks2 = document.querySelector(".header-style__links2")

    // document.getElementById("handleNavbar").addEventListener("click", ()=>{
    //     headerLinks.classList.toggle("open")
    // })

    // document.getElementById("handleNavbar2").addEventListener("click", ()=>{
    //     headerLinks2.classList.toggle("open2")
    // })

headerLinks.classList.remove("open");
headerLinks2.classList.remove("open2");



    function toggleModal1(){
        if (headerLinks.classList.contains("open")){
            headerLinks.classList.remove("open")
        }
        else{
            headerLinks.classList.add("open")
            headerLinks2.classList.remove("open2")
        }
    }

    function toggleModal2(){
        if (headerLinks2.classList.contains("open2")){
            headerLinks2.classList.remove("open2")
        }
        else{
            headerLinks2.classList.add("open2")
            headerLinks.classList.remove("open")
        }
    }

    document.getElementById('handleNavbar').addEventListener('click',toggleModal1)
    document.getElementById('handleNavbar2').addEventListener('click',toggleModal2)