function hello(){

  if (window.innerWidth <= 1024){

    var parent = document.getElementById("items");
    var child = parent.getElementsByTagName("p")[0];
    parent.removeChild(child);

    var img = document.createElement('img');
    img.src = "images/icon-hamburger.png";
    document.getElementById('items').appendChild(img);

    document.getElementById('items').getElementsByTagName("img")[0].classList.add("hamburger");

    a = 0

    document.getElementById('items').getElementsByTagName("img")[0].addEventListener("click", function(){
      if (a == 0){
        document.getElementById('items').getElementsByTagName("img")[0].src = "images/icon-close.png";

        var div  = document.createElement("div");
        document.getElementById("devices").appendChild(div);
        document.getElementById("devices").getElementsByTagName("div")[0].classList.add("dropdown");

        var para1 = document.createElement("p");
        var node1 = document.createTextNode("PRODUCT");
        para1.appendChild(node1);
        document.getElementById("devices").getElementsByTagName("div")[0].appendChild(para1);
        document.getElementById("devices").getElementsByTagName("div")[0].getElementsByTagName("p")[0].classList.add("dropDownItem");

        var para2 = document.createElement("p");
        var node2 = document.createTextNode("FEATURES");
        para2.appendChild(node2);
        document.getElementById("devices").getElementsByTagName("div")[0].appendChild(para2);
        document.getElementById("devices").getElementsByTagName("div")[0].getElementsByTagName("p")[1].classList.add("dropDownItem");

        var para3 = document.createElement("p");
        var node3 = document.createTextNode("PRICING");
        para3.appendChild(node3);
        document.getElementById("devices").getElementsByTagName("div")[0].appendChild(para3);
        document.getElementById("devices").getElementsByTagName("div")[0].getElementsByTagName("p")[2].classList.add("dropDownItem");

        var hr  = document.createElement("hr");
        document.getElementById("devices").getElementsByTagName("div")[0].appendChild(hr);
        // document.getElementById("devices").getElementsByTagName("div")[0].classList.add("dropdown");

        var para4 = document.createElement("p");
        var node4 = document.createTextNode("LOGIN");
        para4.appendChild(node4);
        document.getElementById("devices").getElementsByTagName("div")[0].appendChild(para4);
        document.getElementById("devices").getElementsByTagName("div")[0].getElementsByTagName("p")[3].classList.add("dropDownLogo");

      }
      if (a < 2){
        a = a + 1;
      }
      if (a == 2){

        var parent = document.getElementById("devices");
        var child = parent.getElementsByTagName("div")[0];
        parent.removeChild(child);

          document.getElementById('items').getElementsByTagName("img")[0].src = "images/icon-hamburger.png";
          a = 0;
      }

    })

  }
}
