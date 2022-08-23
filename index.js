/*Skills.html */

/*Horizontal Modal Tabs*/
function openModal(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  /*Horizontal End of Modal Tabs*/
  
  /* Modals */
  var modal = document.getElementsByClassName("modal");
  
  // Get the button that opens the modal
  var btn = document.getElementsByClassName("modal-button");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");
  
  // When the user clicks on the button, open the modal
  //https://stackoverflow.com/questions/42921593/multiple-buttons-and-modals
  for(let i = 0; i<btn.length; i++){
    btn[i].onclick = function(){
      modal[i].style.display = "block";
    }
  }
  // When the user clicks on <span> (x), close the modal
  for(let i = 0; i<span.length; i++){
    span[i].onclick = function(){
      modal[i].style.display = "none";
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  // for(let i = 0; i<modal.length; i++){
  //   modal[i].onclick = function(){
  //     modal[i].style.display = "none";
  //   }
  // }
  /* End of Modal */
  /* End Skills.html */
  
  /*Mobile Navigation opener script */
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  /*end of Mobile Navigation opener script*/