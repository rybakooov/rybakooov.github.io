String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


function setCaretPosition(elem, pos) {
  setTimeout(function(){ elem.selectionStart = elem.selectionEnd = pos; }, 0);
}

document.addEventListener('DOMContentLoaded', function(){
  let supaInputsTel = document.querySelectorAll('input[data-inputType="tel"]');
  supaInputsTel.forEach(function(item, i, arr){
    item.onfocus = function() {
      let supaInputsTelVal = this.value;
      if(supaInputsTelVal.length === 0){
        this.value = '+7 (___) ___-__-__';
      }
      setCaretPosition(this, this.value.indexOf('_'));
    }
    item.onblur = function() {
      let supaInputsTelVal = this.value;
      if (supaInputsTelVal === '+7 (___) ___-__-__'){
        item.value = '';
        this.classList.remove('supaInput-error');
        this.classList.remove('supaInput-success');
        return false
      }
      if (this.hasAttribute('data-inputRequired')){
        if(supaInputsTelVal[supaInputsTelVal.length - 1] == '_'){
          this.classList.remove('supaInput-success');
          this.classList.add('supaInput-error');
        } else {
          this.classList.remove('supaInput-error');
          this.classList.add('supaInput-success');
        }
      }
    }
    item.onselect = function() {
      if (this.selectionStart == this.selectionEnd) {
        return; // ничего не выделено
      }
      this.select();
    }
    item.onkeydown = function(e) {
      setCaretPosition(this, this.value.indexOf('_'));
      e.preventDefault();
      let supaInputsTelVal = this.value;
      let inputKey = e.key;
      let inputKeyCode = e.keyCode;
      if(inputKey != '0' && inputKey != '1' && inputKey != '2' && inputKey != '3' && inputKey != '4' && inputKey != '5' && inputKey != '6' && inputKey != '7' && inputKey != '8' && inputKey != '9' && inputKey != 'Backspace' && inputKeyCode != 37 && inputKeyCode != 39){
        return false;
      } 
      if(inputKey == 'Backspace'){
        let indexChar = item.selectionStart - 1;
        while ((supaInputsTelVal[indexChar] == '-' || supaInputsTelVal[indexChar] == ')' || supaInputsTelVal[indexChar] == ' ') && (indexChar > 5)){
          indexChar -= 1;
        }
        if(indexChar <= 3){
          return false;
        } 
        supaInputsTelVal = supaInputsTelVal.replaceAt(indexChar, '_');
        this.value = supaInputsTelVal;
        setCaretPosition(this, this.value.indexOf('_'));
        return false
      }
      if(this.value.indexOf('_') === -1){
        return false;
      }
      supaInputsTelVal = supaInputsTelVal.replace('_', inputKey);
      this.value = supaInputsTelVal;
      setCaretPosition(this, this.value.indexOf('_'));
    }
  })
});