const board = {
  _id: 'b101',
  title: 'Yom Rishon',
  archivedAt: 1589983468418,
  createdAt: 1589983468418,
  createdBy: {
    _id: 'u101',
    fullname: 'Eldad Tishler',
    imgUrl: '../../public/imgs/mini-user-imgs/u101.png',
  },
  members: [
    {
      _id: 'u101',
      fullname: 'Eldad Tishler',
      imgUrl: '../../public/imgs/mini-user-imgs/u101.png',
    },
    {
      _id: 'u102',
      fullname: 'Yarden Shaul',
      imgUrl: '../../public/imgs/mini-user-imgs/u102.png',
    },
    {
      _id: 'u103',
      fullname: 'Elon Barzani',
      imgUrl: '../../public/imgs/mini-user-imgs/u103.png',
    },
    {
      _id: 'u104',
      fullname: 'Ori Ben Amram',
      imgUrl: '../../public/imgs/mini-user-imgs/u104.png',
    },
  ],
  activities: [
    {
      id: 'a101',
      txt: 'Working Hours',
      createdAt: 1545145151551,
      byMember: {
        _id: 'u102',
        fullname: 'Yarden Shaul',
        imgUrl: '../../public/imgs/mini-user-imgs/u101.png',
      },
      task: {
        id: 'c105',
        title: 'Demo data',
      },
      change: '3 Hours'
    },
    {
      id: 'a102',
      txt: 'Status',
      createdAt: 1545145141551,
      byMember: {
        _id: 'u104',
        fullname: 'Ori Ben Amram',
        imgUrl: '../../public/imgs/mini-user-imgs/u104.png',
      },
      task: {
        id: 'c102',
        title: 'Sort Section',
      },
      change: 'Waiting for Dev'
    },
    {
      id: 'a103',
      txt: 'Deadline',
      createdAt: 1545145041551,
      byMember: {
        _id: 'u103',
        fullname: 'Elon Barzani',
        imgUrl: '../../public/imgs/mini-user-imgs/u103.png',
      },
      task: {
        id: 'c103',
        title: 'Footer Component',
      },
      change: 1541515151515
    },
    {
      id: 'a103',
      txt: 'Deadline',
      createdAt: 1545145041551,
      byMember: {
        _id: 'u103',
        fullname: 'Elon Barzani',
        imgUrl: '../../public/imgs/mini-user-imgs/u103.png',
      },
      task: {
        id: 'c103',
        title: 'Footer Component',
      },
      change: 1541515151515
    },
    {
      id: 'a104',
      txt: 'Priority',
      createdAt: 1545144031551,
      byMember: {
        _id: 'u101',
        fullname: 'Eldad Tishler',
        imgUrl: '../../public/imgs/mini-user-imgs/u101.png',
      },
      task: {
        id: 'c104',
        title: 'Profile - User image',
      },
      change: 'Medium'
    },
  ],
  groups: [
    {
      color: 'orange',
      id: 'g101',
      title: 'Design',
      tasks: [
        {
          id: 'c101',
          title: 'Loader animation',
          membersIds: ['u102', 'u103'],
          status: 'working-on-it',
          priority: 'high',
          deadline: 1590999817436,
          workHours: 5,
          lastUpdated: {
            _id: 'u103',
            fullname: 'Elon Barzani',
            imgUrl: '../../public/imgs/mini-user-imgs/u103.png',
            updatedAt: '1590999806436'
          },
          createdAt: 1590998630348,
          byMember: {
            _id: 'u102',
            username: 'Yarden',
            fullname: 'Yarden Shaul',
            imgUrl:
              '../../public/imgs/mini-user-imgs/u102.png',
          },
          updates: [
            {
              id: '54HYs',
              txt: 'Finaly found a nice animation loader :)',
              createdAt: 1590999807436,
              byMember: {
                _id: 'u103',
                fullname: 'Elon Barzani',
                imgUrl:
                  '../../public/imgs/mini-user-imgs/u101.png',
              },
            },
          ],
        },
        {
          id: 'c102',
          title: 'Sort section',
          membersIds: ['u101', 'u104'],
          status: 'Waiting for Dev',
          priority: 'Medium',
          deadline: 1591099817436,
          workHours: 0,
          lastUpdated: {
            _id: 'u104',
            fullname: 'Ori Ben Amram',
            imgUrl: '../../public/imgs/mini-user-imgs/u104.png',
            updatedAt: '1591099806436'
          },
          createdAt: 1590998530348,
          byMember: {
            _id: 'u104',
            username: 'Ori',
            fullname: 'Yarden Shaul',
            imgUrl:
              '../../public/imgs/mini-user-imgs/u102.png',
          },
          updates: [
            {
              id: 'patY5',
              txt: 'Devs will be avilable soon',
              createdAt: 1590999800436,
              byMember: {
                _id: 'u101',
                fullname: 'Eldad Tishler',
                imgUrl:
                  '../../public/imgs/mini-user-imgs/u101.png',
              },
            },
          ],
        },
        {
          id: 'c102',
          title: 'Sort section',
          membersIds: ['u101', 'u104'],
          status: 'Waiting for Dev',
          priority: 'Medium',
          deadline: 1591099817436,
          workHours: 0,
          lastUpdated: {
            _id: 'u104',
            fullname: 'Ori Ben Amram',
            imgUrl: '../../public/imgs/mini-user-imgs/u104.png',
            updatedAt: '1591099806436'
          },
          createdAt: 1590998530348,
          byMember: {
            _id: 'u104',
            username: 'Ori',
            fullname: 'Yarden Shaul',
            imgUrl:
              '../../public/imgs/mini-user-imgs/u102.png',
          },
          updates: [
            {
              id: 'patY5',
              txt: 'Devs will be avilable soon',
              createdAt: 1590999800436,
              byMember: {
                _id: 'u101',
                fullname: 'Eldad Tishler',
                imgUrl:
                  '../../public/imgs/mini-user-imgs/u101.png',
              },
            },
          ],
        },
        {
          id: 'c102',
          title: 'Sort section',
          membersIds: ['u101', 'u104'],
          status: 'Waiting for Dev',
          priority: 'Medium',
          deadline: 1591099817436,
          workHours: 0,
          lastUpdated: {
            _id: 'u104',
            fullname: 'Ori Ben Amram',
            imgUrl: '../../public/imgs/mini-user-imgs/u104.png',
            updatedAt: '1591099806436'
          },
          createdAt: 1590998530348,
          byMember: {
            _id: 'u104',
            username: 'Ori',
            fullname: 'Yarden Shaul',
            imgUrl:
              '../../public/imgs/mini-user-imgs/u102.png',
          },
          updates: [
            {
              id: 'patY5',
              txt: 'Devs will be avilable soon',
              createdAt: 1590999800436,
              byMember: {
                _id: 'u101',
                fullname: 'Eldad Tishler',
                imgUrl:
                  '../../public/imgs/mini-user-imgs/u101.png',
              },
            },
          ],
        },
        {
          id: 'c102',
          title: 'Sort section',
          membersIds: ['u101', 'u104'],
          status: 'Waiting for Dev',
          priority: 'Medium',
          deadline: 1591099817436,
          workHours: 0,
          lastUpdated: {
            _id: 'u104',
            fullname: 'Ori Ben Amram',
            imgUrl: '../../public/imgs/mini-user-imgs/u104.png',
            updatedAt: '1591099806436'
          },
          createdAt: 1590998530348,
          byMember: {
            _id: 'u104',
            username: 'Ori',
            fullname: 'Yarden Shaul',
            imgUrl:
              '../../public/imgs/mini-user-imgs/u102.png',
          },
          updates: [
            {
              id: 'patY5',
              txt: 'Devs will be avilable soon',
              createdAt: 1590999800436,
              byMember: {
                _id: 'u101',
                fullname: 'Eldad Tishler',
                imgUrl:
                  '../../public/imgs/mini-user-imgs/u101.png',
              },
            },
          ],
        },
      ],
    },
    {
      color: 'orange',
      id: 'g101',
      title: 'Desgin',
      activities: [
        {
          id: 'a101',
          txt: 'Working Hours',
          createdAt: 1545145151551,
          byMember: {
            _id: 'u102',
            fullname: 'Yarden Shaul',
            imgUrl: '../../public/imgs/mini-user-imgs/u101.png',
          },
          task: {
            id: 'c101',
            title: 'Demo data',
          },
          change: '3 Hours'
        },
      ],
      tasks: [
        {
          id: 'c101',
          title: 'Demo data',
          membersIds: ['u101', 'u102', 'u103'],
          status: 'working-on-it',
          priority: 'high',
          deadline: 1590999817436,
          workHours: 5,
          lastUpdated: {
            _id: 'u101',
            fullname: 'Eldad Tishler',
            imgUrl: '../../public/imgs/mini-user-imgs/u101.png',
            updatedAt: '1590999707436'
          },
          createdAt: 1590999730348,
          byMember: {
            _id: 'u101',
            username: 'Eldad',
            fullname: 'Eldad Tishler',
            imgUrl:
              '../../public/imgs/mini-user-imgs/u101.png',
          },
          updates: [
            {
              id: 'ZdPnm',
              txt: 'I found something you should look at @Eldad',
              createdAt: 1590999817436,
              byMember: {
                _id: 'u103',
                fullname: 'Elon Barzani',
                imgUrl:
                  '../../public/imgs/mini-user-imgs/u101.png',
              },
            },
          ],
        },
      ],
    },
  ],
  cmpsOrder: ['Assignee', 'Status', 'Priority', 'Deadline', 'Working Hours', 'Last Updated'],
}

export default board