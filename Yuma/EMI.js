function Calculate() {
  
    var amount = document.getElementById("Amount").value;
    var rate = document.getElementById("Rate").value;
    var months = document.getElementById("Month").value;
    var interest = (rate/12)/100;
    var Bh = Math.pow((1+interest),months);
    var Hb = Math.pow((1+interest),months);
    var total = amount * (( interest * Bh) / (Hb - 1)) ;
    var TP = total * months;
    var TIP = TP - amount;
    
        document.getElementById("Total").innerHTML =  Math.round(total) + " &#8377;";
        document.getElementById("tp").innerHTML =  Math.round(TP) + " &#8377;";
        document.getElementById("tip").innerHTML =  Math.round(TIP) + " &#8377;";
        var xValues = ["Principal Lon Amount", "Total Interest"];
        var yValues = [TIP , TP ];
        var barColors = [
          "#ff9933",
          "#339933"
        ];
        
        new Chart("myChart", {
          type: "pie",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
              text: "EMI Calculation"
            }
          }
        }); 
        
  var Text = "";
  Text += "<table><tr><th>Months</th><th>Basic pay</th><th>Interest pay</th><th>EMI</th><th>Remaining pay</th><th>Loan Paid Percentage</th></tr>";
       
        var rp = amount;
        var  ip, bp,RA,PE;
        var d = new Date();
        var month = new Array();
        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
        var day = new Date();
        var year = day.getFullYear();
        for (var i = 0 ; i < months; i++){
            var _month = (d.getMonth() + i) % 12;
            if(_month == 0){
                year = year+1;
            }
             ip = rp * interest ;
             bp = Math.round (total) - ip;
             rp = Math.round(rp) - Math.round(bp); 
             
             if(rp <= 0){
                rp = 0;
             }else if(rp <= 10 ){
                rp = 0; 
             }
             RA = (rp * 100) / amount;
             PE = 100 - RA;
           Text += "<thred>" + "<tr> <th>" + month[_month] + "," + year + "</th> <th>"+ Math.round(bp) + " &#8377;" + "</th>  <th>" + Math.round(ip) + " &#8377;" + "</th> <th>" + Math.round(total) + " &#8377;" + "</th> <th>" + Math.round(rp) + " &#8377;" + "</th> <th>" + PE.toFixed(2) + " &#x25; " + "</th> </tr>" + "</thred>";
        }
        Text +="</table>";
        document.getElementById("table").innerHTML = Text;  


    } 
