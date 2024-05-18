// function checkh() 
// {
    var nobtn = document.getElementById("no")
    
    nobtn.addEventListener('mouseover', function(){
        var i = Math.floor( Math.random() * 1000) + 1;
        var j = Math.floor( Math.random() * 1000) + 1;
        // if(Math.floor( Math.random(3)) * 50 > 10)
            nobtn.style.right = i + 'px';
        nobtn.style.top = j + 'px';
    })
    var inp = document.getElementById("date").value;
    
    // nobtn.addEventListener('mouseout', function(){
    //     nobtn.style.backgroundColor = "inherit"
    // })
    // if(input === "yes")
    // {
    //     var img = document.createElement("img");
    //     var ddi = document.createElement('div')
    //     ddi.id = "hehe"
    //     img.id = "iiimg"
    //     img.src = "https://imgs.search.brave.com/ZSk5POamZ1PN0O5XLOxgf7WnH0-EFbjZ5W0OUSYr-jk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZmxvd2VyLXBp/Y3R1cmVzLXVucHhi/djFxOWt4eXFyMWQu/anBn";
    //     ddi.style.display = "flex";
    //     ddi.style.justifyContent = "center";
    //     ddi.style.alignItems = "center";
    //     ddi.style.height = "100vh";
    //     document.body.innerHTML = '';
    //     document.body.appendChild(ddi);
    //     document.getElementById("hehe").append(img);
    // }
    // if(input === "no")
    //     {
    //         var img = document.createElement("img");
    //         var ddi = document.createElement('div')
    //         var retry = document.createElement("a")
    //         ddi.display = "flex"
    //         ddi.style.flexDirection = "column";
    //         ddi.style.gap = "10px";
    //         retry.textContent = "think again";
    //         retry.href = "index.html"
    //         retry.style.textDecoration = "none";
    //         retry.style.color = "inherit"
    //         retry.style.border = "black solid";
    //         retry.style.background = "tomato";
    //         ddi.id = "hehe"
    //         img.id = "iiimg"
    //         img.src = "https://imgs.search.brave.com/UwDa2lg53NkXGhri43DP8ukYFP4NEOY7tqUv6-kY7cw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqbGpPREpq/WXpFdE0yRTJOUzAw/TVRrMkxUZzVOVGN0/WlRGak1UbGpaR05p/WWpsa1hrRXlYa0Zx/Y0dkZVFWUm9hWEpr/VUdGeWRIbEpibWRs/YzNScGIyNVhiM0py/Wm14dmR3QEAuX1Yx/X1FMNzVfVVkyODFf/Q1IwLDAsNTAwLDI4/MV8uanBn";
    //         ddi.style.display = "flex";
    //         ddi.style.justifyContent = "center";
    //         ddi.style.alignItems = "center";
    //         ddi.style.height = "100vh";
    //         document.body.innerHTML = '';
    //         document.body.appendChild(ddi);
    //         document.getElementById("hehe").append(img);
    //         document.getElementById("hehe").append(retry)
    //     }
// }
    