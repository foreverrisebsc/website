/*================================================================================
	Item Name: ForeverRise Token
	Version: 1.0
	Author: 
	Author URL: 
================================================================================

NOTE:
------
PLACE HERE YOUR OWN SCRIPT CODES AND IF NEEDED, OVERRIDE THE SCRIPT FROM THE OTHER JAVASCRIPTS. */



/*===================================================================================*/
/*  clipboard tooltip
/*===================================================================================*/
$('a').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });
  
  function setTooltip(btn, message) {
    $(btn).tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  
  function hideTooltip(btn) {
    setTimeout(function() {
      $(btn).tooltip('hide');
    }, 1000);
  }
  
  var clipboard = new ClipboardJS('a');
  
  clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
  
      e.clearSelection();
      setTooltip(e.trigger, 'Copied!');
      hideTooltip(e.trigger);
  });