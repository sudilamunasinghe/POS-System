let products = [];

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
    
    function proceed() {
      let output = '<i class="fa-solid fa-xmark"></i>';
      output += '<h2>Order Summary</h2>';
      let totalPrice = 0;
      document.getElementById('form').style.display = "none";

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
      
      
      document.getElementById('output').innerHTML = output;
      function check(){
        
        output += '<input type="number" id="customer" placeholder="Enter the Customer Price">';
        output += '<input type="button" id="next" value="Next">';
        document.getElementById('output').innerHTML = output;
        console.log(output);
        document.getElementById('checkout').style.display = "none";

        function next(){
          var total = totalPrice.toFixed(2);
          let customer = document.getElementById('customer').value;
          var remain = customer - total;
          output += '<h3 class="paid">Paid Amount : Rs. ';
          output += customer;
          output += '</h3>'
          output += '<h3 class="remaining">Remaining Balance : Rs. ';
          output += (remain);
          output += '</h3>';
          document.getElementById('output').innerHTML = output;
          document.getElementById('next').style.display = "none";
          document.getElementById('checkout').style.display = "none";
          document.getElementById('customer').style.display = "none";
        }
        document.getElementById('next').addEventListener('click', next);
      }
      document.getElementById('checkout').addEventListener('click', check);
      
    }
    // $('#close').click(function(){
    //   $('#output').css({
    //     top: '40%',
    //     visibility: 'hidden',
    //   })
    // })
    
    