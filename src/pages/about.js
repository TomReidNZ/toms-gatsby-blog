import React, { Component } from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import config from "../../data/SiteConfig";

import Layout from "../layout";
import SEO from "../components/SEO";
import SocialMediaAbout from "../components/SocialMedia/about-social.js";

// import ImageHero from "../components/ImageHero";
// import TopicList from "../components/TopicList";
import "./about.scss";

class AboutPage extends Component {
  render() {
    const {
      data: {
        site: {
          siteMetadata: { topics }
        },
        markdownRemark: featuredPostNode
      },
      location: { pathname }
    } = this.props;
    const pageMeta = {
      title: "About",
      description: "Lorum ipsum",
      cover: "https://spaceholder.cc/400x300",
      path: `${pathname}`
    };
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        {/* <ImageHero
          title="Tom Reid"
          subtitle="Mission statement here"
          image="https://spaceholder.cc/350x300"
          imageAlt="Tom Reid"
        /> */}
        <Container id="about-main">
          <div className="about-social-container">
            <div className="about-title-container">
            <h2 className="about-tom-reid">Tom Reid</h2>
            <h4 className="about-ml-specialist">Deep Learning Specialist</h4>
            </div>
            <div id="about-social-main">
              <SocialMediaAbout userLinks={config.userLinks} />
            </div>
            <div className="about-text-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pharetra sit amet aliquam id. Amet nisl suscipit adipiscing
                bibendum est ultricies integer quis auctor. Non nisi est sit
                amet facilisis magna etiam tempor. Proin nibh nisl condimentum
                id venenatis a condimentum vitae sapien. Dui sapien eget mi
                proin sed libero enim sed faucibus. Sit amet cursus sit amet
                dictum sit amet. Et malesuada fames ac turpis egestas. Diam sit
                amet nisl suscipit. Arcu vitae elementum curabitur vitae. Dolor
                sit amet consectetur adipiscing elit pellentesque habitant morbi
                tristique. Blandit aliquam etiam erat velit. Nunc consequat
                interdum varius sit amet mattis vulputate. Cursus vitae congue
                mauris rhoncus aenean vel elit scelerisque mauris. Sed
                ullamcorper morbi tincidunt ornare massa eget egestas.
                Condimentum lacinia quis vel eros. Eget mi proin sed libero enim
                sed. Dictum varius duis at consectetur lorem donec massa sapien
                faucibus.
              </p>
              <p>
                Amet nisl suscipit adipiscing bibendum est ultricies integer
                quis. Elementum curabitur vitae nunc sed. Sit amet aliquam id
                diam maecenas ultricies mi eget mauris. Congue mauris rhoncus
                aenean vel elit. Placerat vestibulum lectus mauris ultrices
                eros. Phasellus faucibus scelerisque eleifend donec pretium
                vulputate. Ut porttitor leo a diam sollicitudin tempor id. Ipsum
                dolor sit amet consectetur adipiscing elit duis tristique. Sit
                amet est placerat in egestas erat imperdiet. Eu augue ut lectus
                arcu bibendum. Consequat ac felis donec et.
              </p>
              <p>
                Ut diam quam nulla porttitor massa id neque aliquam. Et magnis
                dis parturient montes nascetur ridiculus mus mauris vitae. Enim
                tortor at auctor urna. Mollis aliquam ut porttitor leo. Felis
                imperdiet proin fermentum leo vel. Id volutpat lacus laoreet non
                curabitur gravida. Enim ut sem viverra aliquet eget sit amet
                tellus. Sollicitudin aliquam ultrices sagittis orci. Dictum
                varius duis at consectetur. Nunc eget lorem dolor sed viverra
                ipsum. Suspendisse faucibus interdum posuere lorem ipsum.
              </p>
              <p>
                At imperdiet dui accumsan sit amet. Aliquet nec ullamcorper sit
                amet risus nullam eget felis. Tellus elementum sagittis vitae
                et. Tristique senectus et netus et malesuada fames ac. Eu
                scelerisque felis imperdiet proin fermentum. Diam phasellus
                vestibulum lorem sed risus ultricies tristique nulla aliquet.
                Praesent semper feugiat nibh sed pulvinar proin gravida. Sed
                augue lacus viverra vitae congue. Et netus et malesuada fames ac
                turpis egestas maecenas pharetra. Nulla pellentesque dignissim
                enim sit amet venenatis urna. Id velit ut tortor pretium viverra
                suspendisse potenti nullam ac. Commodo odio aenean sed
                adipiscing diam. Bibendum neque egestas congue quisque egestas.
                Id leo in vitae turpis massa sed elementum.
              </p>
              <p>
                Quisque egestas diam in arcu cursus euismod quis viverra nibh.
                Urna duis convallis convallis tellus id interdum velit laoreet.
                Ac ut consequat semper viverra nam libero justo. Bibendum neque
                egestas congue quisque egestas diam. Nibh sit amet commodo nulla
                facilisi. Suspendisse sed nisi lacus sed viverra tellus in hac
                habitasse. Viverra aliquet eget sit amet tellus. Massa massa
                ultricies mi quis hendrerit dolor magna. Tincidunt id aliquet
                risus feugiat in. Dignissim cras tincidunt lobortis feugiat
                vivamus. Donec ultrices tincidunt arcu non sodales neque
                sodales. Tempus egestas sed sed risus pretium.
              </p>
            </div>
          </div>
          {/* {featuredPostNode && (
            <div>
              <h2>Featured Article: {featuredPostNode.title}</h2>
              <p>{featuredPostNode.excerpt}</p>
            </div>
          )}
          <TopicList topics={topics} title="Topics" /> */}
        </Container>
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(fields: { slug: { eq: "how-i-built-this-site" } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        tags
        topics
        cover
        date
      }
      fields {
        slug
        filePath
        date
      }
    }
    site {
      siteMetadata {
        topics {
          title
          cover
          slug
          description
        }
      }
    }
  }
`;
