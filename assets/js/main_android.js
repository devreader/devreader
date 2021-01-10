let versionName = document.getElementById("android_currentVersion"),
    updateMessage = document.getElementById("android_updateMessage"),
    bannerBlock = document.getElementById("android_bannerBlock");

fetch('https://raw.githubusercontent.com/devreader/app-android/master/ota/beta.json')
  .then(response => response.ok ? response : Promise.reject(response))
  .then(response => response.json()) // или как текст `response.text()`
  .then(json => {

     console.log(json);
     
     versionName.innerHTML = json.versionName + " (" + json.versionCode + ")";
     updateMessage.innerHTML = json.updateMessage;
     bannerBlock.onclick = function() { location.href=json.changelogUrl; };
     bannerBlock.setAttribute("title", "Нажмите, чтобы перейти на страницу загрузки DevReader " + json.versionName + " по адресу: " + json.changelogUrl);

  }
);