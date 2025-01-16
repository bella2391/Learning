# Java-TypeScript

## Description - ToDoApp

Can log in via google, twitter, discord.  
![alt text](https://github.com/bella2391/branding/blob/master/explain/learning/js_ts/login_form.png)  
After login successfully, redirecting.  
![alt text](https://github.com/bella2391/branding/blob/master/explain/learning/js_ts/redirect.png)  
Can write todo list.  
![alt text](https://github.com/bella2391/branding/blob/master/explain/learning/js_ts/todo.png)

## Reference

The main for ToDoApp is [”Introduction to Creating Web Applications with Node.js”](https://zenn.dev/wkb/books/node-tutorial).  
For details, please refer to [link.txt](/learning/link.txt).

## Comment

Many things I added after the fact to make it usable in a production environment.  
For example, I think the csrf countermeasure is perfect.  
Want to know more about middleware quickly: [~/middlewares](todoapp/src/middlewares)

## Env

```env
MYSQL_HOST=localhost
MYSQL_USER=node
MYSQL_PASSWORD=mysqlsecret
MYSQL_DATABASE=node

COOKIE_SECRET=randomsecretispreferred

DISCORD_CLIENT_ID=0000000000000000000
DISCORD_CLIENT_SECRET=discordappssecret

GOOGLE_CLIENT_ID=000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=googleoauthclientsecrets

X_CONSUMER_KEY=generatedfromxdeveloperportal
X_CONSUMER_SECRET=xoauthsecret

ORG_NAME=FMC
ORG_YEAR=20XX
ORG_LOGO_URL=https://~/xxx.png
PRODUCTION_HOST=example.com
IS_HTTPS=true

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@sample.com
SMTP_PASS=smtpsecret

JWT_SECRET=randomsecret

APP_NAME=Sample App

SUCCESS_REDIRECT=/
```

## Database

Unfortunately, only MySQL is supported since I have only used MySQL.  
Please see [create_tables.sql](todoapp/create_tables.sql) for the query.

## Role of learning directory

- [link.txt](learning/link.txt):
 Links referenced to create this repository
- [cmd.txt](learning/cmd.txt):
 A collection of commands you may use later

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt)

## Credits

This project uses other external assets someone creates - see the [CREDITS.txt](CREDITS.txt)
