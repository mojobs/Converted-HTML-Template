<script setup>

import jeansAndBag from '@/assets/img/content/instagram/1.jpg'
import blonde from '@/assets/img/content/instagram/2.jpg'
import blackLady from '@/assets/img/content/instagram/3.jpg'
import sneakers from '@/assets/img/content/instagram/4.jpg'
import hairwoman from '@/assets/img/content/instagram/5.jpg'
const instgramPictures =[
    {image : jeansAndBag},
    {image: blonde},
    {image: blackLady},
    {image: sneakers},
    {image: hairwoman}
]
</script>

<template>
        <!-- Instagram -->
        <div class="widget-instagram-wide text-center">
      <h5 class="widget-instagram-wide__title">DeoThemes @ Instagram</h5>
      <ul class="widget-instagram-wide__list">
        <li v-for="data in instgramPictures"><a href="#"><img :src="data.image" alt=""></a></li>
      </ul>
    </div>

    <!-- Newsletter Wide -->
    <div class="newsletter-wide">
      <div class="container">
        <div class="row justify-content-lg-center">
          <div class="col-xl-6 col-lg-8">
            <div class="widget widget_mc4wp_form_widget">
              <div class="newsletter-wide__container">
                <div class="newsletter-wide__text-holder">
                  <p class="newsletter-wide__text">
                    <i class="ui-email newsletter__icon"></i>
                    Subscribe for our daily news
                  </p>
                </div>
                <div class="newsletter-wide__form">
                  <form class="mc4wp-form" method="post">
                    <div class="mc4wp-form-fields">
                      <div class="form-group">
                        <input type="email" name="EMAIL" placeholder="Your email" required>
                      </div>
                      <div class="form-group">
                        <input type="submit" class="btn btn-lg btn-color" value="Sign Up">
                      </div>
                    </div>
                  </form>
                </div> 
              </div>         
            </div>
          </div>
        </div>
      </div>
    </div> <!-- end newsletter wide -->
</template>