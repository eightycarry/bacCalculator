$(document).ready(function() {
    $("#bacButton").click(calculateBAC);

    function calculateBAC()
    {
        //determine how many beers were consumed
        var beer = $("#beerConsumed").val();
        //determine how much wine was consumed
        var wine = $("#wineConsumed").val();
        //determine how many shots were taken
        var shots = $("#shotsConsumed").val();
        //determine weight of person
        var weight = $("#weightLbs").val();
        //determine how long its been since first drink
        var time = $("#firstDrink").val();

        //PERFORMING CALCULATIONS AND DISPLAYING OUTPUT
        // a beer is 0.54 liquid ounces
        var beerAmt = (beer * 0.54);
        //beerAmt = beerAmt.toFixed(3);
        // a glass of wine is 0.6 liquid ounces
        var wineAmt = (wine * 0.60);
        //wineAmt = wineAmt.toFixed(3);
        // a shot is 0.6 liquid ounces
        var shotAmt = (shots * 0.60);
        //shotAmt = shotAmt.toFixed(3);
        //determine the person's total amount of alcohol consumed
        var totalLiquid = ((beerAmt + wineAmt + shotAmt) * 7.5);
        //divide totalLiquid by weight of person
        var BAC = (totalLiquid / weight);
        //subtract 0.015 for each hour since their first drink
        var timeDrink = (BAC - (time * 0.015));
        //output their BAC percentage
        $("#bacP").text(timeDrink.toFixed(3));

        $(".outputBAC").show();
    }
});