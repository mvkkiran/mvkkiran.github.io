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
                if (form.checkValidity() === true) {
                    validateFormOnSubmit();
                    event.preventDefault();
                    event.stopPropagation();
                }
            });
        });
    });
})();
/*
$( document ).ready(function() {
    document.getElementById("successAlert").style.display="none";
});*/
$(document).ready(function () {
    document.getElementById("successAlert").style.display = "none";
    var author_max_fields = 5; //Maximum allowed input fields 
    var author_wrapper = $(".author_wrapper"); //Input fields wrapper
    var author_add_button = $(".author_add_fields"); //Add button class or ID
    var author_number = 2; //Initial input field is set to 2

    //When user click on add input button
    $(author_add_button).click(function (e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (author_number < author_max_fields) {
            author_number++; //input field increment
            //add input field
            $(author_wrapper).append(`<div class="card">
            <div class="card-header">
            <a href="javascript:void(0);" class="remove_field btn btn-sm btn-danger" style="width:30px;margin-left:85%;" role="button">X</a>
            <h7 class="float-left card-subtitle">Author-`+ author_number + `</h7>
            </div>
            <div class="card-body">
                <div class="form-group row">

                    <label for="name" class="col-sm-2 col-form-label">Name</label>

                    <div class="col">
                        <input id="txtFirstName" name="fname[]" placeholder="First Name"
                            class="form-control" type="text" required="true">
                    </div>
                    <div class="col">
                        <input id="txtMiddleName" name="mname[]" placeholder="Middle Name"
                            class="form-control" type="text">
                    </div>
                    <div class="col">
                        <input id="txtLastName" name="lname[]" placeholder="Last Name"
                            class="form-control" type="text" required="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="affiliation" class="col-sm-2 col-form-label">Affiliation</label>
                    <div class="col">
                        <input id="txtAffiliation" name="affiliation[]"
                            placeholder="Affiliated Institute" class="form-control" type="text"
                            required="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="orcid" class="col-sm-2 col-form-label">ORCID</label>
                    <div class="col">
                        <input id="txtOrcid" name="orcid[]" placeholder="Mention ORCID"
                            class="form-control" type="text" required="true">
                    </div>
                </div>
            </div> </div>`);
        }
    });

    //when user click on remove button
    $(author_wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).parent('div').parent('div').remove(); //remove inout field
        author_number--; //inout field decrement
    })


    // Adding keywords fields dynamically
    var keyword_max_fields = 10; //Maximum allowed input fields 
    var keyword_wrapper = $(".keyword_wrapper"); //Input fields wrapper
    var keyword_add_button = $(".keyword_add_fields"); //Add button class or ID
    var keyword_number = 1; //Initial input field is set to 1

    //When user click on add input button
    $(keyword_add_button).click(function (e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (keyword_number < keyword_max_fields) {
            keyword_number++; //input field increment
            //add input field
            $(keyword_wrapper).append(`<div><hr>
            <a href="javascript:void(0);" class="remove_field btn btn-sm btn-danger" style="width:30px;margin-left:95%;" role="button">X</a>
            <div class="form-group row">
            <label for="term" class="col-sm-2 col-form-label">Term</label>
            <div class="col">
                <input id="txtTerm" name="term[]" placeholder="Enter the keyword"
                    class="form-control" type="text" required="true">
            </div>
        </div>
        <div class="form-group row">
            <label for="vocabulary" class="col-sm-2 col-form-label form-control-sm">Vocabulary</label>
            <div class="col-sm-10">
                <input id="txtVocab" name="vocab[]" placeholder="Ontology Reference"
                    class="form-control" type="text" required="true">
            </div>
        </div>
        <br></div>`);
        }
    });

    //when user click on remove button
    $(keyword_wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        keyword_number--; //inout field decrement
    })

    // adding publications fields dynamically
    var publication_max_fields = 5; //Maximum allowed input fields 
    var publication_wrapper = $(".publication_wrapper"); //Input fields wrapper
    var publication_add_button = $(".publication_add_fields"); //Add button class or ID
    var publication_number = 1; //Initial input field is set to 1

    //When user click on add input button
    $(publication_add_button).click(function (e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (publication_number < publication_max_fields) {
            publication_number++; //input field increment
            //add input field
            $(publication_wrapper).append(`<div><hr>
            <a href="javascript:void(0);" class="remove_field btn btn-sm btn-danger" style="width:30px;margin-left:95%;" role="button">X</a>
            <div class="form-group row">
                                            <label for="citaton" class="col-sm-2 col-form-label">Citation</label>
                                            <div class="col">
                                                <input id="txtCitation" name="citation[]" placeholder="Enter the citation"
                                                    class="form-control" type="text" required="true">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="url" class="col-sm-2 col-form-label">URL</label>
                                            <div class="col">
                                                <input id="txtCitationURL" name="vocab[]" placeholder="Enter URL"
                                                    class="form-control" type="text" required="true">
                                            </div>
                                        </div>
        <br></div>`);
        }
    });

    //when user click on remove button
    $(publication_wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        publication_number--; //inout field decrement
    })

    // adding software fields dynamically
    var software_max_fields = 5; //Maximum allowed input fields 
    var software_wrapper = $(".software_wrapper"); //Input fields wrapper
    var software_add_button = $(".software_add_fields"); //Add button class or ID
    var software_number = 1; //Initial input field is set to 1

    //When user click on add input button
    $(software_add_button).click(function (e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (software_number < software_max_fields) {
            software_number++; //input field increment
            //add input field
            $(software_wrapper).append(`<div><hr>
        <a href="javascript:void(0);" class="remove_field btn btn-sm btn-danger" style="width:30px;margin-left:95%;" role="button">X</a>
        <div class="form-group row">
                                            <div class="col-sm-6">
                                                <input id="txtSoftName" name="softname[]"
                                                    placeholder="Name of the S/W used" class="form-control" type="text"
                                                    required="true">
                                            </div>
                                            <div class="col-sm-6">
                                                <input id="txtSoftversion" name="version[]" placeholder="Version"
                                                    class="form-control" type="text" required="true">
                                            </div>
                                        </div>
    <br></div>`);
        }
    });

    //when user click on remove button
    $(software_wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        software_number--; //inout field decrement
    })


});


function validateFormOnSubmit() {
    //alert("Data Recorded Successfully")
    var formData = JSON.stringify($("#metaform").serializeArray());
    var filename=document.getElementById("txtTitle").value;
    console.log(formData)
    download(formData, filename+'.json', 'text/plain');
    document.getElementById("successAlert").style.display = "block";
    setTimeout(window.location.reload.bind(window.location), 3000);

}
//function to download form content to local system 
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
