<template>
  <div class="d-flex justify-center">
    <div
      class="white pa-5 px-10"
      style="min-width: 20vw;"
    >
        <div v-if="state == 1">
        <InsertData
            :state.sync="state"
            :userId.sync="userId"
        />
        </div>
        <div v-if="state == 2">
        <ConfirmRegister :userId.sync="userId" />
        </div>
    </div>    
  </div>
</template>
<script>
  import InsertData from '~/components/register/InsertData';
  import ConfirmRegister from '~/components/register/ConfirmRegister';

  export default {
      data(){
          return{
            state: 1,
            userId:''
          }
      },
      components:{
        InsertData,
        ConfirmRegister
      }
  }
</script>