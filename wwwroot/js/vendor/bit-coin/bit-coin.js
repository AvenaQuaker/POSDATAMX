$(document).on('ready', function() {	
	"use strict"; //Start of Use Strict
	
		var api_URL = 'https://blockchain.info/ticker';
		var selectCurrency = $("#bitcoin_calc .currencyFor"); // Textbox-1
		var Currency1 = $("#bitcoin_calc .currency1");		  // Textbox-2	
		var Currency2 = $("#bitcoin_calc .currency2");        // Dropdown Select Options
		
		/* Function get currency code and price list form given api URL */
		function get_currency_codes(){
			var jdata = $.ajax({
				type: 'GET',
				url: api_URL,
				async: false,
				dataType: 'json',
				data: { action : 'test' },
				done: function(results) {				
					JSON.parse(results);
					return results;
				},
				fail: function( jqXHR, textStatus, errorThrown ) {
					console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
				}
			}).responseJSON;
			return jdata;
		}	
			
		/* On Change Currency-1 Text Box Value */
		function convert_bitcoin(){		
			
			var bitcoin_value = $.trim( Currency1.val() );	
			var currencySelected = $.trim( selectCurrency.val() );			
			var currency_codes = get_currency_codes();
						
			if($.isNumeric(bitcoin_value) == false){					
				bitcoin_value = Currency1.val().replace(/[^0-9]/g, '');
				Currency1.val(bitcoin_value);			
				Currency2.val(currency_codes[currencySelected]['buy']*bitcoin_value);				
			}else{						
				Currency2.val(currency_codes[currencySelected]['buy']*bitcoin_value);				
			}						
		}		
		
		/* Prevent keyboard input for current2 text field */
		Currency2.keydown(function(event) { 
			return false;
		});
		
		$(window).on('load', function() {
			var currency_codes = get_currency_codes();
			
			$.each(currency_codes, function(text, key) { 
			    var option = new Option(text, text);   
				selectCurrency.append($(option));
			});	
			convert_bitcoin();
			
			Currency1.keyup(convert_bitcoin);  // On Change Currency-1 Text Box Value

            selectCurrency.change(convert_bitcoin); // On Change Currency Dropdown select options Value
		});			  
		 
		return false;

	// End of use strict
});