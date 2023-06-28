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
      let output = '<i class="fa-solid fa-xmark" id="close"></i>';
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
      }
      document.getElementById('checkout').addEventListener('click', check);
      
      
    }
    function next(){
      var total = totalPrice.toFixed(2);
      var customer = parseInt(document.getElementById('customer').value);
      var remain = total - customer;
      console.log('Sudila Munasinghe');
      console.log(remain);
      // output += '<h2>Remaining Balance :';
      // output += (remain);
      // output += '</h2>'
      // var checkout = parseInt(document.getElementById('checkout').value);
      // var total = totalPrice.toFixed(2);
      // var remain = total - checkout;
      
    }
    document.getElementById('next').addEventListener('click',next);
    