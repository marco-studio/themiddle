module.exports = {
  siteMetadata: {
    title: `The Middle`,
    description: `Keeping the vibes high and the sh*t real. Join us for our weekly podcast show where we celebrate life’s contradictions and introduce woke conversation mixed in with the latest pop culture (with plenty of reality TV references to boot). Together we’re both sides of the story, we’ve totally got you covered, and hey, we’ll meet you in The Middle.`,
    author: `Hollie Azzopardi & Jordanna Levin`,
    twitter: ``,
    instagram: `https://www.instagram.com/the_middle_podcast/`,
    facebook: `https://www.facebook.com/groups/themiddlepodcast`,
    youtube: ``,
    stitcher: ``,
    apple: `https://podcasts.apple.com/us/podcast/feed/id1457786947?at=11lo6V&ct=podnews_podcast`,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9yc3Mud2hvb3Noa2FhLmNvbS9yc3MvcG9kY2FzdC9pZC84MzM2`,
    pocket: `http://pca.st/itunes/1457786947`,
    spotify: `https://open.spotify.com/show/57VOkoPhsHxD6Ga8eKDuTm`,
    overcast: `https://overcast.fm/itunes1457786947`,
    castbox: `http://castbox.fm/vic/1457786947?ref=podnews`,
    castro: `https://castro.fm/itunes/1457786947`,
    podbean: `https://www.iheart.com/podcast/269-the-middle-29484475/`,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Frss.whooshkaa.com%2Frss%2Fpodcast%2Fid%2F8336`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://rss.whooshkaa.com/rss/podcast/id/8336`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
