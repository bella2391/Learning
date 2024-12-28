const fetch = require('node-fetch');  // fetchを使用するためのインポート
const cheerio = require('cheerio');    // cheerioを使用するためのインポート

// まず、GETリクエストでページの内容を取得
fetch('http://localhost:3001/signin', { 
    method: 'GET', 
    credentials: 'include' // クッキーを送信
})
    .then(response => response.text())  // レスポンスのHTMLを取得
    .then(data => {
        // cheerioでHTMLをパース
        const $ = cheerio.load(data);
        const csrfToken = $('input[name="_csrf"]').val(); // CSRFトークンの値を取得

        console.log("CSRF Token:", csrfToken); // トークンを確認

        // トークンを含むPOSTリクエストを送信
        fetch('http://localhost:3001/signin', {
            method: 'POST',
            credentials: 'include',  // クッキーを送信
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `_csrf=${csrfToken}&username=root&password=root` // CSRFトークンを送信
        }).then(response => {
            console.log(response);
            response.text().then(data => {
                console.log(data);  // レスポンス内容を表示
            });
        });

        /*fetch('http://localhost:3001/signin', {
            method: 'POST',
            credentials: 'include',  // クッキーを送信
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _csrf: csrfToken, username: 'root', password: 'root' }) // JSONで送信
        }).then(response => {
            console.log(response);
            response.text().then(data => {
                console.log(data);  // レスポンス内容を表示
            });
        });*/
    });
