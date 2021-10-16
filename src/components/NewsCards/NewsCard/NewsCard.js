import React from 'react';
import { Card, CardMedia, CardActions, CardContent, Typography, CardActionArea, IconButton } from '@material-ui/core';
import useStyles from '../NewsCard/styles';

const NewsCard = ({ article, i }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <CardActionArea href={article.url} target="_blank">
        <CardMedia className={classes.media} image={article.urlToImage} title={article.title} />
        <div className={classes.overlay}>
          <Typography className={classes.date} variant="h6">{(new Date(article.publishedAt)).toDateString()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Typography className={classes.date} variant="h6">{article.source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{article.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{article.description}</Typography>
        </CardContent>
        </CardActionArea>
        <div className={classes.cardActions}>
          <Typography variant="body2" className={classes.articleNumber} color="textSecondary" component="p">{i+1}</Typography>
        </div>
      </Card>
    )
}

export default NewsCard;
