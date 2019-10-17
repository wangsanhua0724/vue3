<template>
     <div class="newsList">
    <ul>
      <router-link tag="li" to="/detail/1">
        <a href="javascript:;">
          <h2>1.hello</h2>
          <p>Whose speech is so detailed and clear?</p>
        </a>
      </router-link>
      <router-link tag="li" to="/detail/2">
        <a href="javascript:;">
          <h2>2.hello</h2>
          <p>Whose speech is so detailed and clear?</p>
        </a>
      </router-link>
      <router-link tag="li" to="/detail/3">
        <a href="javascript:;">
          <h2>3.hello</h2>
          <p>Whose speech is so detailed and clear?</p>
        </a>
      </router-link>
      <router-link tag="li" to="/detail/4">
        <a href="javascript:;">
          <h2>4.hello</h2>
          <p>Whose speech is so detailed and clear?</p>
        </a>
      </router-link>
      <router-link tag="li" to="/detail/5">
        <a href="javascript:;">
          <h2>5.hello</h2>
          <p>Whose speech is so detailed and clear?</p>
        </a>
      </router-link>
      <router-link tag="li" to="/detail/6">
        <a href="javascript:;">
          <h2>6.hello</h2>
          <p>Whose speech is so detailed and clear?</p>
        </a>
      </router-link>
      <router-link tag="li" to="/detail/7">
        <a href="javascript:;">
          <h2>7.hello</h2>
          <p>Whose speech is so detailed and clear?</p>
        </a>
      </router-link>

    </ul>
  </div>
</template>

<style scoped>
.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
</style>