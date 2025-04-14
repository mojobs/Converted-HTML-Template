<script setup>
import { RouterLink } from 'vue-router';
const currentSelectedTabIndex = ref(0);
const tabData = [
  {
    data : 'All',
    path : '#tab-all'
  },
  {
    data : 'World',
    path : '#tab-world'
  },
  {
    data : 'Lifestyle',
    path : '#tab-lifestyle'
  },
  {
    data : 'Business',
    path : '#tab-business'
  },
  {
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
            <li class="tabs__item tabs__item--active">
              <RouterLink v-for="data in tabData" :to="data.path" class="tabs__trigger">{{ data.data }}</RouterLink>
            </li>
          </ul> <!-- end tabs -->
        </div>
      </div>

      <!-- tab content -->
      <div class="tabs__content tabs__content-trigger tab-post__tabs-content">
        
        <div class="tabs__content-pane tabs__content-pane--active" id="tab-all">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/grid_post_1.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_2.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_3.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_4.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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

        <div class="tabs__content-pane" id="tab-world">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_3.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_4.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_1.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_2.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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

        <div class="tabs__content-pane" id="tab-lifestyle">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_1.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_2.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_3.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_4.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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

        <div class="tabs__content-pane" id="tab-business">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_3.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_4.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_1.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_2.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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

        <div class="tabs__content-pane" id="tab-fashion">
          <div class="row card-row">
            <div class="col-md-6">
              <article class="entry card">
                <div class="entry__img-holder card__img-holder">
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_1.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_2.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">3 Things You Can Do to Get Your Customers Talking About Your Business</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_3.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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
                  <RouterLink to="single-post.html">
                    <div class="thumb-container thumb-70">
                      <img data-src="@/assets/img/content/grid/grid_post_4.jpg" src="@/assets/img/empty.png" class="entry__img lazyload" alt="" />
                    </div>
                  </RouterLink>
                  <RouterLink to="#" class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</RouterLink>
                </div>

                <div class="entry__body card__body">
                  <div class="entry__header">
                    
                    <h2 class="entry__title">
                      <RouterLink to="single-post.html">10 Horrible Habits You're Doing Right Now That Are Draining Your Energy</RouterLink>
                    </h2>
                    <ul class="entry__meta">
                      <li class="entry__meta-author">
                        <span>by</span>
                        <RouterLink to="#">DeoThemes</RouterLink>
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