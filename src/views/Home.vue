<template>
  <div>
    <div id="top">
      <b-img class="top-image" src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/17155207_234767203654268_129965347966759866_n.jpg?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=J1PFd7v2h_gAX9G5_os&_nc_ht=scontent-nrt1-1.xx&oh=0f147e3b05d08afcb5392996822e1352&oe=5EA2ECC7" fluid alt="Responsive image"></b-img>
    </div>
    <div>
      <h2 class="serivce">SERVICE</h2>
      <ul>
        <li class="right-content">
          <h4>DESIGN</h4>
          <div>
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
          </div>
          <p>綿密なヒアリングに基づいたプランに沿って、イメージ通りのデザインを作成いたします。訪れたユーザーが迷うことないデザインを意識し、目的を達成できるユーザビリティの高いデザインを心がけています。いただいた仕様通り機械的に作業を行うのではなく、プランに合わせた最適な提案をさせていただきます。</p>
        </li>
        <li class="left-content">
          <h4>CODING</h4>
          <div>
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
          </div>
          <p>デザインの意図を理解し動きや効果を付けることでよりユーザビリティの高いWebサイトに仕上げることを心がけています。モバイルアプリやWordPressを使用した更新の簡単なサイト、Javascriptを使用した動きのあるサイトなど様々なコーディングのご対応が可能です。</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

h2.serivce {
  text-align: center;
  padding-top: 150px;
  padding-bottom: 100px;
  font-size: 50px;
  font-weight: 100;
}
ul {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
ul li {
  list-style: none;
}

.right-content {
  width: 45%;
  float: right;
}

.left-content {
  width: 45%;
  float: none;
}

li h4 {
  text-align: center;
  font-size: 40px;
  padding-top: 30px;
  padding-bottom: 50px;
}
li p {
  font-size: 20px;
  padding-top: 50px;
  text-align: left;
}

.top-image {
  width: 100%;
  height: 500px;
  }
</style>
