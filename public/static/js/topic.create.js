jQuery(function(){

  //处理关键字
  $('#keywords').on('keyup', function(event){
    const reg = /\s+|[;，,]/g
    $(this).val($(this).val().replace(reg, ','))
  })

  $('#title').on('focus', function(event){
    $(this).siblings('.form-control-error').hide()
    $(this).parent().removeClass('has-error')
  })

  //处理话题提交
  $('.topic-create-form').on('submit', function(event){
    $this = $(this)
    $title = $this.find('input[name=title]')
    $button = $this.find('button[type=submit]')
  
    event.preventDefault()

    $this.find('.form-group').removeClass('has-error')
    $this.find('.form-group-error').hide()

    if(!$title.val().length || $title.val().length > 64 ){
      $title.siblings('.form-control-error').show()
      $title.parent().addClass('has-error')
      return false
    }

    if($button.data('ajax')){
      return false
    }

    $button.data('ajax', true).html('提交...')

    $.ajax({
      url: '/api/topic/create',
      method: 'post',
      dataType: 'json',
      data: {
        title: $title.val(),
        description: $this.find('textarea[name=description]').val(),
        keywords: $this.find('input[name=keywords]').val(),
        category: $this.find('select[name=category]').val(),
        content: $this.find('textarea[name=content]').val()
      }
    }).done(function(data){
      $button.html('提交').data('ajax', false)
      if(data.code !== 1){
        return false
      }
      $this[0].reset()

    });

  });

});