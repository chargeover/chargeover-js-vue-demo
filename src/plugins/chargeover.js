"use strict";

const load = (instance, token) => {
  !function() {
    var t = window.chargeoverr = window.chargeover = window.chargeoverr || [];
    if (!t.init) {
      if (t.invoked) return void (window.console && console.error && console.error("ChargeOver snippet included twice."));
      t.invoked = !0, t.load = function(cb) {
        var o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://assets.chargeover.com/minify/?g=chargeover.js";

        o.onload = o.onreadystatechange = function() {
          if (!this.readyState || this.readyState == 'complete')
          {
            cb();
          }
        };
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      };
    }
  }();

  window.chargeover.load(() => {
    window.ChargeOver.Core.setup({
      'instance': instance,
      'token': token
    });
  });
}

const createCustomer = () => {
  var my_data = {
    customer: {
      company: 'My Company Name, LLC',
      bill_addr1: '56 Cowles Road',
      bill_addr2: '',
      bill_addr3: '',
      bill_city: 'Mt Pleasant',
      bill_state: 'MI',
      bill_postcode: '48858',
      bill_country: 'United States',
    },
    user: {
      name: 'John Doe',
      phone: '888-924-2347',
      email: 'test@ChargeOver.com'
    }
  };

  window.ChargeOver.Customer.create(my_data, (code, message, response) => {
     if(code === 200) {
       console.log(`Created customer ${response.customer.company}`)
     }else{
       console.error(`Failed to create customer: ${message}`)
     }
  });
}


module.exports = {
  load,
  createCustomer
}

