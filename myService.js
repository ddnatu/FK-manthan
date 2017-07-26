app.service('MyService', function ($http) {

    var req = {
    method: 'POST',
    url: 'http://3752fdde.ngrok.io/fetchRecords',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
            "RequestObject":"Telemetry",
            "UserID": "Admin",
            "containerName":"garwareanaloginputtelemetry",
            "fromDate":"2017-07-22 00:00:00",
            "toDate":"2017-07-22 23:00:00",
            "Tags":["LT_2_6"]
        }
    }

    this.addNums = function (text) {
        return text + "123";
    }
    this.getData = function(){
        return $http(req)
    }
});