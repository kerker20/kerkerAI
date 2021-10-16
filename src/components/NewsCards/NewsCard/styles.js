import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
      border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      },
      overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      },
      overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        marginTop: '20px',
        padding: '0 16px',
      },
      cardActions: {
        padding: '8px',
        justifyContent: 'flex-evenly',
        fontSize: 'small',
      },
      date: {
          fontSize: '10px',
          opacity: 0.8,
      },
      cardActions: {
        padding: '10px',
        position: 'relative',
        bottom: '5px',
        color: 'white',
      },
      articleNumber: {
          float: 'left',
      }
  });

  export default useStyles;