// ===== Hide content ====

var blok = document.getElementsByClassName("blok-btn");
var i;

for (i = 0; i < blok.length; i++) 
{
  blok[i].addEventListener("click", function() 
    {
        this.classList.toggle("active");

        var rodic = this.parentElement;
        var panel = rodic.nextElementSibling;

        if (panel.style.maxHeight)
        {
          panel.style.maxHeight = null;
        } 
        else 
        {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

// ===== Expand 1st onload ====
function expandFirst()
{
    setTimeout(function(){ blok[0].click() }, 600)
    setTimeout(function(){ blok[0].click() }, 200)
    setTimeout(function(){ blok[0].click() }, 200)
}