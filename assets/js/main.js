/*fetch("https://raw.githubusercontent.com/devreader/app-android/master/ota/beta.json")
  .then(response => response.json())
  .then(json => console.log(json.versionName))
  .catch(function(err) {
    console.log('Fetch Error :-S', err);  
  }
);*/

fetch('https://raw.githubusercontent.com/devreader/app-android/master/ota/beta.json')
  .then(response => response.ok ? response : Promise.reject(response))
  .then(response => response.json()) // или как текст `response.text()`
  .then(json => {
     console.log(json);
     document.getElementById("versionName").innerHTML = json.versionName;
     document.getElementById("versionCode").innerHTML = json.versionCode;
     document.getElementById("updateMessage").innerHTML = json.updateMessage;
     document.getElementById("apkUrl").innerHTML = json.apkUrl;
     document.getElementById("changelogUrl").innerHTML = json.changelogUrl;
  }
);