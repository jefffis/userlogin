$(function(){
	var $site_id = $('#site-id');
	var $email = $('#email');
	var $password = $('#password');
	var $logo = $('#logo');
	var $unmask = $('#unmask');
	var $form = $('form');
	var $submit = $('#submit');
	var $forgot_email = $('#forgot-email');

	$form.on('submit',function(){
		return false;
	});

	// on blur, faux-check 
	$site_id.on('blur',function(){
		var $this = $(this);
		if($this.val()!=''){
			$this.addClass('good');
			$this.removeClass('bad');
			if($logo.attr('src')!='images/alt-logo.png'){
					setTimeout(function(){
						$logo.attr('src','images/alt-logo.png');
					}, 1000);
			}
			$this.parent().find('#error1').remove();
			$this.after('<span class="icon-ok good i" id="good1"></span>');
		}else{
			$this.removeClass('good');
			$this.addClass('bad');
			$this.parent().find('#good1').remove();
			$this.after('<span class="icon-bolt bad i" id="error1"></span>');
		}
	});

	$email.on('blur',function(){
		var $this = $(this);
		if($this.val()!=''){
			$this.addClass('good');
			$this.removeClass('bad');
			$this.parent().find('#error1').remove();
			$this.after('<span class="icon-ok good i" id="good1"></span>');
		}else{
			$this.removeClass('good');
			$this.addClass('bad');
			$this.parent().find('#good1').remove();
			$this.after('<span class="icon-bolt bad i" id="error1"></span>');
		}
	});

	$password.on('blur',function(){
		var $this = $(this);
		if($this.val()!=''){
			$this.addClass('good');
			$this.next('input').addClass('good');
			$this.removeClass('bad');
			$this.parent().find('#error1').remove();
			$this.after('<span class="icon-ok good i" id="good1"></span>');
		}else{
			$this.removeClass('good');
			$this.addClass('bad');
			$this.parent().find('#good1').remove();
			$this.after('<span class="icon-bolt bad i" id="error1"></span>');
		}
	});

	$submit.on('click',function(){
		var $this = $(this);
		$this.val('').css({
			'font-family':'FontAwesome',
			'padding': '1.15em 3em 1.25em'
			//'-webkit-animation':'spin 2s infinite linear'
		}).addClass('think');
	});

	$unmask.on('click',function(){
		var $this = $(this);
		var $pas_val = $password.val();

		if($this.is(':checked')){
			$password.hide();
			$password.after('<input type="text" id="email" value="'+$pas_val+'" class="good" />');
		}else{
			$password.show();
			$password.next('input').hide();
		}

	});

	$forgot_email.on('blur',function(){
		var $this = $(this);
		if($this.val()!=''){
			$this.fadeOut(100);
			//$this.previous('span').fadeOut(100);
			$this.parent().after('<div class="next">We&rsquo;ve sent you an email from <strong>LeagueApps Support</strong> from the email address <strong>help@leagueapps.com</strong> with a link to reset your password.</div>');
		}
	});

});