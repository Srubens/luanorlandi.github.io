import get from 'lodash/get';

import defaultLanguage from 'intl/data/defaultLanguage';

const defaultLocale = defaultLanguage.locale;

const paths = {
  home: '/',
  projects: '/projects',
  stack: '/stack',
  posts: '/posts',
};

export const externalLink = {
  github: 'https://github.com/luanorlandi',
  twitter: 'https://twitter.com/luanorlandi',
  medium: 'https://medium.com/@luanorlandi',
  linkedin: 'https://www.linkedin.com/in/luanorlandi/',
  gatsbycourse: 'https://www.udemy.com/gatsby-crie-seu-site-pessoal',
  ticTacPorg: 'https://luanorlandi.github.io/tic-tac-porg',
  memepool: 'https://github.com/luanorlandi/memepool',
  westworldIntroCreator: 'https://westworldintrocreator.kassellabs.io/',
  swiftSpaceBattle: 'https://luanorlandi.github.io/Swift-Space-Battle/',
};

const generateUrl = (pathName, locale) => {
  const path = get(paths, pathName);

  if (!path) {
    throw new Error(`Path '${pathName}' not found`);
  }

  const languagePath = locale !== defaultLocale ? locale : '';

  return languagePath ? `/${languagePath}${path}` : `${path}`;
};

export default generateUrl;
