const editor = document.getElementById('editor');
const storedValue = localStorage.editor;

if (storedValue) {
  editor.value = storedValue;
};

editor.addEventListener('input', () => {
  localStorage.editor = editor.value;
});