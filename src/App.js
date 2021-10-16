import React, { useState, useEffect } from 'react';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Grid, Paper, Container, Grow } from '@material-ui/core'

import NewsCards from './components/NewsCards/NewsCards';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: 'ad7e063af5734d946ac198db8096869c2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
         console.log(articles);
         setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <>
      <NewsCards articles={newsArticles}/>
    </>
  );
};

export default App;
