jQuery(function($) {
    $("input[name='radio']").click(function() {
        if(this.value == 'radio1'){
        	var rb1= $('#radio1').is(':checked');
        	$('#submit1').prop('disabled',!(rb1));
        	$('#submit2').prop('disabled',(rb1));
        	$('#submit3').prop('disabled',(rb1));
        	$('#submit4').prop('disabled',(rb1));
        	$('#submit5').prop('disabled',(rb1));
        	$('#submit6').prop('disabled',(rb1));
        	$('#submit7').prop('disabled',(rb1));
        	$('#submit8').prop('disabled',(rb1));
        	$('#submit9').prop('disabled',(rb1));
        	$('#submit10').prop('disabled',(rb1));
        	$('#carSelect1').prop('disabled',!(rb1));
        	$('#carSelect2').prop('disabled',(rb1));
        	$('#carSelect3').prop('disabled',(rb1));
        	$('#carSelect4').prop('disabled',(rb1));
        	$('#carSelect5').prop('disabled',(rb1));
        	$('#carSelect6').prop('disabled',(rb1));
        	$('#carSelect7').prop('disabled',(rb1));
        	$('#carSelect8').prop('disabled',(rb1));
        	$('#carSelect9').prop('disabled',(rb1));
        	$('#carSelect10').prop('disabled',(rb1));
        }else if(this.value == 'radio2'){
        	var rb2= $('#radio2').is(':checked');
        	$('#submit1').prop('disabled',(rb2));
        	$('#submit2').prop('disabled',!(rb2));
        	$('#submit3').prop('disabled',(rb2));
        	$('#submit4').prop('disabled',(rb2));
        	$('#submit5').prop('disabled',(rb2));
        	$('#submit6').prop('disabled',(rb2));
        	$('#submit7').prop('disabled',(rb2));
        	$('#submit8').prop('disabled',(rb2));
        	$('#submit9').prop('disabled',(rb2));
        	$('#submit10').prop('disabled',(rb2));
        	$('#carSelect1').prop('disabled',(rb2));
        	$('#carSelect2').prop('disabled',!(rb2));
        	$('#carSelect3').prop('disabled',(rb2));
        	$('#carSelect4').prop('disabled',(rb2));
        	$('#carSelect5').prop('disabled',(rb2));
        	$('#carSelect6').prop('disabled',(rb2));
        	$('#carSelect7').prop('disabled',(rb2));
        	$('#carSelect8').prop('disabled',(rb2));
        	$('#carSelect9').prop('disabled',(rb2));
        	$('#carSelect10').prop('disabled',(rb2));
        }else if(this.value == 'radio3'){
        	var rb3= $('#radio3').is(':checked');
        	$('#submit1').prop('disabled',(rb3));
        	$('#submit2').prop('disabled',(rb3));
        	$('#submit3').prop('disabled',!(rb3));
        	$('#submit4').prop('disabled',(rb3));
        	$('#submit5').prop('disabled',(rb3));
        	$('#submit6').prop('disabled',(rb3));
        	$('#submit7').prop('disabled',(rb3));
        	$('#submit8').prop('disabled',(rb3));
        	$('#submit9').prop('disabled',(rb3));
        	$('#submit10').prop('disabled',(rb3));
        	$('#carSelect1').prop('disabled',(rb3));
        	$('#carSelect2').prop('disabled',(rb3));
        	$('#carSelect3').prop('disabled',!(rb3));
        	$('#carSelect4').prop('disabled',(rb3));
        	$('#carSelect5').prop('disabled',(rb3));
        	$('#carSelect6').prop('disabled',(rb3));
        	$('#carSelect7').prop('disabled',(rb3));
        	$('#carSelect8').prop('disabled',(rb3));
        	$('#carSelect9').prop('disabled',(rb3));
        	$('#carSelect10').prop('disabled',(rb3));
        }else if(this.value == 'radio4'){
        	var rb4= $('#radio4').is(':checked');
        	$('#submit1').prop('disabled',(rb4));
        	$('#submit2').prop('disabled',(rb4));
        	$('#submit3').prop('disabled',(rb4));
        	$('#submit4').prop('disabled',!(rb4));
        	$('#submit5').prop('disabled',(rb4));
        	$('#submit6').prop('disabled',(rb4));
        	$('#submit7').prop('disabled',(rb4));
        	$('#submit8').prop('disabled',(rb4));
        	$('#submit9').prop('disabled',(rb4));
        	$('#submit10').prop('disabled',(rb4));
        	$('#carSelect1').prop('disabled',(rb4));
        	$('#carSelect2').prop('disabled',(rb4));
        	$('#carSelect3').prop('disabled',(rb4));
        	$('#carSelect4').prop('disabled',!(rb4));
        	$('#carSelect5').prop('disabled',(rb4));
        	$('#carSelect6').prop('disabled',(rb4));
        	$('#carSelect7').prop('disabled',(rb4));
        	$('#carSelect8').prop('disabled',(rb4));
        	$('#carSelect9').prop('disabled',(rb4));
        	$('#carSelect10').prop('disabled',(rb4));
        }else if(this.value == 'radio5'){
        	var rb5= $('#radio5').is(':checked');
        	$('#submit1').prop('disabled',(rb5));
        	$('#submit2').prop('disabled',(rb5));
        	$('#submit3').prop('disabled',(rb5));
        	$('#submit4').prop('disabled',(rb5));
        	$('#submit5').prop('disabled',!(rb5));
        	$('#submit6').prop('disabled',(rb5));
        	$('#submit7').prop('disabled',(rb5));
        	$('#submit8').prop('disabled',(rb5));
        	$('#submit9').prop('disabled',(rb5));
        	$('#submit10').prop('disabled',(rb5));
        	$('#carSelect1').prop('disabled',(rb5));
        	$('#carSelect2').prop('disabled',(rb5));
        	$('#carSelect3').prop('disabled',(rb5));
        	$('#carSelect4').prop('disabled',(rb5));
        	$('#carSelect5').prop('disabled',!(rb5));
        	$('#carSelect6').prop('disabled',(rb5));
        	$('#carSelect7').prop('disabled',(rb5));
        	$('#carSelect8').prop('disabled',(rb5));
        	$('#carSelect9').prop('disabled',(rb5));
        	$('#carSelect10').prop('disabled',(rb5));
        }else if(this.value == 'radio6'){
        	var rb6= $('#radio6').is(':checked');
        	$('#submit1').prop('disabled',(rb6));
        	$('#submit2').prop('disabled',(rb6));
        	$('#submit3').prop('disabled',(rb6));
        	$('#submit4').prop('disabled',(rb6));
        	$('#submit5').prop('disabled',(rb6));
        	$('#submit6').prop('disabled',!(rb6));
        	$('#submit7').prop('disabled',(rb6));
        	$('#submit8').prop('disabled',(rb6));
        	$('#submit9').prop('disabled',(rb6));
        	$('#submit10').prop('disabled',(rb6));
        	$('#carSelect1').prop('disabled',(rb6));
        	$('#carSelect2').prop('disabled',(rb6));
        	$('#carSelect3').prop('disabled',(rb6));
        	$('#carSelect4').prop('disabled',(rb6));
        	$('#carSelect5').prop('disabled',(rb6));
        	$('#carSelect6').prop('disabled',!(rb6));
        	$('#carSelect7').prop('disabled',(rb6));
        	$('#carSelect8').prop('disabled',(rb6));
        	$('#carSelect9').prop('disabled',(rb6));
        	$('#carSelect10').prop('disabled',(rb6));
        }else if(this.value == 'radio7'){
        	var rb7= $('#radio7').is(':checked');
        	$('#submit1').prop('disabled',(rb7));
        	$('#submit2').prop('disabled',(rb7));
        	$('#submit3').prop('disabled',(rb7));
        	$('#submit4').prop('disabled',(rb7));
        	$('#submit5').prop('disabled',(rb7));
        	$('#submit6').prop('disabled',(rb7));
        	$('#submit7').prop('disabled',!(rb7));
        	$('#submit8').prop('disabled',(rb7));
        	$('#submit9').prop('disabled',(rb7));
        	$('#submit10').prop('disabled',(rb7));
        	$('#carSelect1').prop('disabled',(rb7));
        	$('#carSelect2').prop('disabled',(rb7));
        	$('#carSelect3').prop('disabled',(rb7));
        	$('#carSelect4').prop('disabled',(rb7));
        	$('#carSelect5').prop('disabled',(rb7));
        	$('#carSelect6').prop('disabled',(rb7));
        	$('#carSelect7').prop('disabled',!(rb7));
        	$('#carSelect8').prop('disabled',(rb7));
        	$('#carSelect9').prop('disabled',(rb7));
        	$('#carSelect10').prop('disabled',(rb7));
        }else if(this.value == 'radio8'){
        	var rb8= $('#radio8').is(':checked');
        	$('#submit1').prop('disabled',(rb8));
        	$('#submit2').prop('disabled',(rb8));
        	$('#submit3').prop('disabled',(rb8));
        	$('#submit4').prop('disabled',(rb8));
        	$('#submit5').prop('disabled',(rb8));
        	$('#submit6').prop('disabled',(rb8));
        	$('#submit7').prop('disabled',(rb8));
        	$('#submit8').prop('disabled',!(rb8));
        	$('#submit9').prop('disabled',(rb8));
        	$('#submit10').prop('disabled',(rb8));
        	$('#carSelect1').prop('disabled',(rb8));
        	$('#carSelect2').prop('disabled',(rb8));
        	$('#carSelect3').prop('disabled',(rb8));
        	$('#carSelect4').prop('disabled',(rb8));
        	$('#carSelect5').prop('disabled',(rb8));
        	$('#carSelect6').prop('disabled',(rb8));
        	$('#carSelect7').prop('disabled',(rb8));
        	$('#carSelect8').prop('disabled',!(rb8));
        	$('#carSelect9').prop('disabled',(rb8));
        	$('#carSelect10').prop('disabled',(rb8));
        }else if(this.value == 'radio9'){
        	var rb9= $('#radio9').is(':checked');
        	$('#submit1').prop('disabled',(rb9));
        	$('#submit2').prop('disabled',(rb9));
        	$('#submit3').prop('disabled',(rb9));
        	$('#submit4').prop('disabled',(rb9));
        	$('#submit5').prop('disabled',(rb9));
        	$('#submit6').prop('disabled',(rb9));
        	$('#submit7').prop('disabled',(rb9));
        	$('#submit8').prop('disabled',(rb9));
        	$('#submit9').prop('disabled',!(rb9));
        	$('#submit10').prop('disabled',(rb9));
        	$('#carSelect1').prop('disabled',(rb9));
        	$('#carSelect2').prop('disabled',(rb9));
        	$('#carSelect3').prop('disabled',(rb9));
        	$('#carSelect4').prop('disabled',(rb9));
        	$('#carSelect5').prop('disabled',(rb9));
        	$('#carSelect6').prop('disabled',(rb9));
        	$('#carSelect7').prop('disabled',(rb9));
        	$('#carSelect8').prop('disabled',(rb9));
        	$('#carSelect9').prop('disabled',!(rb9));
        	$('#carSelect10').prop('disabled',(rb9));
        }else if(this.value == 'radio10'){
        	var rb10= $('#radio10').is(':checked');
        	$('#submit1').prop('disabled',(rb10));
        	$('#submit2').prop('disabled',(rb10));
        	$('#submit3').prop('disabled',(rb10));
        	$('#submit4').prop('disabled',(rb10));
        	$('#submit5').prop('disabled',(rb10));
        	$('#submit6').prop('disabled',(rb10));
        	$('#submit7').prop('disabled',(rb10));
        	$('#submit8').prop('disabled',(rb10));
        	$('#submit9').prop('disabled',(rb10));
        	$('#submit10').prop('disabled',!(rb10));
        	$('#carSelect1').prop('disabled',(rb10));
        	$('#carSelect2').prop('disabled',(rb10));
        	$('#carSelect3').prop('disabled',(rb10));
        	$('#carSelect4').prop('disabled',(rb10));
        	$('#carSelect5').prop('disabled',(rb10));
        	$('#carSelect6').prop('disabled',(rb10));
        	$('#carSelect7').prop('disabled',(rb10));
        	$('#carSelect8').prop('disabled',(rb10));
        	$('#carSelect9').prop('disabled',(rb10));
        	$('#carSelect10').prop('disabled',!(rb10));
        	}
       
  
       
       
    });
});