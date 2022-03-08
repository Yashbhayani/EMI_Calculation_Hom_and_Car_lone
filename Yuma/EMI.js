function Calculate() {
  
    /* Extracting value in the amount 
    / section in the variable*/
    var amount = document.getElementById("Amount").value;
  
    /* Extracting value in the interest
     rate section in the variable*/
    var rate = document.getElementById("Rate").value;
  
    /* Extracting value in the months 
    / section in the variable*/
    var months = document.getElementById("Month").value;
  
    /* Calculating interest per month*/
    var interest = (rate/12)/100;
      
    var Bh = Math.pow((1+interest),months);
    
    var Hb = Math.pow((1+interest),months);

    // Calculating total payment
    var total = amount * (( interest * Bh) / (Hb - 1)) ;

    var TP = total * months;

    var TIP = TP - amount;
    
 /* var totalAmt = month*12*parseFloat(total);
    var totalInt = Math.floor(totalAmt - amount); */

    
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
       // month = ["January 2021", "February 2021", "March 2021", "April 2021", "May 2021", "Jun 2021", "July 2021", "August 2021", "September 2021", "October 2021", "November 2021", "December 2021", "January 2022", "February 2022", "March 2022", "April 2022", "May 2022", "Jun 2022", "July 2022", "August 2022", "September 2022", "October 2022", "November 2022", "December 2022" , "January 2023", "February 2023", "March 2023", "April 2023", "May 2023", "Jun 2023", "July 2023", "August 2023", "September 2023", "Octomber 2023", "Novermber 2023", "December 2023" , "January 2024", "February 2024", "March 2024", "April 2024", "May 2024", "Jun 2024", "July 2024", "August 2024", "September 2024", "Octomber 2024", "Novermber 2024", "December 2024", , "January 2025", "February 2025", "March 2025", "April 2025", "May 2025", "Jun 2025", "July 2025", "August 2025", "September 2025", "Octomber 2025", "Novermber 2025", "December 2025","January 2026", "February 2026", "March 2026", "April 2026", "May 2026", "Jun 2026", "July 2026", "August 2026", "September 2026", "Octomber 2026", "Novermber 2026", "December 2026","January 2027", "February 2027", "March 2027", "April 2027", "May 2027", "Jun 2027", "July 2027", "August 2027", "September 2027", "Octomber 2027", "Novermber 2027", "December 2027", "January 2027", "February 2027", "March 2027", "April 2027", "May 2027", "Jun 2027", "July 2027", "August 2027", "September 2027", "Octomber 2027", "Novermber 2027", "December 2027", "January 2028", "February 2028", "March 2028", "April 2028", "May 2028", "Jun 2028", "July 2028", "August 2028", "September 2028", "Octomber 2028", "Novermber 2028", "December 2028", "January 2029", "February 2029", "March 2029", "April 2029", "May 2029", "Jun 2029", "July 2029", "August 2029", "September 2029", "Octomber 2029", "Novermber 2029", "December 2029", "January 2030", "February 2030", "March 2030", "April 2030", "May 2030", "Jun 2030", "July 2030", "August 2030", "September 2030", "Octomber 2030", "Novermber 2030", "December 2030", "January 2031", "February 2031", "March 2031", "April 2031", "May 2031", "Jun 2031", "July 2031", "August 2031", "September 2031", "Octomber 2031", "Novermber 2031", "December 2031", "January 2032", "February 2032", "March 2032", "April 2032", "May 2032", "Jun 2032", "July 2032", "August 2032", "September 2032", "Octomber 2032", "Novermber 2032", "December 2032"];
     
       month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
       var day = new Date();
        
        // var count = d.getMonth();
        // if ( month = 12)
        // {
        //     count = count --;
        // }
        var year = day.getFullYear();

        for (var i = 0 ; i < months; i++)
        {

           // debugger;
            var _month = (d.getMonth() + i) % 12;
            if(_month == 0)
            {
                year = year+1;
            }
             ip = rp * interest ;
             bp = Math.round (total) - ip;
             rp = Math.round(rp) - Math.round(bp); 
             
             if(rp <= 0)
             {
                rp = 0;
             }
             else if(rp <= 10 )

             {
                rp = 0; 
             }

             RA = (rp * 100) / amount;

             PE = 100 - RA;

           Text += "<thred>" + "<tr> <th>" + month[_month] + "," + year + "</th> <th>"+ Math.round(bp) + " &#8377;" + "</th>  <th>" + Math.round(ip) + " &#8377;" + "</th> <th>" + Math.round(total) + " &#8377;" + "</th> <th>" + Math.round(rp) + " &#8377;" + "</th> <th>" + PE.toFixed(2) + " &#x25; " + "</th> </tr>" + "</thred>";
           // count ++;
        }
        Text +="</table>";


        document.getElementById("table").innerHTML = Text;  


    } 