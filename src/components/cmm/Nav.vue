<template>
	<div>
  <nav class="navbar navbar-default"></nav>
    <div class="container-fluid"></div>
      <div class="navbar-header">
        <a href="#" class="navbar-brand">비트캠프</a>
       </div>
      <ul class="nav navbar-nav">
      <li class="active"><router-link to="/">HOME</router-link></li>
        <li><router-link to="/cart">장바구니</router-link></li>
        <li><router-link to="/calculator">계산기 </router-link></li>
        <li><router-link to="/seqsum">입력된 두수사이의 자연수  </router-link></li>
        <li><router-link to="/account"> 비트은행   </router-link></li>
        <li><router-link to="/todo"> 투두    </router-link></li>
        <li><router-link to="/parent"> slot테스트     </router-link></li>
        <li>회원가입</li>
        <li>로그인 </li>
      </ul>
</div>
</template>

<script>
export default{

}
</script>


<style scoped></style>