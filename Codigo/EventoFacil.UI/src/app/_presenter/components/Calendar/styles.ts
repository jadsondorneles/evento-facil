import { Theme } from '@mui/material'

export const styles = {
  calendar: {
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    gap: '8px',

    '& .fc .fc-daygrid-day-events .fc-daygrid-event-harness a .fc-daygrid-event-dot': {
      display: 'none',
    },

    '& .fc .fc-daygrid-day-events .fc-daygrid-event-harness a .fc-event-time': {
      display: 'none',
    },

    '& .fc .fc-daygrid-day-events .fc-daygrid-event-harness a .fc-event-title': {
      display: 'none',
    },

    '& .fc.fc-media-screen.fc-direction-ltr.fc-theme-standard': {
      height: '440px',
    },

    '& .fc-header-toolbar.fc-toolbar': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '16px 0 9px 0 !important',
    },

    '& .fc-theme-standard td, .fc-theme-standard th': {
      border: 0,
    },
    '& .fc .fc-daygrid-day-events .fc-daygrid-event-harness': {
      position: 'absolute',
    },
    '& .fc .fc-daygrid-day-events .fc-daygrid-event-harness a': {
      width: '10px',
      height: '10px',
      borderRadius: '100%',
      background: '#00FFCC',
      border: 0,
    },
    '& .fc .fc-daygrid-day-events .fc-daygrid-event-harness a .fc-event-title.fc-sticky': {
      color: 'transparent',
    },
    '& .fc-daygrid-day-frame.fc-scrollgrid-sync-inner': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      width: '48px',
      height: '48px',
      minWidth: 0,
      padding: 0,
      minHeight: 0,
      transition: 'all ease .35s',
      cursor: 'pointer',
      overflow: 'hidden',
    },
    '& .fc-daygrid-day-frame.fc-scrollgrid-sync-inner .fc-daygrid-day-events': {
      position: 'absolute',
      top: '4px',
      right: '17px',
    },
    '& .fc-daygrid-day-frame.fc-scrollgrid-sync-inner:hover': {
      background: 'lightcoral',
      transition: 'all ease .35s',
    },
    '& .fc .fc-daygrid-day.fc-day-today': {
      background: 'transparent',
    },
    '& .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-frame.fc-scrollgrid-sync-inner': {
      background: 'linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)',
    },
    '& .fc-scroller.fc-scroller-liquid-absolute': {
      overflow: 'hidden !important',
      border: 0,
    },
    '& tr.fc-scrollgrid-section.fc-scrollgrid-section-body.fc-scrollgrid-section-liquid': {
      height: '295px',
    },
    '& table.fc-scrollgrid.fc-scrollgrid-liquid': {
      border: 0,
    },
    '& table.fc-scrollgrid.fc-scrollgrid-liquid thead': {
      border: 0,
    },
    '& table.fc-scrollgrid.fc-scrollgrid-liquid thead tr.fc-scrollgrid-section.fc-scrollgrid-section-header': {
      border: 0,
    },
    '& table.fc-scrollgrid.fc-scrollgrid-liquid thead tr.fc-scrollgrid-section.fc-scrollgrid-section-header .fc-scroller-harness .fc-scroller':
      {
        overflow: 'hidden !important',
      },
    '& .fc .fc-scrollgrid-section-footer > *, .fc .fc-scrollgrid-section-header > *': {
      border: 0,
    },
    '& table.fc-scrollgrid.fc-scrollgrid-liquid thead tr.fc-scrollgrid-section.fc-scrollgrid-section-header .fc-scroller-harness .fc-scroller th.fc-col-header-cell.fc-day.fc-day-sun':
      {
        border: '0 !important',
      },
    '& .fc .fc-scrollgrid-section-body table .fc-day': {
      border: 0,
    },
    '& .fc-theme-standard th': {
      border: 0,
    },
    '& .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk .fc-button-group': {
      marginLeft: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px',
      position: 'relative',
    },
    '& .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '10px',
    },
    '& .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk .fc-toolbar-title': {
      display: 'none',
    },
    '& .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk button.fc-today-button.fc-button.fc-button-primary': {
      background: 'transparent',
      border: '2px solid white',
    },
    '& .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk .fc-button-group button.fc-prev-button.fc-button.fc-button-primary, .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk .fc-button-group button.fc-next-button.fc-button.fc-button-primary':
      {
        borderRadius: '100%',
        marginLeft: 0,
        minWidth: 0,
        padding: 0,
        width: '32px',
        height: '32px',
        background: 'transparent',
        border: 0,
        transition: 'all ease .35s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    '& .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk .fc-button-group button.fc-prev-button.fc-button.fc-button-primary:hover, .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk .fc-button-group button.fc-next-button.fc-button.fc-button-primary:hover':
      {
        background: 'linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)',
        transition: 'all ease .35s',
      },
    '& .fc .fc-toolbar.fc-header-toolbar > .fc-toolbar-chunk .fc-button-group::before': {
      content: '""',
      width: '4px',
      height: '4px',
      background: 'white',
      borderRadius: '100%',
      position: 'absolute',
    },
    '& a.fc-col-header-cell-cushion': {
      color: 'white',
    },
    '& .fc .fc-daygrid-day-number': {
      color: 'white',
    },
  },
  mes: (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.white[100],

    '& .MuiTypography-root.MuiTypography-h1': {
      margin: '0 0 -14px 0',
      fontSize: '80px',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '80px',
    },
    '& .MuiTypography-root.MuiTypography-h4': {
      margin: 0,
      fontSize: '45px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '45px',
    },
  }),
  copyright: (theme: Theme) => ({
    color: theme.palette.white[100],
    width: '100%',
    textAlign: 'center',
    margin: '12px 0 0  0',
  }),
  loading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circular: (theme: Theme) => ({
    color: theme.palette.white[100],
  }),
}
