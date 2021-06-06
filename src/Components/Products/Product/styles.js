import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
    },
    media: {
        height: '100px',
        paddingTop: '56.25%' //16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    description: {
        height: '200px',
        overflow: 'scroll'
    }
}))