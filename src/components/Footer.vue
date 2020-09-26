<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About Sarah</h6>
          <p class="text-justify">
            <i>SEARCH AND APPLY</i><br />
            Job hunting, job seeking, or job searching is the act of looking for
            employment, due to unemployment, underemployment, discontent with a
            current position, or a desire for a better position. As of 2010,
            less than 10% of U.S. jobs are filled through online.<br />
            No worry..! <i><b>SARAH</b></i> will help you
          </p>
        </div>
        <div class="col-xs-6 col-md-3">
          <h6>CONTACT AS</h6>
          <ul class="contact">
            <p>
              <span>105, 5th street, Poongothai Nagar</span> Sitra, Coimbatore
            </p>
            <p>Call : <a href="tel:+919524284655">+91-9524284655</a></p>
            <p>
              Whatsapp :
              <a href="https://api.whatsapp.com/send?phone=+919524284655"
                >+91-9524284655</a
              >
            </p>
            <p>
              <a href="mailto:amirdharajan@yahoo.com">amirdharajan@yahoo.com</a>
            </p>
          </ul>
        </div>
        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><router-link :to="{name: 'Home'}">Home</router-link></li>
            <li><router-link :to="{name: 'Job'}">Jobs</router-link></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by SARAH.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
