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
      let output = '<h2>Order Summary</h2>';
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
        
        output += `<tr><th>Total Price</th><td></td><td></td><td>Rs.${totalPrice.toFixed(2)}</td></tr>`;
        output += '</table>';
        output += '<a href="print.html" target="_blank"><input type="button" value="Print" id="print"></a>'
        document.getElementById('output').style.visibility = "visible";
        document.getElementById('output').style.top = "50%";
      }
      
      
      document.getElementById('output').innerHTML = output;
      function print(){
        let output_p = '<h2>Order Summary</h2>';
      let totalPrice = 0;
      
      if (products.length === 0) {
        output_p += '<p>No products added.</p>';
      } else {
        output_p += '<table>';
        output_p += '<tr><th>Product Name</td><td>Quantity</td><td>Unit Price</td></tr>'
        products.forEach(function(product) {
          const subtotal = product.price * product.quantity;
          totalPrice += subtotal;
          output_p += `<tr><td>${product.name}</td><td>${product.quantity}</td><td>$${product.price.toFixed(2)}</td><td>$${subtotal.toFixed(2)}</td></tr>`;
        });
        output_p += '</table>';
        
        output_p += `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
      }
      document.getElementById('output_p').innerHTML = output_p;
    }
  }
    