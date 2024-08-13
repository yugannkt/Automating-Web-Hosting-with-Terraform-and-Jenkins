
var aText = new Array(
    "<br> > <b>getEducation() ... </b>",
    "Engineering ",
    "<br>",
    "> <b>getExperience() ... </b>",
    "Worked as a SDE Inter"
    );
    
    var iSpeed = 35;
    var iIndex = 0;
    var iArrLength = aText[0].length;
    var iScrollAt = 20;
    
    var iTextPos = 0;
    var sContents = '';
    var iRow;
    
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
    
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 700);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    setTimeout("typewriter()", 10000);
    