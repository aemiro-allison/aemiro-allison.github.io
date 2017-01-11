import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/home.style';

function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</Interactive>
  );

  return (
    <div>

      <header class="align-center center">
        <h1 class="large-title">I am Aemiro Allison</h1>
        <small>I love to make cool things</small>
        <a class="link" href="#">explore</a>
        <!-- <nav>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About Me</a>
          <a href="#">Contact</a>
        </nav> -->
      </header>

      <div class="container">
          <div class="heading"><h2>A Little About Me</h2></div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula mi a tortor semper, hendrerit venenatis enim volutpat. Vestibulum tristique sit amet augue id pretium. Cras nec nunc eget lacus congue rhoncus eget in magna. Ut viverra, nulla a placerat molestie, urna nunc consectetur ipsum, ut eleifend dui mi id metus. Aenean efficitur eros lectus, quis facilisis ipsum placerat nec. Morbi laoreet vel mi quis tincidunt. Nunc sit amet dolor neque. Donec interdum sem aliquam, auctor sem vitae, gravida orci. Nulla sem neque, rhoncus et felis vehicula, condimentum ornare est. Nulla arcu ante, consectetur convallis gravida sed, mollis ut sapien. Morbi imperdiet enim eget convallis tempor. Nam eget gravida purus. Maecenas semper eros id magna scelerisque, sed bibendum nisi lacinia. Aenean consequat felis urna, et interdum mauris suscipit a. Pellentesque vestibulum laoreet lacus et lobortis. Vestibulum quis volutpat tellus.</p>
          </div>
          <div>
            <p style={s.p}>
              This is an example single page app built
              with React and React&nbsp;Router using {' '}
              {s.code('browserHistory')}. Navigate with the links below and
              refresh the page or copy/paste the url to test out the redirect
              functionality deployed to overcome GitHub&nbsp;Pages incompatibility
              with single page apps (like this one).
            </p>
            <p style={s.p}>
              Please see the {repoReadmeLink('repo readme')} for instructions on how to
              use this boilerplate to deploy your own single page app using GitHub Pages.
            </p>
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/example"
              >Example page</Interactive>
            </div>
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/example/two-deep?field1=foo&field2=bar#boom!"
              >Example two deep with query and hash</Interactive>
            </div>
          </div>
      </div>
      <div class="fluid-container">
        <div class="heading"><h2>Current Projects in Development: </h2></div>
        <div class="scrollable-content">
          <h3 class="scrollable-title">Math-Flash</h3>
          <div class="scrollable">
            <div class="tile">1</div>
            <div class="tile">2</div>
            <div class="tile">3</div>
            <div class="tile">4</div>
            <div class="tile">5</div>
            <div class="tile">6</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
