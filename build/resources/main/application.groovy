

// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'com.crm.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'com.crm.UserRole'
grails.plugin.springsecurity.authority.className = 'com.crm.Role'
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
	[pattern: '/',               access: ['permitAll']],
	[pattern: '/home/**',               access: ['permitAll']],
	[pattern: '/error',          access: ['permitAll']],
	[pattern: '/index',          access: ['permitAll']],
	[pattern: '/index.gsp',      access: ['permitAll']],
	[pattern: '/shutdown',       access: ['permitAll']],
	[pattern: '/assets/**',      access: ['permitAll']],
	[pattern: '/**/js/**',       access: ['permitAll']],
	[pattern: '/**/css/**',      access: ['permitAll']],
	[pattern: '/**/images/**',   access: ['permitAll']],
	[pattern: '/**/favicon.ico', access: ['permitAll']],
	[pattern: '/api/**', access: ['isFullyAuthenticated()']]
]

grails.plugin.springsecurity.filterChain.chainMap = [
	[pattern: '/assets/**',      filters: 'none'],
	[pattern: '/**/js/**',       filters: 'none'],
	[pattern: '/**/css/**',      filters: 'none'],
	[pattern: '/**/images/**',   filters: 'none'],
	[pattern: '/**/favicon.ico', filters: 'none'],
	[pattern: '/**',             filters: 'JOINED_FILTERS']
]

grails.plugin.springsecurity.filterChain.chainMap = [
		//Stateless chain
		[
				pattern: '/api/**',
				filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter'
		],

		//Traditional chain
		[
				pattern: '/**',
				filters: 'JOINED_FILTERS,-restTokenValidationFilter,-restExceptionTranslationFilter'
		]
]
grails.plugin.springsecurity.rest.login.active=true
grails.plugin.springsecurity.rest.login.endpointUrl='/api/login'
grails.plugin.springsecurity.rest.login.failureStatusCode=401
grails.plugin.springsecurity.rest.login.useJsonCredentials=true
grails.plugin.springsecurity.rest.login.usernamePropertyName='username' //to be used if request is json
grails.plugin.springsecurity.rest.login.passwordPropertyName='password' //to be used if request is json
grails.plugin.springsecurity.rest.login.useJsonCredentials=true
grails.plugin.springsecurity.rest.logout.endpointUrl='/api/logout'
//grails.plugin.springsecurity.rest.token.storage.useGorm=true
//grails.plugin.springsecurity.rest.token.storage.gorm.tokenDomainClassName='example.AuthenticationToken'
//grails.plugin.springsecurity.rest.token.storage.gorm.tokenValuePropertyName='tokenValue'
//grails.plugin.springsecurity.rest.token.storage.gorm.usernamePropertyName='username'
grails.plugin.springsecurity.rest.token.generation.useSecureRandom=true
grails.plugin.springsecurity.rest.token.validation.headerName='X-Auth-Token'
grails.plugin.springsecurity.rest.token.generation.useUUID=false
grails.plugin.springsecurity.rest.token.validation.active=true
grails.plugin.springsecurity.rest.token.validation.endpointUrl='/api/validate'

grails.plugin.springsecurity.rest.token.rendering.usernamePropertyName = 'login'
grails.plugin.springsecurity.rest.token.rendering.tokenPropertyName = 'access_token'
grails.plugin.springsecurity.rest.token.rendering.authoritiesPropertyName = 'permissions'

//grails.plugin.springsecurity.rest.login.useRequestParamsCredentials=true
//grails.plugin.springsecurity.rest.login.usernameParameter='username'
//grails.plugin.springsecurity.rest.login.passwordParameter='password'

