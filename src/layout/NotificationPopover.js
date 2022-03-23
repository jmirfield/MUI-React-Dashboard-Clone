import React, { useState } from 'react'
import withAnchorAndState from '../helpers/withAnchorAndState'
import { alpha, Badge, Typography, Divider, List, IconButton, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { IoIosNotifications, IoIosTime } from 'react-icons/io'
import { BsCheckAll } from 'react-icons/bs'
import NavPopover from '../components/NavPopover';
import Icon from '../components/Icon';
import { date } from '../utils/date';

const dateHelperDemo = (hours) => {
    const date = new Date()
    date.setHours(date.getHours() - hours)
    return date
}

const DEMO_NOTIFICATIONS = [
    {
        id: '001',
        title: 'Your order is placed',
        description: 'waiting for shipping',
        createdAt: dateHelperDemo(3),
        isUnRead: true
    },
    {
        id: '002',
        title: 'You have new message',
        description: '5 unread messages',
        createdAt: dateHelperDemo(12),
        isUnRead: true
    },
    {
        id: '003',
        title: 'You have new mail',
        description: 'sent from Guido Padberg',
        createdAt: dateHelperDemo(24),
        isUnRead: false
    },
    {
        id: '004',
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        createdAt: dateHelperDemo(72),
        isUnRead: false
    }
];

const primaryNotification = (notification) => {
    return (
        <Typography>
            {notification.title}
            <Typography
                component='span'
                variant='body2'
                sx={{ color: 'text.secondary' }}
            >
                &nbsp;{notification.description}
            </Typography>
        </Typography>
    )
}

const secondaryNotification = (notification) => {
    return (
        <Typography
            variant="caption"
            sx={{
                mt: 0.5,
                display: 'flex',
                alignItems: 'center',
                color: 'text.disabled'
            }}
        >
            <Icon component={IoIosTime} sx={{ mr: 1 }} />
            {date(notification.createdAt)}
        </Typography>
    )
}

const NotificationPopover = React.forwardRef(({ open, handleClick, handleClose }, ref) => {
    const [notifications, setNotifications] = useState(DEMO_NOTIFICATIONS)
    const unReadNotifications = notifications.reduce((prev, item) => item.isUnRead ? prev + 1 : prev, 0)
    const markAllAsReadHandler = () => setNotifications(notifications => notifications.map(item => ({ ...item, isUnRead: false })))
    return (
        <>
            <IconButton
                onClick={handleClick}
                ref={ref}
                sx={{
                    ...(open && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                        color: 'primary.main'
                    })
                }}
            >
                <Badge
                    badgeContent={unReadNotifications}
                    max={9}
                    color='error'
                >
                    <Icon component={IoIosNotifications} />
                </Badge>
            </IconButton>
            <NavPopover
                open={open}
                anchorEl={ref.current}
                onClose={handleClose}
                sx={{ width: 360 }}
            >
                <Box sx={{
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant='subtitle1'>Notifications</Typography>
                        <Typography variant='body2'>You have {unReadNotifications} unread messages</Typography>
                    </Box>
                    {unReadNotifications > 0 &&
                        <IconButton
                            onClick={markAllAsReadHandler}
                            sx={{ color: 'primary.main' }}>
                            <Icon component={BsCheckAll} />
                        </IconButton>}
                </Box>
                <Divider />
                <List>
                    {notifications.map(item => (
                        <ListItemButton
                            key={item.id}
                            sx={{
                                ...(item.isUnRead && {
                                    bgcolor: 'action.selected'
                                }),
                            }}>
                            <ListItemText
                                primary={primaryNotification(item)}
                                secondary={secondaryNotification(item)}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </NavPopover>
        </>
    )
})

export default withAnchorAndState(NotificationPopover)