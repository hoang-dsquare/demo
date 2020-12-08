function createMeeting(data , doneCallback , errorCallback){
    var settings = {
      "url": "https://webexapis.com/v1/meetings",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('access_token')
      },
      "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function (response) {
       doneCallback(response)
    }).fail(function (response) {
         errorCallback(response)
     })
}



function getMeetingNow( doneCallback , errorCallback){
    var settings = {
      "url": "https://webexapis.com/v1/meetingPreferences/personalMeetingRoom",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('access_token')
      },
    };

    $.ajax(settings).done(function (response) {
       doneCallback(response)
    }).fail(function (response) {
         errorCallback(response)
     })
}