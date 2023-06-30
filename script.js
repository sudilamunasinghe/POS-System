let products = [];
    //Function for Add Button-------------------------//
    function runAgain() {
      const productName = document.getElementById('product-name').value;
      const unitPrice = parseFloat(document.getElementById('unit-price').value);
      const quantity = parseInt(document.getElementById('quantity').value);
      
      if (productName && unitPrice && quantity) {
        const product = {
          name: productName,
          price: unitPrice,
          quantity: quantity
        };
        
        products.push(product);
        
        // Clear the input fields
        document.getElementById('product-name').value = '';
        document.getElementById('unit-price').value = '';
        document.getElementById('quantity').value = '';
      }
    }
    
    //Function for Proceed Button//

    function proceed() {  
      let output = '<h2>Order Summary</h2>';
      let totalPrice = 0;
      document.getElementById('form').style.display = "none";

      //Get Data from Array
      if (products.length === 0) {
        output += '<p>No products added.</p>';
        document.getElementById('output').style.visibility = "visible";
        document.getElementById('output').style.top = "50%";
      } else {
        output += '<table>';
        output += '<tr><th>Product Name</th><th>Quantity</th><th>Unit Price</th><th>Sub Total</th></tr>'
        products.forEach(function(product) {
          const subtotal = product.price * product.quantity;
          totalPrice += subtotal;
          output += `<tr><td>${product.name}</td><td>${product.quantity}</td><td>Rs.${product.price.toFixed(2)}</td><td>Rs. ${subtotal.toFixed(2)}</td></tr>`;
        });
        output += `<tr><th>Total Price</th><td></td><td></td><td id="tot">Rs.${totalPrice.toFixed(2)}</td></tr>`;
        output += '</table>';
        output += '<h3 class="tot">Total Price : Rs. ';
        output += totalPrice.toFixed(2);
        output += '</h3>'
        output += '<input type="button" id="checkout" value="Checkout">'
        document.getElementById('output').style.visibility = "visible";
        document.getElementById('output').style.top = "50%";
      }
      
      //Display Output
      document.getElementById('output').innerHTML = output;

      //Function for Checkout button
      function check(){
        
        output += '<input type="number" id="customer" placeholder="Enter the Paid Amount">';
        output += '<input type="button" id="next" value="Next">';
        document.getElementById('output').innerHTML = output;
        console.log(output);
        document.getElementById('checkout').style.display = "none";

        //Function for Next Button
        function next(){
          var total = totalPrice.toFixed(2);
          let customer = document.getElementById('customer').value;
          var remain = customer - total;
          output += '<h3 class="paid">Paid Amount : Rs. ';
          output += customer;
          output += '.00</h3>'
          output += '<h3 class="remaining">Remaining Balance : Rs. ';
          output += (remain);
          output += '.00</h3>';
          output += '<input type="button" id="invoice" value="Generate Invoice">';
          document.getElementById('output').innerHTML = output;
          document.getElementById('next').style.display = "none";
          document.getElementById('checkout').style.display = "none";
          document.getElementById('customer').style.display = "none";

          function invoice(){
            console.log('Sudila Munasinghe');
            console.log(totalPrice.toFixed(2));
            let display = '<html>';
            display += '<head><link rel="stylesheet" href="style.css"></head>';
            display += '<body class="bill">';
            display += '<h1 class="bill-heading">SM Products</h1>'
            display += '<table id="invoice_table">';
            display += '<tr><th>Product Name</th><th>Quantity</th><th>Unit Price</th><th>Sub Total</th></tr>'
            totalPrice = 0;
            products.forEach(function(product) {
              const subtotal = product.price * product.quantity;
              totalPrice += subtotal;
              display += `<tr><td>${product.name}</td><td>${product.quantity}</td><td>Rs.${product.price.toFixed(2)}</td><td>Rs. ${subtotal.toFixed(2)}</td></tr>`;
              document.getElementById('display').innerHTML = display;
            });
            display += `<tr><th>Total Price</th><td></td><td></td><td id="tot">Rs. ${totalPrice.toFixed(2)}</td></tr>`;
            display += `<tr><th>Paid Amount</th><td></td><td></td><td id="tot">Rs. ${customer}.00</td></tr>`;
            display += `<tr><th>Balance</th><td></td><td></td><td id="tot">Rs. ${remain}.00</td></tr>`;
            display += '</table>';
            // display += '<h3 class="tot">Total Price : Rs. ';
            // display += totalPrice.toFixed(2);
            // display += '</h3>'
            display += '</body>';
            display += '</html>';
            var popup = window.open("", "_blank");
            popup.document.open();
            popup.document.write(display);
            popup.document.close();
          }
          document.getElementById('invoice').addEventListener('click',invoice);
        }
        document.getElementById('next').addEventListener('click', next);
      }
      document.getElementById('checkout').addEventListener('click', check);
      
      
      
    }
    
    
    