/*function showDiv(){ 
   var body = document.getElementById('body');
    var firstDiv =                 document.getElementById('kinetic');
    
    body.style.background = '#2c3e50'
     firstDiv.style.display = 'block'; 
     
 }*/


// code to clear textarea
function doThis() {
  var t = document.getElementById('input');
  t.value = "";
}

// code to paste text into textarea
const pasteButton = document.querySelector('#btn2');

pasteButton.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText()
    document.querySelector('textarea').value += text;
    console.log('Text pasted.');
  } catch (error) {
    console.log('Failed to read clipboard');
  }
});


// code to get value from textarea
    function getValue() {
          var val = document.getElementById("input").value;
        document.getElementById("output").innerHTML = val;
        
        let hide = document.getElementById("hide");
        
        
        if(hide.style.display = "block") {
            hide.style.display = "none";
        }
        
        
    }
    
    // Google translate API
        function googleTranslateElementInit() {  
            new google.translate.TranslateElement(  
                {pageLanguage: 'ii-CN'},  
                'google_translate_element'  
            );  
        }  
    
    // code to copy text from element
      function copyText() {
        
        /* Select text by id*/
        var Text = document.getElementById("output").innerText;
        
  
        /* Copy selected text into clipboard */
        navigator.clipboard.writeText(Text);
      }
