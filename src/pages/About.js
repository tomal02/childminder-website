import './Page.css';
import React from 'react';
import childPhoto from '../child2.jpg';

const About = () => {
  return (
    <section id="about">
      <img src={childPhoto} alt="unsplash-img" />
      <div>
        <h3>ABOUT ME</h3>
        <p>
          <strong>GRADED OUTSTANDING 2020 & 2016</strong>
          <br /> <br />
          I am happily married Mum with 2 boys (2002 & 2012) My setting has a
          large back garden with a secure decked area that has a wide selection
          of sit on & ride on bikes / cars sandpit and messy / safe play. We
          have a fabulous mud kitchen area, with a large bench and lots of
          natural resources to explore.
          <br />
          <br />
          During non Covid restriction times, we attend playgroups within the
          local area, do walks along the river and visits to local woods for
          exploring.
          <br /> <br />I have my own car, a clean license with business car
          insurance, I use / supply my own car seats, suitable for all different
          age children.
          <br /> <br />I am able to accept childcare vouchers and am already
          registered with numerous companies.
          <br /> <br />
          <strong>
            If you are looking for a nurturing, fun, safe and homely environment
            for your child, then please feel free to contact me.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default About;
