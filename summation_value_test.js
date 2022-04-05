var bills = [
    {
      "refNo": 17,
      "billDate": "1-apr-2016",
      "dueDate": "30-apr-2016",
      "pendingAmount": 0.01333333333333333333,
      "overdueDays": 28
    },
    {
      "refNo": 20,
      "billDate": "15-apr-2016",
      "dueDate": "3-may-2016",
      "pendingAmount": 2.5555555555555555555555,
      "overdueDays": 15
    }
  ];

  var result = bills.reduce(function(_this, val) {
    return _this + val.pendingAmount
}, 0);

console.log(result)
