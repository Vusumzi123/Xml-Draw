

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/xml");
editor.resize();
editor.$blockScrolling = Infinity;
document.getElementById('editor').style.fontSize='20px';

$('#undo').on('click',function(e) {
  var unm = editor.getSession().getUndoManager();
  unm.undo();
});

$('#redo').on('click',function(e) {
  var unm = editor.getSession().getUndoManager();
  unm.redo();
});
