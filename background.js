chrome.runtime.onMessage.addListener(function(message, sender, response) {

    if (message.loadURL) {

        var url = sender.tab.url;
        var a = url.split('sd2e.org/user/');
        a[0] = a[0].concat('sd2e.org/user/');

        // Replace this with your username
        var username = 'jeg';

        a[0] = a[0].concat(username);

        a[0].concat('/');


        var name = '';
        var found = false;

        for(var c in a[1]) {
            if( a[1][c] == '/'){
                found = true;
            }

            if(!found){
                name = name.concat(a[1][c])
            }
            else{
                   a[0].concat(a[1][c]);
            }
        }
        console.log(name);
        if(name.toLowerCase() != username.toLowerCase()) {
            chrome.tabs.update(sender.tab.id, {url: a[0]});
        }
    }
}
);