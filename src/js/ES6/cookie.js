let cookie = {
    create : function(key,value,expires){
        let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
        if(!isNaN(expires)){
            let date = new Date();
            date.setDate(date.getDate() + expires);
            cookieText = cookieText + ';expires=' + date;
        }
        document.cookie = cookieText;
    },
    get : function(key){
        let str = document.cookie;
        let arr = str.split('; ');
        for(let i = 0 ; i < arr.length ; i ++){
            let list = arr[i].split('=');
            if(encodeURIComponent(key) == list[0]){
                return decodeURIComponent(list[1]);
            }
        }
    },
    remove : function(key){
        document.cookie = encodeURIComponent(key) + '=;path=/;expires=' + new Date(-1);
    }
}

function abc(cookieStr){
    if(!cookieStr){
        return {};
    }
    return JSON.parse(cookieStr);
}