module.exports = function toReadable (number) {
  let b='';
  let a= number+'';
  a = a.split('').reverse();
  for(i=0;i<a.length;i++){
    a[i] = Number(a[i]);
  }
    switch(a[0]){
      case 0:b=''; break;
      case 1:b='one'; break;
      case 2:b='two'; break;
      case 3:b='three'; break;
      case 4:b='four'; break;
      case 5:b='five'; break;
      case 6:b='six'; break;
      case 7:b='seven'; break;
      case 8:b='eight'; break;
      case 9:b='nine'; break;
    }
    if(a[1]&&b!=''){b=' '+b};
    switch(a[1]){
      case 1:if(a[0]==0){b='ten'};
      if(a[0]==1){b='eleven'};
      if(a[0]==2){b='twelve'};
      if(a[0]==3){b='thirteen'};
      if(a[0]==4){b='fourteen'};
      if(a[0]==5){b='fifteen'};
      if(a[0]==6){b='sixteen'};
      if(a[0]==7){b='seventeen'};
      if(a[0]==8){b='eighteen'};
      if(a[0]==9){b='nineteen'};
      break;
      case 2:b='twenty'+b; break;
      case 3:b='thirty'+b; break;
      case 4:b='forty'+b; break;
      case 5:b='fifty'+b; break;
      case 6:b='sixty'+b; break;
      case 7:b='seventy'+b; break;
      case 8:b='eighty'+b; break;
      case 9:b='ninety'+b; break;
      case 0:if(a[0]==0){b=''}; break;
    }
    if(a[2]&&b!=''){b=' '+b};
    switch(a[2]){
      case 1:b='one hundred'+b; break;
      case 2:b='two hundred'+b; break;
      case 3:b='three hundred'+b; break;
      case 4:b='four hundred'+b; break;
      case 5:b='five hundred'+b; break;
      case 6:b='six hundred'+b; break;
      case 7:b='seven hundred'+b; break;
      case 8:b='eight hundred'+b; break;
      case 9:b='nine hundred'+b; break;
    }
    if(b==''){
      return 'zero';
    }
    return b;
}
