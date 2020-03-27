var userJsonStr = sessionStorage.getItem('user');
userEntity = JSON.parse(userJsonStr);


function formToJson(form) {
    x = form.serializeArray();
    var result = "{"
    $.each(x, function (i, field) {
        result += "\"" + field.name + "\":"
        result += isNaN(field.value) ? "\"" + field.value + "\" ," : (typeof(field.value) == Boolean ? field.value + " ," : "\"" + field.value + "\" ,");
    });
    result = result.substring(0, result.length - 2)
    result += "}"
    return result
}


