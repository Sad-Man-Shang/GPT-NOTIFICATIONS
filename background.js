chrome.webRequest.onCompleted.addListener(
    function(details) {
            let options = {
            type: 'basic',
            title: '请查收回答',
            message: '记得回来看答案哦～',
            iconUrl: 'icon.png'
        };
    chrome.notifications.create(options);
    },
    {
        urls: ["https://chat.openai.com/backend-api/conversation"]
    }
);
