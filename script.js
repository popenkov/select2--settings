$(document).ready(function() {
  $('.js-select').select2();

  $('.js-select').on('change', function() {
    
    var options = $(this).val();
    // ["Имя 1", "Имя 3"]
    
    var $line = $(this).closest('.js-select-wrapper').find('.js-options-line');
    
    $line.html('');
    
    for(var i = 0; i < options.length; i++) {
      $line.append('<div class="item js-item" data-value="'+options[i]+'">'+options[i]+' x</div>');
    }
    
  });

  $(document).on('click', '.js-item', function() {
      var value = $(this).attr('data-value');
      var $select = $(this).closest('.js-select-wrapper').find('.js-select');
      var options = $select.val();
    
      var newOptions = options.filter(function(item) {
        return item !== value
      });
      
      $select.val(newOptions);
    
      $(this).remove();
  })
});