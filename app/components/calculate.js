import Component from '@ember/component';
import { builtinModules } from 'module';

export default Component.extend({
    actions: {
        calculate(tipValue, billAmount, numP) {

        if(!billAmount || isNaN(billAmount) || !numP || isNaN(numP)){
            alert('Input valid values!');
        }

        var bill = parseFloat(billAmount);
        var tip = parseFloat(tipValue);
        var pPer = parseInt(numP);

        console.log(bill);
        console.log(tip)
        var total = (bill + (bill*(tip/100))).toFixed(2);
        var tip = (bill*(tip/100)).toFixed(2);

        var html = '<p>Total Amount: $' + total + '</p> <p>Tip Amount: $' + tip + "</p>";

        if(pPer != 1){
        html+='<p>Total per person: $' + (total/pPer).toFixed(2) + '</p>';
        }

        $('#result').html(html);
      }
    }
});
