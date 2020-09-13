export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Anime']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Movie',
        to: '/movie',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Series',
        to: '/series',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'AMV',
        to: '/theme/colors',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'AppSetting',
        to: '/theme/typography',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Notificaton',
        to: '/notification',
        icon: 'cil-drop'
      },
  ]
  }
]
