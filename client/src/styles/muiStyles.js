import { makeStyles } from '@material-ui/core/styles';


export const useBodyStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100vW',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100vH',
    },
  }),
  { index: 1 }
);

export const useNavStyles = makeStyles(
  (theme) => ({
    leftPortion: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    logoWrapper: {
      marginRight: '1em',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    logo: {
      fontFamily: 'Montserrat',
      textTransform: 'none',
      fontSize: '1.3em',
      padding: '0.1em',
      marginRight: '0.3em',
      background: theme.palette.type === 'dark' 
        ? 'linear-gradient(45deg, #00b8d4 30%, #00e5ff 90%)' 
        : 'linear-gradient(45deg, #0088cc 30%, #00b8d4 90%)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    contentContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    appBar: {
      borderTop: 'none',
      background: theme.palette.type === 'dark' 
        ? 'linear-gradient(to right, #1e1e1e 0%, #2c2c2c 100%)' 
        : 'linear-gradient(to right, #ffffff 0%, #f5f5f5 100%)',
      boxShadow: theme.palette.type === 'dark'
        ? '0 2px 8px rgba(0,229,255,0.15)'
        : '0 2px 8px rgba(0,136,204,0.1)',
    },
    searchBar: {
      flexGrow: 0.6,
      [theme.breakpoints.down('xs')]: {
        flexGrow: 1,
        marginLeft: '0.6em',
        marginRight: '0.6em',
      },
    },
    searchBtn: {
      padding: '0.2em',
    },
    iconBtn: {
      [theme.breakpoints.down('xs')]: {
        padding: '0.2em',
      },
    },
  }),
  { index: 1 }
);

export const useMenuStyles = makeStyles(
  (theme) => ({
    menuIcon: {
      marginRight: '6px',
      fontSize: '1.3em',
    },
    closeIcon: {
      boxSizing: 'border-box',
      border: `0.5px solid ${theme.palette.primary.main}60`,
      borderRadius: 3,
    },
    rootPanel: {
      position: 'sticky',
      top: '5.5vH',
      display: 'flex',
      minHeight: '100.5vh',
      maxWidth: '150px',
      width: '100%',
    },
    list: {
      marginTop: '1em',
    },
    madeByItem: {
      padding: '0.4em 0.8em 0.2em 0.8em',
    },
    userBtn: {
      textTransform: 'none',
      display: 'flex',
    },
    avatar: {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
      marginRight: '0.4em',
      borderRadius: 2,
      [theme.breakpoints.down('xs')]: {
        marginRight: '0.2em',
        width: theme.spacing(2.8),
        height: theme.spacing(2.8),
      },
    },
    moreBtn: {
      padding: '0.2em',
    },
    userBtnMob: {
      padding: '0.3em',
    },
  }),
  { index: 1 }
);

export const useQuesListStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      marginTop: '1em',
      padding: '0.4em 0.7em',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '0.3em',
        paddingRight: '0.3em',
      },
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '0.4em',
        paddingRight: '0.4em',
      },
    },
    btnGroupWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '1em 0',
      [theme.breakpoints.down('xs')]: {
        width: '97%',
        margin: '1em auto',
      },
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    loadBtn: {
      marginTop: '0.8em',
      marginBottom: '0.4em',
      width: '50%',
      display: 'flex',
    },
    noQuesText: {
      textAlign: 'center',
      marginTop: '2em',
    },
  }),
  { index: 1 }
);



export const useRightSidePanelStyles = makeStyles((theme) => ({
  rootPanel: {
    position: 'sticky',
    display: 'flex',
    minHeight: '10vh',
    top: '5.5vH',
  },
  section: {
    border: `1px solid ${theme.palette.primary.main}30`,
    borderRadius: '10px',
    padding: '1.2em',
    background: theme.palette.type === 'dark'
      ? `linear-gradient(145deg, #1e1e1e 0%, #252525 100%)`
      : `linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)`,
    boxShadow: theme.palette.type === 'dark'
      ? '0 4px 12px rgba(0,0,0,0.2), 0 0 1px rgba(0,229,255,0.1) inset'
      : '0 4px 12px rgba(0,0,0,0.05), 0 0 1px rgba(0,136,204,0.1) inset',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    width: '300px',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.palette.type === 'dark'
        ? '0 6px 16px rgba(0,0,0,0.3), 0 0 2px rgba(0,229,255,0.2) inset'
        : '0 6px 16px rgba(0,0,0,0.08), 0 0 2px rgba(0,136,204,0.2) inset',
    },
  },

  // Leaderboard styles (unchanged)
  leaderboard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '10px',
  },
  userItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      backgroundColor: theme.palette.action.hover,
    },
  },
  topUser: {
    backgroundColor: '#f8e71c30', // Light gold background for top 3
    fontWeight: 600,
    boxShadow: '0px 6px 10px rgba(0,0,0,0.2)',
  },
  rankBadge: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    width: '30px',
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: '12px',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  userLink: {
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  userStats: {
    fontSize: '0.85rem',
    color: theme.palette.text.secondary,
  },

  // Tags Section Styles
  tagsSection: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tagsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
    marginTop: '10px',
  },
  tagContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '5px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  tag: {
    fontSize: '0.85rem',
    fontWeight: 500,
    '& .MuiChip-label': {
      padding: '0 8px',
    },
  },
  tagCount: {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
  },

  // Button (common for leaderboard & tags)
  showMoreBtn: {
    marginTop: '10px',
    width: '100%',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: theme.palette.primary.dark,
  },
}));





export const useQuesCardStyles = makeStyles(
  (theme) => ({
    root: {
      borderBottom: theme.palette.type === 'dark' ? '1px solid #333' : '1px solid #e0e0e0',
      display: 'flex',
      padding: '0.8em 0.5em',
      borderRadius: 4,
      marginBottom: '0.5em',
      transition: 'all 0.3s ease',
      backgroundColor: theme.palette.background.paper,
      '&:hover': {
        boxShadow: theme.palette.type === 'dark' 
          ? '0 4px 12px rgba(0,0,0,0.3)' 
          : '0 4px 12px rgba(0,0,0,0.08)',
        transform: 'translateY(-2px)',
        borderBottom: theme.palette.type === 'dark' 
          ? '1px solid #444' 
          : '1px solid #e6e6e6',
      },
    },
    infoWrapper: {
      width: '10%',
      padding: '0.4em',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '22%',
        paddingRight: '0.2em',
      },
    },
    mainText: {
      fontSize: '1.2em',
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
    title: {
      fontSize: '1.2em',
      fontWeight: 500,
      wordWrap: 'anywhere',
      textDecoration: 'none',
      background: theme.palette.type === 'dark' 
        ? 'linear-gradient(45deg, #00b8d4 30%, #00e5ff 90%)' 
        : 'linear-gradient(45deg, #0088cc 30%, #00b8d4 90%)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '&:hover': {
        background: theme.palette.type === 'dark' 
          ? 'linear-gradient(45deg, #00e5ff 30%, #80deea 90%)' 
          : 'linear-gradient(45deg, #00b8d4 30%, #4fc3f7 90%)',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
      transition: 'all 0.4s ease',
    },
    innerInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    quesDetails: {
      paddingLeft: '0.5em',
      paddingBottom: '0.7em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
    },
    tagsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    tag: {
      marginRight: '0.5em',
      marginTop: '0.5em',
      transition: 'all 0.2s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.palette.type === 'dark' 
          ? '0 2px 5px rgba(0,229,255,0.3)' 
          : '0 2px 5px rgba(0,136,204,0.2)',
      },
    },
    bottomWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: '0.5em',
    },
    byUserWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.7em',
    },
    filledByUser: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.7em',
      background: theme.palette.type === 'dark'
        ? `linear-gradient(145deg, rgba(0,229,255,0.1) 0%, rgba(0,184,212,0.05) 100%)`
        : `linear-gradient(145deg, rgba(0,136,204,0.1) 0%, rgba(0,184,212,0.05) 100%)`,
      padding: '0.5em',
      borderRadius: 5,
      border: theme.palette.type === 'dark'
        ? `1px solid rgba(0,229,255,0.2)`
        : `1px solid rgba(0,136,204,0.2)`,
    },
    homeAvatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: '0.4em',
      borderRadius: 4,
    },
    quesAnsAvatar: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight: '0.4em',
      borderRadius: 4,
    },
  }),
  { index: 1 }
);

export const useDialogStyles = makeStyles(
  (theme) => ({
    dialogWrapper: {
      padding: 0,
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    menuIcon: {
      marginRight: '6px',
      fontSize: '1.3em',
    },
    upDownIcon: {
      color: '#aa9aaa',
      fontSize: 32,
    },
  }),
  { index: 1 }
);

export const useAuthFormStyles = makeStyles(
  (theme) => ({
    root: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      [theme.breakpoints.down('xs')]: {
        padding: '0 0 0 0',
      },
    },
    inputField: {
      marginBottom: '1.5em',
    },
    submitButton: {
      marginTop: '1.8em',
    },
    titleLogo: {
      display: 'block',
      width: '5em',
      margin: '0 auto 2em auto',
    },
    footerText: {
      marginTop: '1em',
      textAlign: 'center',
    },
    link: {
      cursor: 'pointer',
    },
  }),
  { index: 1 }
);

export const useTagsPageStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: '1em',
      padding: '0.4em 0.7em',
      width: '100%',
    },
    titleText: {
      marginBottom: '0.9em',
    },
    filterInput: {
      marginTop: '1.2em',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    tagsWrapper: {
      marginTop: '1em',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(157px, 1fr))',
      gridGap: '12px',
    },
    tagBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0.8em',
      paddingBottom: '0.4em',
      border: '1px solid #d3d3d3',
      borderRadius: 4,
    },
    tag: {
      marginBottom: '0.9em',
    },
  }),
  { index: 1 }
);

export const useUsersPageStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: '1em',
      padding: '0.4em 0.7em',
      width: '100%',
    },
    filterInput: {
      marginTop: '1.2em',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    usersWrapper: {
      marginTop: '1.4em',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gridGap: '14px',
    },
    userBox: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: '0.6em',
      borderRadius: 2,
    },
  }),
  { index: 1 }
);

export const useQuesPageStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      paddingLeft: '0.7em',
      marginTop: '1em',
      [theme.breakpoints.down('xs')]: {
        paddingRight: '0.7em',
      },
    },
    titleWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingBottom: '0.4em',
      [theme.breakpoints.down('xs')]: {
        flexWrap: 'wrap',
      },
    },
    quesInfo: {
      display: 'flex',
      paddingBottom: '0.8em',
    },
    content: {
      paddingTop: '0.5em',
      width: '100%',
      paddingBottom: '1em',
    },
    quesAnsWrapper: {
      display: 'flex',
      marginBottom: '1em',
    },
    voteColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: 30,
      alignItems: 'center',
    },
    quesBody: {
      padding: '0.6em 1em',
      paddingBottom: 0,
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        paddingRight: '0',
      },
    },
    tag: {
      marginRight: '0.5em',
      marginTop: '0.5em',
    },
    tagsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1em',
    },
    bottomWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: '1.4em',
      marginBottom: '0.8em',
    },
    bottomBtns: {
      padding: '0.15em',
    },
    commentWrapper: {
      padding: '0.5em 0.2em',
    },
    commentBtns: {
      padding: '0 0.1em',
      minWidth: '3em',
    },
    smallForm: {
      marginTop: '1em',
    },
    submitCancelBtns: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: '0.3em',
    },
    answersWrapper: {
      marginTop: '1em',
    },
    answerHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5em',
      padding: '0 0.5em',
    },
    acceptIcon: {
      color: '#aa9aaa',
      fontSize: 32,
    },
    checkedAcceptIcon: {
      color: '#2e8b57',
      fontSize: 32,
    },
    answerWrapper: {
      marginBottom: '0.5em',
    },
    answerForm: {
      marginTop: '2em',
    },
    footerText: {
      marginTop: '1em',
      marginBottom: '1em',
      display: 'flex',
      alignItems: 'flex-start',
    },
    footerTag: {
      marginRight: '0.5em',
    },
  }),
  { index: 1 }
);

export const useUserPageStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: '1em',
      padding: '0em 1.4em',
      width: '100%',
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        padding: '0em 0.9em',
      },
    },
    userCard: {
      backgroundColor: `${theme.palette.primary.main}15`,
      padding: '1.6em',
      height: '12.5em',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '9.5em',
        marginBottom: '0.5em',
      },
    },
    avatar: {
      width: theme.spacing(21),
      height: theme.spacing(21),
      borderRadius: 3,
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
    },
    cardText: {
      marginTop: '0.5em',
    },
    infoCard: {
      paddingLeft: '2em',
      paddingRight: '2em',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    userInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    bigText: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5em',
      },
    },
    smallText: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8em',
      },
    },
    statsBar: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
    },
    recentActivity: {
      marginTop: '1em',
    },
    recentQuesAns: {
      display: 'flex',
      padding: '0.5em 0',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    votesTitleWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    votes: {
      padding: '0.2em 0.5em',
      border: '1px solid #d3d3d3',
      marginRight: '0.7em',
      [theme.breakpoints.down('xs')]: {
        marginRight: '0.5em',
      },
    },
    title: {
      textDecoration: 'none',
      '&:hover': {
        filter: 'brightness(200%)',
      },
      transition: 'all 0.4s ease',
    },
  }),
  { index: 1 }
);

export const useAskQuesPageStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      marginTop: '1em',
      padding: '0.4em 1em',
    },
    quesForm: {
      paddingTop: '0.8em',
    },
    inputWrapper: {
      marginBottom: '2em',
    },
    inputField: {
      marginTop: '0.4em',
    },
    submitBtn: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    tag: {
      marginRight: '0.5em',
    },
  }),
  { index: 1 }
);

export const useVoteBtnsStyles = makeStyles(
  (theme) => ({
    icon: {
      color: '#aa9aaa',
      fontSize: 32,
    },
    checkedIcon: {
      color: '#964ec2',
      fontSize: 32,
    },
  }),
  { index: 1 }
);

export const useAlertStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      marginTop: '0.8em',
      marginBottom: '0.8em',
    },
  }),
  { index: 1 }
);

export const useNotFoundPageStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      marginTop: '1em',
      padding: '0.4em 1em',
    },
    textWrapper: {
      marginTop: '15%',
      textAlign: 'center',
    },
    icon: {
      fontSize: '6em',
      marginBottom: '0.3em',
    },
  }),
  { index: 1 }
);
export const leaderboardStyles = {
  leaderboard: {
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  userRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },
  rank: {
    fontWeight: 'bold',
    marginRight: '12px',
    color: '#007bff',
  },
  topUsersContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
    gap: '12px',
    marginTop: '16px',
  },
  userCard: {
    backgroundColor: '#f9f9f9',
    padding: '12px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  username: {
    fontWeight: '600',
    color: '#007bff',
  },
  reputation: {
    color: '#555',
  },
};
