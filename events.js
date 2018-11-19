const events = [
  {
    id: '5b9afe943a8f932ced2c214e',
    imageUrl: 'https://photo-app-tvc.s3.amazonaws.com/soaring-sky-09-13-2018-1536884051329.jpg',
    title: 'Sebring Drone Racing 2018',
    organization: 'Soaring Sky',
    venueName: 'AirSports Expo',
    linkToUrl: 'https://www.multigp.com/event/sebring-drone-zone-2018/',
    price: '200',
    tags: ['Enduro'],
    dates: {
      startDateTime: '2019-01-24T16:00:00.000Z',
      endDateTime: '2019-01-28T05:00:00.000Z'
    },
    userid: '5b8da331a685965241323678',
    location: {
      id: '5b5f6f52222be42bb919c008',
      postalCode: '94582',
      cityName: 'San Ramon',
      stateCode: 'CA',
      searchString: '94582 San Ramon California'
    },
    free: false
  },
  {
    id: '5ba91b9f9b92d06d372499c5',
    imageUrl: 'https://photo-app-tvc.s3.amazonaws.com/tech-policy-09-24-2018-1537809131401.jpg',
    title: 'Drones: Technology, Policy, and Society',
    organization: 'CITRIS and the Banatao Institute',
    dates: {
      startDateTime: '2018-10-18T15:00:00.000Z',
      endDateTime: '2018-10-19T01:00:00.000Z'
    },
    venueName: 'Banatao Auditorium, 310 Sutardja Dai Hall',
    linkToUrl: 'https://www.eventbrite.com/e/drones-technology-policy-and-society-tickets-48415226245?aff=ebdssbdestsearch',
    location: {
      id: '5b5f6f52222be42bb9193220',
      postalCode: '07832',
      cityName: 'Columbia',
      stateCode: 'NJ',
      searchString: '07832 Columbia New Jersey'
    },
    free: true,
    tags: ['Science', 'Tech', 'Berkeley'],
    userid: '5b8da331a685965241323678'
  },
  {
    id: '5ba91c8b9b92d06d372499c6',
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/drone-school-kids-09-24-2018-1537809332810.jpg',
    title: 'Drone school for kids',
    organization: 'Drone School of Redwood Shores',
    dates: {
      startDateTime: '2018-10-03T12:00:00.000Z',
      endDateTime: '2018-10-04T01:00:00.000Z'
    },
    venueName: 'Drone School Redwood',
    linkToUrl: 'https://www.eventbrite.com/e/drone-school-for-kids-tickets-49522098931?aff=ebdssbdestsearch#tickets',
    location: {
      id: '5b5f6f52222be42bb919bf2e',
      postalCode: '94065',
      cityName: 'Redwood City',
      stateCode: 'CA',
      searchString: '94065 Redwood City California'
    },
    price: '265',
    tags: ['Education', 'Kids'],
    userid: '5b8da331a685965241323678'
  },
  {
    id: '5ba91d099b92d06d372499c7',
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/drone-deploy-09-24-2018-1537809566675.jpg',
    title: 'Drone Deploy Conference San Francisco 2018',
    organization: 'DroneDeploy',
    dates: {
      startDateTime: '2019-10-11T19:00:00.000Z',
      endDateTime: '2019-10-13T05:00:00.000Z'
    },
    venueName: 'Dogpatch Studios',
    linkToUrl: 'https://www.eventbrite.com/e/dronedeploy-conference-tickets-47280775071?aff=ebdssbdestsearch',
    location: {
      id: '5b5f6f52222be42bb919bf3c',
      postalCode: '94107',
      cityName: 'San Francisco',
      stateCode: 'CA',
      searchString: '94107 San Francisco California'
    },
    price: '300',
    tags: ['Science', 'Tech'],
    userid: '5b8da331a685965241323678',
    free: false
  },
  {
    id: '5ba91d9d9b92d06d372499c8',
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/drone-entrepreneur-09-24-2018-1537809693555.jpg',
    title: "Sams's Event Number 3",
    organization: 'Atechup.com',
    dates: {
      startDateTime: '2019-09-27T20:00:00.000Z',
      endDateTime: '2019-09-28T00:00:00.000Z'
    },
    venueName: 'Atechup Corp',
    linkToUrl: 'https://www.eventbrite.com/e/develop-a-successful-drone-tech-entrepreneur-startup-business-san-francisco-tickets-46465060246?aff=ebdssbdestsearch',
    location: {
      id: '5b5f6f52222be42bb919bf3c',
      postalCode: '94107',
      cityName: 'San Francisco',
      stateCode: 'CA',
      searchString: '94107 San Francisco California'
    },
    price: '99',
    tags: ['Class', 'Business'],
    userid: '5b8da331a685965241323678',
    free: false
  },
  {
    id: '5ba920349b92d06d372499c9',
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/tiny-whoop-09-24-2018-1537810289583.jpg',
    title: "Joe's Event Number 4",
    organization: 'Aerial Sports League (ASL)',
    dates: {
      startDateTime: '2019-10-06T20:00:00.000Z',
      endDateTime: '2019-10-06T23:00:00.000Z'
    },
    venueName: 'Hiller Aviation Museum',
    linkToUrl: 'https://www.meetup.com/AerialSports/events/253311237/',
    location: {
      id: '5b5f6f52222be42bb919bf0b',
      postalCode: '94002',
      cityName: 'Belmont',
      stateCode: 'CA',
      searchString: '94002 Belmont California'
    },
    free: true,
    tags: ['Drone', 'Aerial-Sports'],
    userid: '5b8da331a685965241323678'
  },
  {
    id: '5ba921959b92d06d372499ca',
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/drone-class-09-24-2018-1537810692695.jpg',
    title: "Joe's Event Number 5",
    organization: 'Aerial Sports League (ASL)',
    dates: {
      startDateTime: '2019-10-20T18:00:00.000Z',
      endDateTime: '2019-10-20T20:00:00.000Z'
    },
    venueName: 'DGCSF Don Fisher Clubhouse',
    linkToUrl: 'https://www.meetup.com/AerialSports/events/253312594/',
    location: {
      id: '5b5f6f52222be42bb919bf34',
      postalCode: '94102',
      cityName: 'San Francisco',
      stateCode: 'CA',
      searchString: '94102 San Francisco California'
    },
    price: '55',
    tags: ['Class', 'Mini-Drone'],
    userid: '5b8da331a685965241323678',
    free: false
  },
  {
    id: '5ba9219e9b92d06d372499cb',
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/drone-class-09-24-2018-1537810692695.jpg',
    title: "Sam's Event Number 6",
    organization: 'Aerial Sports League (ASL)',
    dates: {
      startDateTime: '2019-10-20T18:00:00.000Z',
      endDateTime: '2019-10-20T20:00:00.000Z'
    },
    venueName: 'DGCSF Don Fisher Clubhouse',
    linkToUrl: 'https://www.meetup.com/AerialSports/events/253312594/',
    location: {
      id: '5b5f6f52222be42bb919bf34',
      postalCode: '94102',
      cityName: 'San Francisco',
      stateCode: 'CA',
      searchString: '94102 San Francisco California'
    },
    price: '55',
    tags: ['Class', 'Mini-Drone'],
    userid: '5b8da331a685965241323678',
    free: false
  },
  {
    id: '5bce14db5a69d56b9ad0dabb',
    title: "Sam's Event Number 7 - m",
    dates: {
      startDateTime: '2018-10-26T18:19:00.000Z',
      endDateTime: '2018-10-26T07:19:00.000Z'
    },
    venueName: 'abc',
    location: {
      id: '5b5f6f52222be42bb919b9a2',
      postalCode: '90189',
      cityName: 'Los Angeles',
      stateCode: 'CA',
      searchString: '90189 Los Angeles California'
    },
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/student-data-10-22-2018-1540232393198.jpg',
    linkToUrl: 'http',
    organization: 'org',
    price: '88',
    tags: ['five'],
    userid: '5b8da331a685965241323678',
    free: false
  },
  {
    id: '5bce16ac5a69d56b9ad0dabc',
    title: "Joe's Event Number 1",
    dates: {
      startDateTime: '2019-01-01T08:00:00.000Z',
      endDateTime: '2019-01-01T09:00:00.000Z'
    },
    venueName: 'San Jose Conference Center',
    location: {
      id: '5b5f6f52222be42bb919c0a1',
      postalCode: '95037',
      cityName: 'Morgan Hill',
      stateCode: 'CA',
      searchString: '95037 Morgan Hill California'
    },
    imageUrl: 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/bark-in-the-park-10-22-2018-1540232844489.jpg',
    linkToUrl: 'http://trivaleycoders.org',
    organization: 'Joe',
    free: true,
    tags: ['bark'],
    userid: '5bac46597ed6240326e8299c'
  },
  {
    id: '5bd08193ce67410c9eea7ecf',
    title: "Dan's Event #1",
    dates: {
      startDateTime: '2019-01-02T02:00:00.000Z',
      endDateTime: '2019-01-02T03:00:00.000Z'
    },
    venueName: "Dan's Place",
    location: {
      id: '5b5f6f52222be42bb9193565',
      postalCode: '10090',
      cityName: 'New York',
      stateCode: 'NY',
      searchString: '10090 New York New York'
    },
    imageUrl: 'https://photo-app-tvc.s3.amazonaws.com/fintech-10-24-2018-1540391284752.jpg',
    linkToUrl: 'http://trivalleycoders.com',
    organization: 'Dan',
    free: true,
    tags: ['one', 'two'],
    userid: '5b8d6855a685965241323675'
  },
  {
    id: '5bd25fb2c5fe1d259343a1b2',
    title: 'title',
    dates: {
      startDateTime: '2018-10-26T00:27:35.828Z',
      endDateTime: '2018-10-26T00:27:35.849Z'
    },
    venueName: 'kjl',
    location: {
      id: '5b5f6f52222be42bb919c046',
      postalCode: '94850',
      cityName: 'Richmond',
      stateCode: 'CA',
      searchString: '94850 Richmond California'
    },
    imageUrl: 'https://photo-app-tvc.s3.amazonaws.com/pitch-globally-10-25-2018-1540513692365.jpg',
    linkToUrl: 'lll',
    organization: 'lll',
    free: true,
    tags: ['kkk'],
    userid: '5b8d6855a685965241323675'
  }
]

export default events