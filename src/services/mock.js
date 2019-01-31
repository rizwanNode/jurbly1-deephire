export const candidateList = {
  list: [
    {
      _id: {
        $oid: '5c4ca732f2b3768b9ecb4fad',
      },
      candidate_email: 'russell@deephire.com',
      interview_name: 'no_name',
      python_datetime: '2018-11-09 16:22:37',
      user_id: 'google-oauth2|108316160914067599948',
      user_name: 'Russell Ratcliffe',
      responses: [
        {
          question_text: 'What are three words that describe youtself? And Why?',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
        {
          question_text: 'question 2 hahah',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
      ],
    },
    {
      _id: {
        $oid: 'otherid',
      },
      candidate_email: 'emerson@deephire.com',
      interview_name: 'I love interviews2',
      python_datetime: '2018-11-09 16:22:37',
      user_id: 'google-oauth2|108316160914067599948',
      user_name: 'Emerson Clouder',
      responses: [
        {
          question_text: 'What are three words that describe youtself? And Why?',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
        {
          question_text: 'question 2 hahah',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
      ],
    },
    {
      _id: {
        $oid: 'otherid',
      },
      candidate_email: 'emerson@deephire.com',
      interview_name: 'I love interviews2',
      python_datetime: '2018-11-09 16:22:37',
      user_id: 'google-oauth2|108316160914067599948',
      user_name: 'Emerson Clouder',
      responses: [
        {
          question_text: 'What are three words that describe youtself? And Why?',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
        {
          question_text: 'question 2 hahah',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
      ],
    },
    {
      _id: {
        $oid: 'otherid',
      },
      candidate_email: 'emerson@deephire.com',
      interview_name: 'I love interviews2',
      python_datetime: '2018-11-09 16:22:37',
      user_id: 'google-oauth2|108316160914067599948',
      user_name: 'Emerson Clouder',
      responses: [
        {
          question_text: 'What are three words that describe youtself? And Why?',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
        {
          question_text: 'question 2 hahah',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
      ],
    },
    {
      _id: {
        $oid: 'otherid',
      },
      candidate_email: 'emerson@deephire.com',
      interview_name: 'I love interviews2',
      python_datetime: '2018-11-09 16:22:37',
      user_id: 'google-oauth2|108316160914067599948',
      user_name: 'Emerson Clouder',
      responses: [
        {
          question_text: 'What are three words that describe youtself? And Why?',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
        {
          question_text: 'question 2 hahah',
          response_url: 'https://vimeo.com/299965218/3f595787a6',
        },
      ],
    },
  ],
};

export const shortLists = [
  {
    _id: {
      $oid: '5c51a3867cebba00081dc71c',
    },
    created_by: 'russell@deephire.com',
    name: 'Hiring Manager',
    email: 'hiringmanager@goog.com',
    clicks: ['2019-01-29 22:58:34'],
    link: 'https://google.com',
    hideInfo: false,
    interviews: candidateList.list,
  },
  {
    _id: {
      $oid: '5c51a3867cebba00081dc71c',
    },
    created_by: 'russell@deephire.com',
    name: 'Aother GOober',
    email: 'goober@goog.com',
    clicks: ['2019-01-29 22:58:34', '2019-01-29 22:58:34', 1548954928550],
    link: 'https://google.com',
    hideInfo: false,
    interviews: candidateList.list,
  },
];

export const shortListsWithAnalytics = {
  // what do you think makes sense for the analytics to be stored as?
  clicks: ['timestamp1, timestamp2, timestamp3'],

  _id: {
    $oid: '5c51a3867cebba00081dc71c',
  },
  created_by: 'russell@deephire.com',
  email: 'hiringmanager@goog.com',
  hideInfo: false,
  interviews: candidateList.list,
};
