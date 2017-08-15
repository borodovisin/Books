function get_ajax_form_handler(form_id){
    function handle_ajax_form(event){
        $.ajax({
            async: true,
            type: $("#" + form_id).attr("method"),
            url: $("#" + form_id).attr("action"),
            data: $("#" + form_id).serialize(),
            success: function(data){
                        //~ formselector = "form." + form_class;
                        formselector = "#" + form_id;
                        frameddata = "<div>" + data + "</div>" // this is necessary
                                            // because top level elements and descendants
                                            // require a different function (filter vs find)
                                            // in jquery. So to keep it simple
                                            // just make sure the form is a descendant
                                            // and use find.
                        
                        formdata = $(frameddata).find(formselector);
                        
                        if(formdata.length){
                            $("#" + form_id).replaceWith(formdata);
                            $("#" + form_id).submit(handle_ajax_form);
                        }else{ // there was no form, meaning the previous 
                                //submit was probably a success
                            $("#" + form_id).replaceWith(data);
                        }
                        //~ return false;//this suppresses the default action
                                    //for the form submit button
                    }
        });
        return false;//this suppresses the default action
                    //for the form submit button
    }
    return handle_ajax_form;
}

function load_form(div_id, form_url, form_id, form_class){
    $("#" + div_id).load(
        form_url + " ." + form_class,
        function(){
            $("#" + form_id).submit(
                    get_ajax_form_handler(form_id));
        }
    );
}

function load_page(
    page_url, pagination_field_id, load_field_id, page_div_id, 
    load_more_text, load_no_more_elem
){
    pagination_field_id = "#" + pagination_field_id;
    load_field_id = "#" + load_field_id;
    page_div_id = "#" + page_div_id;
    
    page = parseInt($(pagination_field_id).val());
    
    $(load_field_id).prop("disabled", true);
    $(load_field_id).text("Loading ...");
    //~ $(this).prop('disabled', true);
    
    $.ajax({
        async: true,
        type: "GET",
        url: page_url,
        data: { page: page },
        error: function() {
                $(load_field_id).replaceWith(load_no_more_elem);
            },
        success: function(data){ // check if there is an additional page
                                // , disable load button if not
                $.ajax({
                    async: true,
                    type: "HEAD",
                    url: page_url,
                    data: { page: page + 1 },
                    error: function(data){
                            $(load_field_id).replaceWith(load_no_more_elem);
                        },
                    success: function(response){
                            $(load_field_id).text(load_more_text);
                            $(pagination_field_id).val(page + 1);
                            $(load_field_id).prop("disabled", false);
                        }
                });
                $(page_div_id).append($(data).find("div"));
            }
    });
}
