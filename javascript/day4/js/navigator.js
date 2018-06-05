function checkNavigator(){
    var str = new string();
    str = "appCodeName :" + navigator.appCodeName; +"\n";
    str += "appName :" + navigator.appName;+"\n";
    str += "cookieEnabled :" + navigator.cookieEnabled;+"\n";
    str += "onLine :" + navigator.onLine;+"\n";
    str += "platform :" + navigator.platform;+"\n";
    str += "userAgent :" + navigator.userAgent;+"\n";
    str += "appVersion :" + navigator.appVersion;+"\n";
    str += "language :" + navigator.language;+"\n";
    str += "product :" + navigator.product;+"\n";

    alert(str);
}