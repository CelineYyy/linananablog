<template>
  <div class="workui">
    <div class="wrap">
      <div class="design-header">
        <div class="design-header-title color-white text-center">作品集</div>
      </div>
      <div class="content">
        <!-- 导航栏 开始 -->
        <div class="navbox">
          <!-- 搜索栏 -->
          <div class="searchbox">
            <form action class="parent">
              <input type="text" class="search" placeholder="请输入您要搜索的关键词" />
              <input type="button" name id class="btn" />
            </form>
          </div>

          <!-- 导航列表 开始 -->
          <div class="navlist-ui">
            <ul>
              <li class="now" id="cur">
                <a href="#">UI设计</a>
              </li>
              <li>
                <a href="#">网页设计</a>
              </li>
              <li>
                <a href="#">平面设计</a>
              </li>
              <li>
                <a href="#">手绘插画</a>
              </li>
              <li>
                <a href="#">其他</a>
              </li>
            </ul>
          </div>
          <!-- 导航列表 结束 -->
        </div>
        <!-- 导航栏 结束 -->
        <MenuComponent></MenuComponent>

        <div class="backtop">
          <a href="#top" target="_self">
            <img src="././../assets/img/icon_backtop.png" alt />
          </a>
        </div>
      </div>

      <div class="cases">
        <div class="content">
          <div class="cases-content">
            <!-- 1 -->
            <div>
              <div class="item">
                <div class="pic-box"></div>
                <div class="item-type text-center">XXXAPP·UI设计</div>
                <div class="item-description text-center">原创</div>
              </div>
            </div>
            <!-- 1 -->
            <!-- 2 -->
            <div>
              <div class="item">
                <div class="pic-box"></div>
                <div class="item-type text-center">XXXAPP·UI设计</div>
                <div class="item-description text-center">原创</div>
              </div>
            </div>
            <!-- 2 -->
            <!-- 3 -->
            <div>
              <div class="item">
                <div class="pic-box"></div>
                <div class="item-type text-center">XXXAPP·UI设计</div>
                <div class="item-description text-center">原创</div>
              </div>
            </div>
            <!-- 3 -->
            <!-- 4 -->
            <div>
              <div class="item">
                <div class="pic-box"></div>
                <div class="item-type text-center">XXXAPP·UI设计</div>
                <div class="item-description text-center">临摹</div>
              </div>
            </div>
            <!-- 4 -->
            <!-- 5 -->
            <div>
              <div class="item">
                <div class="pic-box"></div>
                <div class="item-type text-center">XXXAPP·UI设计</div>
                <div class="item-description text-center">原创</div>
              </div>
            </div>
            <!-- 5 -->
            <!-- 6 -->
            <div>
              <div class="item">
                <div class="pic-box"></div>
                <div class="item-type text-center">XXXAPP·UI设计</div>
                <div class="item-description text-center">临摹</div>
              </div>
            </div>
            <!-- 6 -->
            <!-- 7 -->
            <div>
              <div class="item">
                <div class="pic-box"></div>
                <div class="item-type text-center">XXXAPP·UI设计</div>
                <div class="item-description text-center">临摹</div>
              </div>
            </div>
            <!-- 7 -->
          </div>
        </div>
      </div>
      <!-- working end -->

      <!-- copyright start -->
      <div class="copyright">
        <div class="content">
          <div class="copytext text-center">Copyright(C)2019 nn.365d1.com . All rights reserved.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponent from "./../components/MenuComponent";
export default {
  name: "workui",
  components: {
    MenuComponent
  }
};
</script>
