const board = {
  _id: 'b101',
  title: 'Yom Rishon',
  archivedAt: 1589983468418,
  createdAt: 1589983468418,
  createdBy: {
    _id: 'u101',
    fullname: 'Eldad Tishler',
    imgUrl: 'http://some-img',
  },
  color: 'purple',
  members: [
    {
      _id: 'u101',
      fullname: 'Eldad Tishler',
      imgUrl: 'https://www.google.com',
    },
  ],
  groups: [
    {
      id: 'g102',
      title: 'Development',
      tasks: [
        {
          id: 'c104',
          title: 'Demo data',
          membersIds: ['u101', 'u102'],
          status: 'working-on-it',
          priority: 'high',
          deadline: 1590999817436,
          workHours: 4,
          lastUpdated: {
            _id: 'u101',
            fullname: 'Eldad Tishler',
            imgUrl: 'http://somthing.com',
          },
          updates: [
            {
              id: 'ZdPnm',
              txt: 'also @yaronb please CR this',
              createdAt: 1590999817436.0,
              byMember: {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl:
                  'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
              },
            },
          ],
          createdAt: 1590999730348,
          dueDate: 16156215211,
          byMember: {
            _id: 'u101',
            username: 'Tal',
            fullname: 'Tal Tarablus',
            imgUrl:
              'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
          },
        },
      ],
      style: {},
    },
  ],
  activities: [
    {
      id: 'a101',
      txt: 'Changed Color',
      createdAt: 154514,
      byMember: {
        _id: 'u101',
        fullname: 'Abi Abambi',
        imgUrl: 'http://some-img',
      },
      task: {
        id: 'c101',
        title: 'Replace Logo',
      },
    },
  ],
  // for monday
  cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
}

export default board