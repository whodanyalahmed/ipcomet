var planprice_def_pos = 1;
$(document).ready(function () {
    $("#sale-slider").slider({
        range : 'min',
        animate : false,
        //value : 2,
        min : 1,
        max : 500,
        orientation : 'horizontal',
        paddingMin : 0,
        paddingMax : 10,
        slide : function (event, ui) {
            $('#hosting_pakage_val').html(ui.value);
            $('#hosting_pakage').val(ui.value);
            $('.data_area').html(ui.value);
            calculate();
        },
        change: function( event, ui ) {
            $('#hosting_pakage_val').html(ui.value);
            $('#hosting_pakage').val(ui.value);
            $('.data_area').html(ui.value);
            calculate();
        }
    });
    function calculate() {
        var basePrice = 894;
        total = parseFloat(parseFloat($('#sale-slider').slider('value'))* parseFloat(basePrice)).toFixed(0);
        total=total.toString();//.split('.');
        $('#total_price_val').html(total);
        $('#total_price').val(total);
    }
    $('#sale-slider').slider({value : planprice_def_pos});
    calculate();
});