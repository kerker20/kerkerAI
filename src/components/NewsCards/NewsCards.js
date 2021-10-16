import React from 'react'
import NewsCard from './NewsCard/NewsCard';
import { Grid, Typography, Container, CssBaseline, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import useStyles from '../NewsCards/styles'

const NewsCards = ({ articles }) => {

    const infoCards = [
        { title: 'Latest News', text: 'Give me the latest news' },
        { title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science', text: 'Give me the latest news' },
        { title: 'News by Terms', info: 'Smartphones, Culture, Bitcoin', text: 'Give me the latest news' },
        { title: 'News by Sources', info: 'CNN, ABC news, BBC news, Wired, Time', text: 'Give me the latest news' }
    ]

    const classes = useStyles();
    if(!articles.length){
        return(
            <>
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="primary" gutterBottom>News</Typography>
                <Typography variant="h5" align="center" color="textSecondary" gutterBottom>Sample Description</Typography>
            </Container>
            <Container>
                
            </Container>
            </>
        )
    }



    return (
        <Grid container direction="row" align="center" spacing={3}>
            {articles.map((article, i) => (
                <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                    <NewsCard article={article} i={i} />
                </Grid>
            ))}
        </Grid>
    )
}

export default NewsCards;
