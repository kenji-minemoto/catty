<template>
<div>
  <h2>Profile</h2>
  <div class="profile">
    <b-container>
      <b-row>
        <b-col>
          <b-col>
            <b-img thumbnail fluid src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/17361625_238509879946667_4127317760920915371_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=esIosqboxfIAX82MyT0&_nc_ht=scontent-nrt1-1.xx&oh=c4d570904bbbb3b620a3f90ef1ca1b07&oe=5EAAFDC3" alt="thumbnail"></b-img>
          </b-col>
        </b-col>
        <b-col>
          <p>
            Name：KENJI MINEMOTO
            <br><br>Located：Tokyo
            <br><br>Contact：kenji_cat_15@yahoo.co.jp
            <br><br>Business Details：Web Design & Coding
            <br><br>Coding Languages：HTML, CSS, Javascript, Ruby
            <br><br>Application Frameworks：Ruby on Rails, Vue.js
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div class="my-background">
    <h2>Background</h2>
    <ul>
      <li>In 2018.<br><br>Graduated from University</li>
      <li><br><br>~Presently.<br><br>3 years of experience in Web design and cording</li>
    </ul>
  </div>
</div>
</template>

<style scoped>
h2 {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 80px;
  font-size: 50px;
  font-weight: 100;
}
.profile {
  margin: 0 auto;
}
.profile img {
  border-radius: 20em;
  width: 60%;
  height: 60%;
  padding: 0;
}

.profile p {
  text-align: left;
  font-size: 20px;
  padding: 20px 0 20px 50px;
  background-color: rgb(246, 242, 242);
  border-radius: 3em;
}

.my-background {
  margin-top: 50px;
  text-align: center;
}
 ul {
   width: 50%;
   margin: 0 auto;
   padding: 10px;
   font-size: 20px;
 }
ul li {
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: dashed 3px #888888;
}
</style>
