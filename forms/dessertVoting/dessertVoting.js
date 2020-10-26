
var dessertsList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
  for (i = 0; i <= dessertsList.length -1; i++)
    drpDesserts.addItem(dessertsList[i])
}


drpDesserts.onclick=function(s){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        drpDesserts.value = s
        LblDesserts.value = `You Picked ${drpDesserts.selection} - thats a great choice!` 
    }
}

btnDescribeYou.onclick=function() {
ChangeForm(describeYou)
}
