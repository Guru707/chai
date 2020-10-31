<footer class="">
      <div class="footer_block equal-p">
         <figure class="chai_leaves mb-0"><img src="images/chai_leaves.png" class="img-responsive"></figure>
         <div class="container">
            <!-- <img src="images/footer_logo.png"> -->
            <div class="row">
               <div class="col-md-4">
                  <div class="address-block pt-5">
                     <h3>Contact Us</h3>
                     <ul>
                        <li class="address-listing"><span class="icon-form"><i class="fas fa-map-marker-alt"
                                 aria-hidden="true"></i></span>Addres: Shop no 47 New MKT <span class="d-block">
                              Tilak Nagar </span>
                           New Delhi 110018</li>

                        <li class="address-listing"><span class="icon-form"><i class="fas fa-phone-volume"
                                 aria-hidden="true"></i></span><a href="tel:+9111047037391"
                              class="text-white">+91-11047037391</a></li>
                        <li class="address-listing"><span class="icon-form"><i
                                 class="far fa-envelope"></i></span>contact@chaipatram.com</li>
                        <li class="address-listing"><span class="icon-form"><i class="fas fa-globe"></i></span>
                           Chaipatram.com</li>
                     </ul>
                     <div class="social-block">
                     <a href="https://www.linkedin.com/company/70753219/admin/" class="social-icon"><i class="fab fa-linkedin"></i></a>
                     <a href="https://www.instagram.com/chaipatram/" class="social-icon"><i class="fab fa-instagram"></i></a>
                     <!-- <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a> -->
                     <a href="https://twitter.com/PatramChai" class="social-icon"><i class="fab fa-twitter"></i></a>
                  </div>
                  </div>
               </div>
               <div class="col-md-8 pt-5">
               <p class="text-white">
         Chai Patram is a Teafe for all Chai lovers. Taking into consideration cleanliness, hygiene, and safety of the Chai making process we have come up with a 100% hygiene chai making process. Our aim is to be the <b> tea point near me</b> that offers affordable and hygienic chai. Most tea restaurants and chai tapris lack the basic precaution measures that are a must in today’s time. </p>
<p class="text-white">We offer a <b> food franchise</b> that will allow us to take the <b>best tea recipe</b> , make it in the most hygienic way possible, and make it affordable for all and reach all over India. </p>
               </div>
            </div>
         </div>

      </div>
      <div class="copyright-block">
         <div class="container">
            <p class="mb-0 font-700 copyright"> </p>
         </div>
      </div>
   </footer>
   <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
   <script src="js/jquery-min.js"></script>
   <script src="js/font-awesome.js"></script>
   <script src="js/popper-min.js"></script>
   <script src="js/bootstrap.js"></script>
   <script src="js/gsap.min.js"></script>
   <script src="js/ScrollTrigger.min.js"></script>
   <script src="js/fancybox.js"></script>
   <script src="js/slick.js"></script>
   <script src="js/accordion.js"></script>
   <script src="js/custom.js"></script>
   <script>
      $(document).ready(function () {

         let year = new Date().getFullYear();
         let copyrightText = ` Chai Patram  - ${year} All Rights Reserved`;
         $(".copyright").html(copyrightText);

         //open container and populate data when clicked on icon
         $(".map_block area").on("click", function (e) {
            e.preventDefault();
            let parentOffset = $(".map_element").offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
            let content = `<img src="images/chai_store.jpg" class="img-responsive"><div class="pop_content"><h4>Chai Patram Tilak Nagar</h4><p class="mb-0">105,basement Level<span class="d-block">Behind Metro Station tilak nagar</span>Tilak Nagar, Delhi - 110018</p></div>`;
            $("#pop-box").html(content).show().css({ top: relY, left: relX });

         });

         //close popup when clicked outside
         $(document).mouseup(function (e) {
            var container = $("#pop-box");

            if (!container.is(e.target) // if the target of the click isn't the container...
               && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
               container.hide();

            }

         });

      });

   </script>
</body>

</html>