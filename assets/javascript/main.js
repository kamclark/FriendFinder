// 
// var config = {
//   ".chosen-select": {},
//   ".chosen-select-deselect": {allow-single_deselect: true},
//   ".chosen-select-no-single": {disable_search_threshold: 10},
//   ".chosen-select-no-results": {no_results_texts: "These aren't the droids you're looking for."},
//   ".chosen-select-width": {width: "95%"}
// };
//
// for (var selector in config) {
//   $(selector).chosen(config[selector]);
// }


$("#submit").on("click", function() {
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
        if ($(this).val() === "" {
            isvalid = false;
          }
        });

      $(".chosen-select").each(function() {
          if ($(this).val() === "" {
              isValid = false;
            }
          });
        return isvalid;
      }

      if (validateForm()) {
        var userdata = {
          name: $("#name").val(),
          photo: $('#photo').val(),
          scores: [
            $("q1").val(),
            $("q2").val(),
            $("q3").val(),
            $("q4").val(),
            $("q5").val(),
            $("q6").val(),
            $("q7").val(),
            $("q8").val(),
            $("q9").val(),
            $("q10").val()
          ]
        };

        // get current website url
        var currentURL = window.location.origin;

        // AJAX post to friends data api
        $.post(currentURL + "/api/firends", userData, function(data) {
          alert("working!");
        });
      })
  })
});
