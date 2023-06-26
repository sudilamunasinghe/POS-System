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
      
      if (products.length === 0) {
        output += '<p>No products added.</p>';
        document.getElementById('output').style.display = "block";
      } else {
        output += '<table>';
        output += '<tr><th>Product Name</th><th>Quantity</th><th>Unit Price</th><th>Sub Total</th></tr>'
        products.forEach(function(product) {
          const subtotal = product.price * product.quantity;
          totalPrice += subtotal;
          output += `<tr><td>${product.name}</td><td>${product.quantity}</td><td>${product.price.toFixed(2)}</td><td>${subtotal.toFixed(2)}</td></tr>`;
        });
        
        output += `<tr><th>Total Price${totalPrice.toFixed(2)}</th></tr>`;
        output += '</table>';
        document.getElementById('output').style.display = "block";
        
      }
      
      
      document.getElementById('output').innerHTML = output;
    }