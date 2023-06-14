<template>
  <div class="home">
    <h1>Welcome to Inbank loan decision engine</h1>
    <br/>
    <h3>Apply for a Loan: </h3>
    <br/>

    <table style="width:100%" align="center">
      <tr>
        <th>Insert amount from 2000 EUR to 10000 EUR:</th>
      </tr>
      <tr>
        <td><input v-model="requestedAmount" type="number" min="0" step="100" placeholder="Enter required loan amount "></td>
      </tr>
      <tr>
        <th>Loan period can be from 12 to 60 months</th>
      </tr>
      <tr>
        <td><input v-model="requestedPeriod" type="number" min="0" step="1" placeholder="Enter loan period in months "></td>
      </tr>
      <tr>
        <th>Choose customer by identityCode:</th>
      </tr>
      <tr>
        <td>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </td>
      </tr>
    </table>
    <br/>

    <div>
      <b-button variant="success" v-on:click="requestLoan()">Send request</b-button>
    </div>
    <br/>
    <div id="errorMessage">
      <p v-if="errorMessage" class="regular-text" >{{ errorMessage }}</p>
    </div>

  </div>
</template>

<script>
import DecisionService from '../service/DecisionService'
export default {
  data() {
    return {
      selected: null,
      options: [
        {value: null, text: 'List of customers by identity code:'},
        {value: '49002010965', text: '49002010965'},
        {value: '49002010976', text: '49002010976'},
        {value: '49002010987', text: '49002010987'},
        {value: '49002010998', text: '49002010998'}
      ],
      'requestedAmount': '',
      'requestedPeriod': '',
      'loanResponse': '',
      'errorMessage': '',
    }
  },
  methods: {
    'requestLoan': function () {
      if (this.requestedPeriod < 12 || this.requestedPeriod > 60) {
        this.errorMessage = 'Loan period is exceeding the required period';
        return;
      } else if (this.requestedAmount < 2000 || this.requestedAmount > 10000) {
        this.errorMessage = 'Loan amount is exceeding the limit';
        return;
      } else if(this.selected===null){
        this.errorMessage = 'Please choose identity code from the list';
        return;
      }
      fetch(this.$http.get('/api/apply/' + this.requestedAmount
          + '/' + this.requestedPeriod + '/' + this.selected))
          .then(response => {
            console.log(response);
            this.loanResponse = response.data
          })
          .catch(e => {
          this.errorMessage = 'Business error: Cannot apply for a loan when customer is in debt!'
          alert(e)
          }
          )
    }
  }
}
</script>

<style>


#error{
  font-palette: light;
  color: crimson;
}

</style>