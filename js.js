function copy(){
    var text= document.getElementById('text');
    var range = document.createRange();
    
    range.selectNode(text);
    window.getSelection().addRange(range);
    document.execCommand('copy');
}