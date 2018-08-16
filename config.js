import webapi from './webapi'


var _options = {
	webapi,
	webapiMap: {
		'login':'/v1/sys/user/login'
	},
	logo: 'logo.png',
	websiteName: '系统',
	copyright: 'copyright © 2018 WhatsMk',
	goAfterSignIn: {
		appName: 'mk-sys-portal',
		appParams: {}
	},
	goSignUp:{
		appName: 'mk-sys-sign-in',
		appParams: {}
	},
	goForgot:{
		appName: 'mk-sys-forgot-password',
		appParams: {}
	}
	
}


function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config