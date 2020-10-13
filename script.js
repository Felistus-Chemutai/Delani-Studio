$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").show('1000');
    $("#development").hide('1500');
  });
  $("#development").click(function () {
    $("#development").show('1000');
    $("#development-image").hide('1500');
  });
});

$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").show('1000');
    $("#design").hide('1500');
  });
  $("#design").click(function () {
    $("#design").show('1000')
    $("#design-image").hide('1500');
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function () {
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});

$(document).ready(function () {
  $("#work1").mouseover(function () {
    $("#overlay").show();
  }).mouseout(function () {
    $("#overlay").hide();
  });
});
$(document).ready(function () {
  $("#work2").mouseover(function () {
    $("#overlay2").show();
  }).mouseout(function () {
    $("#overlay2").hide();
  });
});
$(document).ready(function () {
  $("#work3").mouseover(function () {
    $("#overlay3").show();
  }).mouseout(function () {
    $("#overlay3").hide();
  });
});
$(document).ready(function () {
  $("#work4").mouseover(function () {
    $("#overlay4").show();
  }).mouseout(function () {
    $("#overlay4").hide();
  });
});

$(document).ready(function () {
  $("#work5").mouseover(function () {
    $("#overlay5").show();
  }).mouseout(function () {
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function () {
    $("#overlay6").show();
  }).mouseout(function () {
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function () {
    $("#overlay7").show();
  }).mouseout(function () {
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function () {
    $("#overlay8").show();
  }).mouseout(function () {
    $("#overlay8").hide();
  });


  $("button").click(function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name === "") {
      alert("Please Insert your name")
    } else
         if(email === ""){
        alert("Enter your Email")
    }else
       if(message === "") {
      alert("Please insert your message!")
    }else {
       alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
    }
  });
});