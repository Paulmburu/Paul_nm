'use strict';

const d = new Date();
const year = d.getFullYear();

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Paulnm',
  subtitle: 'Android Developer and Sports Programmer',
  copyright: `© Paulnm | ${year}`,
  disqusShortname: 'paulnm-tk',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    }
    // ,
    // { 
    //   label: 'Contact me',
    //   path: '/pages/contacts'
    // }
  ],
  author: {
    name: 'Paul Mburu',
    photo: '/paul.jpeg',
    bio: 'Android Developer.',
    contacts: {
      email: 'paulmburu53@gmail.com',
      // facebook: '#',
      // telegram: '#',
      twitter: 'Paulnm',
      github: 'Paulmburu',
      // rss: '',
      // vkontakte: '',
      linkedin: 'paul-mburu-09029b127',
      instagram: 'paul__nm',
      // line: '',
      gitlab: 'Paulmburu',
      // weibo: '',
      // codepen: '',
      youtube: ''
    }
  }
};
