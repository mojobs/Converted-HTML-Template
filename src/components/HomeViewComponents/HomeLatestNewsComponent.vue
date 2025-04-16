<script setup>
import { ref } from 'vue';
import suitman from "@/assets/img/content/grid/grid_post_1.jpg";
import travel from '@/assets/img/content/grid/grid_post_2.jpg';
import laptop from '@/assets/img/content/grid/grid_post_3.jpg';
import jogging from '@/assets/img/content/grid/grid_post_4.jpg';
const activeTab = ref(1);
const setActiveTab = (index = 5) => {
  activeTab.value = index;
  console.log(`Active tab : ${activeTab.value}`)
}
const tabData = [
  {
    index : 1,
    data : 'All',
    path : '#tab-all'
  },
  {
    index : 2,
    data : 'World',
    path : '#tab-world'
  },
  {
    index : 3,
    data : 'Lifestyle',
    path : '#tab-lifestyle'
  },
  {
    index : 4,
    data : 'Business',
    path : '#tab-business'
  },
  {
    index : 5,
    data : 'Fashion',
    path : '#tab-fashion'
  }
]
</script>

<template>
      <!-- Latest News -->
      <section class="section tab-post mb-16">
      <div class="title-wrap title-wrap--line">
        <h3 class="section-title">Latest News</h3>

        <div class="tabs tab-post__tabs"> 
          <ul class="tabs__list">
            <li v-for="data in tabData" :key="data.index" :class="{'tabs__item' :true, 'tabs__item--active' : activeTab == data.index}">
              <a  @click="setActiveTab(data.index)" :href="data.path" class="tabs__trigger">{{ data.data }}</a>
            </li>
          </ul> <!-- end tabs -->
        </div>
      </div>

      <!-- tab content -->
      <div class="tabs__content tabs__content-trigger tab-post__tabs-content">
        
        <div class="tabs__content-pane" id="tab-all" v-show="activeTab == 1" :class="{'tabs__content-pane--active' : activeTab == 1}">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src= "suitman" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="travel" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="laptop" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="jogging" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div> <!-- end pane 1 -->

        <div class="tabs__content-pane" id="tab-world" v-show="activeTab == 2" :class="{'tabs__content-pane--active' : activeTab == 2}" >
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="laptop" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="jogging" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="suitman" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="travel" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>                  
          </div>
        </div> <!-- end pane 2 -->

        <div class="tabs__content-pane" id="tab-lifestyle" v-show="activeTab == 3" :class="{'tabs__content-pane--active' : activeTab == 3}">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="suitman" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="travel" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="laptop" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="jogging" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div> <!-- end pane 3 -->

        <div class="tabs__content-pane" id="tab-business" v-show="activeTab == 4" :class="{'tabs__content-pane--active' : activeTab == 4}">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="laptop" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="jogging" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="suitman" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="travel" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>                  
          </div>
        </div> <!-- end pane 4 -->

        <div class="tabs__content-pane" id="tab-fashion" v-show="activeTab == 5" :class="{'tabs__content-pane--active' : activeTab == 5}">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="suitman" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="travel" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="laptop" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <a to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img :data-src="jogging" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </a>
                  <a to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <a to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</a>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <a to="#">DeoThemes</a>
                      </li>
                      <li class="entry__meta-date">
                        Jan 21, 2018
                      </li>
                    </ul>
                  </div>
                  <div class="entry__excerpt">
                    <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div> <!-- end pane 5 -->


        

      </div> <!-- end tab content -->            
    </section> <!-- end latest news -->
</template>