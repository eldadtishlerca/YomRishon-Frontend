const gBoards = [
  {
    _id: 'b101',
    title: 'Yom Rishon - Project',
    statuses: [
      // { name: '', color: '#0C4C4C4' },
      { name: 'Not Assignee', color: '#7F5347', hover: '#9E807A' },
      { name: 'Working On It', color: '#FDAB3D', hover: '#F6BE73' },
      // { name: 'Bug', color: '#E2445C' },
      { name: 'Wating For Dev', color: '#784BD1', hover: '#997BDA' },
      // { name: 'Wating For Deploy', color: '#037F4C' },
      { name: 'Wating For QA', color: '#FF158A', hover: '#F755A9' },
      { name: 'Done', color: '#00C875', hover: '#45D29A' },
    ],
    priorities: [
      { name: 'High', color: '#BB3354', hover: '#C86A83' },
      { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
      { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
      { name: 'Done', color: '#00C875', hover: '#45D29A' },
    ],
    archivedAt: 1589983468418,
    createdAt: 1589983468418,
    createdBy: {
      _id: 'u101',
      fullname: 'Eldad Tishler',
      imgUrl: 'imgs/mini-user-imgs/u101.png',
    },
    members: [
      {
        _id: 'u101',
        fullname: 'Eldad Tishler',
        imgUrl: 'imgs/mini-user-imgs/u101.png',
      },
      {
        _id: 'u102',
        fullname: 'Yarden Shaul',
        imgUrl: 'imgs/mini-user-imgs/u102.png',
      },
      {
        _id: 'u103',
        fullname: 'Elon Barzani',
        imgUrl: 'imgs/mini-user-imgs/u103.png',
      },
      {
        _id: 'u104',
        fullname: 'Ori Ben Amram',
        imgUrl: 'imgs/mini-user-imgs/u104.png',
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
          imgUrl: 'imgs/mini-user-imgs/u101.png',
        },
        task: {
          id: 'c105',
          title: 'Demo data',
        },
        change: '3 Hours',
      },
      {
        id: 'a102',
        txt: 'Status',
        createdAt: 1545145141551,
        byMember: {
          _id: 'u104',
          fullname: 'Ori Ben Amram',
          imgUrl: 'imgs/mini-user-imgs/u104.png',
        },
        task: {
          id: 'c102',
          title: 'Sort Section',
        },
        change: 'Waiting for Dev',
      },
      {
        id: 'a103',
        txt: 'Deadline',
        createdAt: 1545145041551,
        byMember: {
          _id: 'u103',
          fullname: 'Elon Barzani',
          imgUrl: 'imgs/mini-user-imgs/u103.png',
        },
        task: {
          id: 'c103',
          title: 'Footer Component',
        },
        change: 1541515151515,
      },
      {
        id: 'a103',
        txt: 'Deadline',
        createdAt: 1545145041551,
        byMember: {
          _id: 'u103',
          fullname: 'Elon Barzani',
          imgUrl: 'imgs/mini-user-imgs/u103.png',
        },
        task: {
          id: 'c103',
          title: 'Footer Component',
        },
        change: 1541515151515,
      },
      {
        id: 'a104',
        txt: 'Priority',
        createdAt: 1545144031551,
        byMember: {
          _id: 'u101',
          fullname: 'Eldad Tishler',
          imgUrl: 'imgs/mini-user-imgs/u101.png',
        },
        task: {
          id: 'c104',
          title: 'Profile - User image',
        },
        change: 'Medium',
      },
    ],
    groups: [
      {
        color: 'rgb(255 100 46)',
        hoverColor: '#FFB297',
        id: 'g101',
        title: 'Design',
        tasks: [
          {
            id: 'c101',
            title: 'Loader animation',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Done', color: '#00C875', hover: '#45D29A' },
            deadline: 1653721491433,
            workHours: 5,
            isChecked: false,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1653721491433',
            },
            createdAt: 1590998630348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [
              {
                id: '54HYs',
                txt: 'Finaly found a nice animation loader :)',
                createdAt: 1590999807436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c102',
            title: 'Sort section',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u104',
                username: 'Ori',
                fullname: 'Ori Ben Amram',
                imgUrl: 'imgs/mini-user-imgs/u104.png',
              },
            ],
            status: {
              name: 'Wating For Dev',
              color: '#784BD1',
              hover: '#997BDA',
            },
            priority: { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
            deadline: 1591099817436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u104',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
              updatedAt: '1653742683908',
            },
            createdAt: 1590998530348,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [
              {
                id: 'patY5',
                txt: 'Devs will be avilable soon',
                createdAt: 1590999800436,
                byMember: {
                  _id: 'u101',
                  fullname: 'Eldad Tishler',
                  imgUrl: 'imgs/mini-user-imgs/u101.png',
                },
              },
            ],
          },
          {
            id: 'c103',
            title: 'Footer component',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
            deadline: 1591099817436,
            workHours: 4,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '1653342383908',
            },
            createdAt: 1590998530448,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [
              {
                id: '14rY5',
                txt: 'We found the perfect color template!',
                createdAt: 1590999800556,
                byMember: {
                  _id: 'u104',
                  fullname: 'Ori Ben Amram',
                  imgUrl: 'imgs/mini-user-imgs/u104.png',
                },
              },
            ],
          },
          {
            id: 'c105',
            title: 'Main section for users',
            membersIds: [
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Waiting for Dev',
              color: '#784BD1',
              hover: '#997BDA',
            },
            priority: { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
            deadline: 1592099817436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1591099806436',
            },
            createdAt: 1590988530348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [],
          },
        ],
      },
      {
        color: 'rgb(120 75 209)',
        hoverColor: '#BCA5E8',
        id: 'g102',
        title: 'Development',
        tasks: [
          {
            id: 'c106',
            title: 'Demo data',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'High', color: '#BB3354', hover: '#C86A83' },
            deadline: 1590999817436,
            workHours: 5,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '1590999707436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
            },
            updates: [
              {
                id: 'o4Pds6',
                txt: 'We need to add isChecked prop for each task !!',
                createdAt: 1590999818436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c107',
            title: 'Profile - User image',
            membersIds: [
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
            deadline: 1590999807436,
            workHours: 2,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1590999706436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [],
          },
          {
            id: 'c108',
            title: 'Buttons for user section',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: { name: 'Done', color: '#00C875', hover: '#45D29A' },
            priority: { name: 'Done', color: '#00C875', hover: '#45D29A' },
            deadline: 1590998807436,
            workHours: 3,
            isChecked: true,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1590999706436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
            },
            updates: [
              {
                id: 'Ney5s6',
                txt: "Finaly it's done :))",
                createdAt: 1600999818436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c109',
            title: 'Filter users',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Wating For QA',
              color: '#FF158A',
              hover: '#F755A9',
            },
            priority: { name: 'High', color: '#BB3354', hover: '#C86A83' },
            deadline: 1590989817436,
            workHours: 10,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '159109607436',
            },
            createdAt: 1590989720348,
            byMember: {
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
            },
            updates: [],
          },
        ],
      },
      {
        color: 'rgb(226 68 92)',
        hoverColor: '#F1A2AE',
        id: 'g103',
        title: 'Bugs',
        tasks: [
          {
            id: 'c110',
            title: 'Form - signup not working',
            membersIds: [
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
            deadline: 1600999817436,
            workHours: 2,
            isChecked: true,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1601099806436',
            },
            createdAt: 1590998630348,
            byMember: {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
            },
            updates: [],
          },
          {
            id: 'c111',
            title: 'Grid on mobile - sidebar out of screen',
            membersIds: [
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Wating For QA',
              color: '#FF158A',
              hover: '#F755A9',
            },
            priority: { name: 'High', color: '#BB3354', hover: '#C86A83' },
            deadline: 1591099717336,
            workHours: 1.5,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1591098706436',
            },
            createdAt: 1590998530348,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [
              {
                id: 'patY5',
                txt: 'QA are on it !',
                createdAt: 1590989800436,
                byMember: {
                  _id: 'u102',
                  fullname: 'Yarden Shaul',
                  imgUrl: 'imgs/mini-user-imgs/u102.png',
                },
              },
            ],
          },
          {
            id: 'c112',
            title: 'Google integradtion',
            membersIds: [],
            status: {
              name: 'Not Assignee',
              color: '#7F5347',
              hover: '#9E807A',
            },
            priority: { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
            deadline: 1591109807436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u104',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
              updatedAt: '1590099707536',
            },
            createdAt: 1590998530448,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [],
          },
        ],
      },
    ],
    cmpsOrder: [
      'Assignee',
      'Status',
      'Priority',
      'Deadline',
      'Working Hours',
      'Last Updated',
    ],
  },
  {
    _id: 'b102',
    title: 'Yom Shani - Check',
    statuses: [
      { name: '', color: '#0C4C4C4' },
      { name: 'Not Assignee', color: '#7F5347', hover: '#9E807A' },
      { name: 'Working On It', color: '#FDAB3D', hover: '#F6BE73' },
      { name: 'Bug', color: '#E2445C' },
      { name: 'Wating For Dev', color: '#784BD1', hover: '#997BDA' },
      { name: 'Wating For Deploy', color: '#037F4C' },
      { name: 'Wating For QA', color: '#FF158A', hover: '#F755A9' },
      { name: 'Done', color: '#00C875', hover: '#45D29A' },
    ],
    priorities: [
      { name: 'High', color: '#BB3354', hover: '#C86A83' },
      { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
      { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
      { name: 'Done', color: '#00C875', hover: '#45D29A' },
    ],
    archivedAt: 1589983468418,
    createdAt: 1589983468418,
    createdBy: {
      _id: 'u101',
      fullname: 'Eldad Tishler',
      imgUrl: 'imgs/mini-user-imgs/u101.png',
    },
    members: [
      {
        _id: 'u101',
        fullname: 'Eldad Tishler',
        imgUrl: 'imgs/mini-user-imgs/u101.png',
      },
      {
        _id: 'u102',
        fullname: 'Yarden Shaul',
        imgUrl: 'imgs/mini-user-imgs/u102.png',
      },
      {
        _id: 'u103',
        fullname: 'Elon Barzani',
        imgUrl: 'imgs/mini-user-imgs/u103.png',
      },
      {
        _id: 'u104',
        fullname: 'Ori Ben Amram',
        imgUrl: 'imgs/mini-user-imgs/u104.png',
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
          imgUrl: 'imgs/mini-user-imgs/u101.png',
        },
        task: {
          id: 'c105',
          title: 'Demo data',
        },
        change: '3 Hours',
      },
      {
        id: 'a102',
        txt: 'Status',
        createdAt: 1545145141551,
        byMember: {
          _id: 'u104',
          fullname: 'Ori Ben Amram',
          imgUrl: 'imgs/mini-user-imgs/u104.png',
        },
        task: {
          id: 'c102',
          title: 'Sort Section',
        },
        change: 'Waiting for Dev',
      },
      {
        id: 'a103',
        txt: 'Deadline',
        createdAt: 1545145041551,
        byMember: {
          _id: 'u103',
          fullname: 'Elon Barzani',
          imgUrl: 'imgs/mini-user-imgs/u103.png',
        },
        task: {
          id: 'c103',
          title: 'Footer Component',
        },
        change: 1541515151515,
      },
      {
        id: 'a103',
        txt: 'Deadline',
        createdAt: 1545145041551,
        byMember: {
          _id: 'u103',
          fullname: 'Elon Barzani',
          imgUrl: 'imgs/mini-user-imgs/u103.png',
        },
        task: {
          id: 'c103',
          title: 'Footer Component',
        },
        change: 1541515151515,
      },
      {
        id: 'a104',
        txt: 'Priority',
        createdAt: 1545144031551,
        byMember: {
          _id: 'u101',
          fullname: 'Eldad Tishler',
          imgUrl: 'imgs/mini-user-imgs/u101.png',
        },
        task: {
          id: 'c104',
          title: 'Profile - User image',
        },
        change: 'Medium',
      },
    ],
    groups: [
      {
        color: 'rgb(255 100 46)',
        hoverColor: '#FFB297',
        id: 'g110',
        title: 'Stam Zrok Mashu',
        tasks: [
          {
            id: 'c101',
            title: 'Loader animation',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Done', color: '#00C875', hover: '#45D29A' },
            deadline: 1653721491433,
            workHours: 5,
            isChecked: false,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1653721491433',
            },
            createdAt: 1590998630348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [
              {
                id: '54HYs',
                txt: 'Finaly found a nice animation loader :)',
                createdAt: 1590999807436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c102',
            title: 'Sort section',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u104',
                username: 'Ori',
                fullname: 'Ori Ben Amram',
                imgUrl: 'imgs/mini-user-imgs/u104.png',
              },
            ],
            status: {
              name: 'Wating For Dev',
              color: '#784BD1',
              hover: '#997BDA',
            },
            priority: { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
            deadline: 1591099817436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u104',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
              updatedAt: '1653742683908',
            },
            createdAt: 1590998530348,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [
              {
                id: 'patY5',
                txt: 'Devs will be avilable soon',
                createdAt: 1590999800436,
                byMember: {
                  _id: 'u101',
                  fullname: 'Eldad Tishler',
                  imgUrl: 'imgs/mini-user-imgs/u101.png',
                },
              },
            ],
          },
          {
            id: 'c103',
            title: 'Footer component',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
            deadline: 1591099817436,
            workHours: 4,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '1653342383908',
            },
            createdAt: 1590998530448,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [
              {
                id: '14rY5',
                txt: 'We found the perfect color template!',
                createdAt: 1590999800556,
                byMember: {
                  _id: 'u104',
                  fullname: 'Ori Ben Amram',
                  imgUrl: 'imgs/mini-user-imgs/u104.png',
                },
              },
            ],
          },
          {
            id: 'c105',
            title: 'Main section for users',
            membersIds: [
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Waiting for Dev',
              color: '#784BD1',
              hover: '#997BDA',
            },
            priority: { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
            deadline: 1592099817436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1591099806436',
            },
            createdAt: 1590988530348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [],
          },
        ],
      },
      {
        color: 'rgb(120 75 209)',
        hoverColor: '#BCA5E8',
        id: 'g102',
        title: 'Development',
        tasks: [
          {
            id: 'c106',
            title: 'Demo data',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'High', color: '#BB3354', hover: '#C86A83' },
            deadline: 1590999817436,
            workHours: 5,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '1590999707436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
            },
            updates: [
              {
                id: 'o4Pds6',
                txt: 'We need to add isChecked prop for each task !!',
                createdAt: 1590999818436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c107',
            title: 'Profile - User image',
            membersIds: [
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
            deadline: 1590999807436,
            workHours: 2,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1590999706436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u102',
              username: 'Yarden',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [],
          },
          {
            id: 'c108',
            title: 'Buttons for user section',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: { name: 'Done', color: '#00C875', hover: '#45D29A' },
            priority: { name: 'Done', color: '#00C875', hover: '#45D29A' },
            deadline: 1590998807436,
            workHours: 3,
            isChecked: true,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1590999706436',
            },
            createdAt: 1590999730348,
            byMember: {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
            },
            updates: [
              {
                id: 'Ney5s6',
                txt: "Finaly it's done :))",
                createdAt: 1600999818436,
                byMember: {
                  _id: 'u103',
                  fullname: 'Elon Barzani',
                  imgUrl: 'imgs/mini-user-imgs/u103.png',
                },
              },
            ],
          },
          {
            id: 'c109',
            title: 'Filter users',
            membersIds: [
              {
                _id: 'u101',
                username: 'Eldad',
                fullname: 'Eldad Tishler',
                imgUrl: 'imgs/mini-user-imgs/u101.png',
              },
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Wating For QA',
              color: '#FF158A',
              hover: '#F755A9',
            },
            priority: { name: 'High', color: '#BB3354', hover: '#C86A83' },
            deadline: 1590989817436,
            workHours: 10,
            isChecked: false,
            lastUpdated: {
              _id: 'u101',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
              updatedAt: '159109607436',
            },
            createdAt: 1590989720348,
            byMember: {
              _id: 'u101',
              username: 'Eldad',
              fullname: 'Eldad Tishler',
              imgUrl: 'imgs/mini-user-imgs/u101.png',
            },
            updates: [],
          },
        ],
      },
      {
        color: 'rgb(226 68 92)',
        hoverColor: '#F1A2AE',
        id: 'g103',
        title: 'Bugs',
        tasks: [
          {
            id: 'c110',
            title: 'Form - signup not working',
            membersIds: [
              {
                _id: 'u103',
                username: 'Elon',
                fullname: 'Elon Barzani',
                imgUrl: 'imgs/mini-user-imgs/u103.png',
              },
            ],
            status: {
              name: 'Working On It',
              color: '#FDAB3D',
              hover: '#F6BE73',
            },
            priority: { name: 'Medium', color: '#D974B0', hover: '#DD97C3' },
            deadline: 1600999817436,
            workHours: 2,
            isChecked: true,
            lastUpdated: {
              _id: 'u103',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
              updatedAt: '1601099806436',
            },
            createdAt: 1590998630348,
            byMember: {
              _id: 'u103',
              username: 'Elon',
              fullname: 'Elon Barzani',
              imgUrl: 'imgs/mini-user-imgs/u103.png',
            },
            updates: [],
          },
          {
            id: 'c111',
            title: 'Grid on mobile - sidebar out of screen',
            membersIds: [
              {
                _id: 'u102',
                username: 'Yarden',
                fullname: 'Yarden Shaul',
                imgUrl: 'imgs/mini-user-imgs/u102.png',
              },
            ],
            status: {
              name: 'Wating For QA',
              color: '#FF158A',
              hover: '#F755A9',
            },
            priority: { name: 'High', color: '#BB3354', hover: '#C86A83' },
            deadline: 1591099717336,
            workHours: 1.5,
            isChecked: false,
            lastUpdated: {
              _id: 'u102',
              fullname: 'Yarden Shaul',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
              updatedAt: '1591098706436',
            },
            createdAt: 1590998530348,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u102.png',
            },
            updates: [
              {
                id: 'patY5',
                txt: 'QA are on it !',
                createdAt: 1590989800436,
                byMember: {
                  _id: 'u102',
                  fullname: 'Yarden Shaul',
                  imgUrl: 'imgs/mini-user-imgs/u102.png',
                },
              },
            ],
          },
          {
            id: 'c112',
            title: 'Google integradtion',
            membersIds: [],
            status: {
              name: 'Not Assignee',
              color: '#7F5347',
              hover: '#9E807A',
            },
            priority: { name: 'Low', color: '#2B76E5', hover: '#6399E8' },
            deadline: 1591109807436,
            workHours: 0,
            isChecked: false,
            lastUpdated: {
              _id: 'u104',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
              updatedAt: '1590099707536',
            },
            createdAt: 1590998530448,
            byMember: {
              _id: 'u104',
              username: 'Ori',
              fullname: 'Ori Ben Amram',
              imgUrl: 'imgs/mini-user-imgs/u104.png',
            },
            updates: [],
          },
        ],
      },
    ],
    cmpsOrder: [
      'Assignee',
      'Status',
      'Priority',
      'Deadline',
      'Working Hours',
      'Last Updated',
    ],
  },
]

export default gBoards
