// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{width: 1, height: 1}} />
);

const ICONS = {
  user: getIcon('ic_user'),
  dashboard: getIcon('ic_home'),
  notifications: getIcon('ic_notifications'),
  streams: getIcon('ic_streams'),
  messages: getIcon('ic_messages'),
  lists: getIcon('ic_lists'),
  bookmarks: getIcon('ic_bookmarks'),
  subscriptions: getIcon('ic_subscriptions'),
  add_card: getIcon('ic_add_card'),
  profile: getIcon('ic_profile'),
  more: getIcon('ic_more'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    // subheader: 'Tabs',
    subheader: '',
    items: [
      {title: 'Home', path: '/dashboard/home', icon: ICONS.dashboard},
      {title: 'Notifications', path: '/dashboard/notifications', icon: ICONS.notifications},
      {title: 'Messages', path: '/dashboard/messages', icon: ICONS.messages},
      {
        title: 'Streams',
        path: '/dashboard/streams',
        icon: ICONS.streams,
      },
      {title: 'Bookmarks', path: '/dashboard/bookmarks', icon: ICONS.bookmarks},
      {title: 'Lists', path: '/dashboard/lists', icon: ICONS.lists},
      {title: 'Subscriptions', path: '/dashboard/subscriptions', icon: ICONS.subscriptions},
      {title: 'Add Card', path: '/dashboard/addCard', icon: ICONS.add_card},
      {title: 'Profile', path: '/dashboard/profile', icon: ICONS.profile},
      {title: 'More', path: '/dashboard/more', icon: ICONS.more},
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: '/dashboard/user',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: '/dashboard/user/four' },
  //         { title: 'Five', path: '/dashboard/user/five' },
  //         { title: 'Six', path: '/dashboard/user/six' },
  //       ],
  //     },
  //   ],
  // },
];

export default sidebarConfig;
