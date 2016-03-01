<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to Grails</title>

    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
</head>
<body>

<form action="/api/login" method="POST">
    username<input type="text" name="username"><br>
    password <input type="password" name="password"><br>
    <input type="submit" value="login"/>
</form>

</body>
</html>
