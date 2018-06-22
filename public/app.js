var app = new Vue({
  el: '#app',
  created: function(){
      this.getData()
  },
  methods: {
      getData: function(){
                        var vm = this;
                        $.ajax({
                            url: 'https://jsonplaceholder.typicode.com/posts',
                            method: 'GET'
                        }).then(function (data) {
                            vm.items = data;     
                        });                             
      }
  },
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'No.',
          align: 'left',
          sortable: false,
          value: 'no'
        },
        { text: 'HO ID', value: 'hoid', sortable: false },
        { text: 'Commission', value: 'commission' },
        { text: 'Deposit', value: 'deposit' },
        { text: 'Deposit(Transfer)', value: 'deptransfer' },
        { text: 'Withdraw', value: 'withdraw' },
        { text: 'Withdraw(Transfer)', value: 'withtransfer' },
        { text: 'Betting Amount', value: 'betamount' },
        { text: 'Rake', value: 'rake' },
        { text: 'User Holding Money', value: 'userholding' },
        { text: 'Operating Head Office Profit', value: 'offprofit' },
        { text: 'Head Office Money', value: 'offmoney' },
        { text: 'Money of Low Rank', value: 'moneylowrank' },
        { text: 'Low Rank', value: 'lowrank' },
      ],
      items: []
    }
  }
});