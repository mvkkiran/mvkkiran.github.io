//default form validation

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-validated');
                }
                if (form.checkValidity() === true){
                    validateFormOnSubmit();
                    event.preventDefault();
                    event.stopPropagation();
                }
            }); 
        });
    });
})();

$( document ).ready(function() {
    document.getElementById("successAlert").style.display="none";
});
function validateFormOnSubmit() {
    //alert("Data Recorded Successfully")
    var formData = JSON.stringify($("#metaform").serializeArray());
    console.log(formData)
    document.getElementById("successAlert").style.display="block";
    setTimeout(window.location.reload.bind(window.location), 3000);
    
}