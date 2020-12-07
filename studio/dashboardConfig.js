export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fce93bdb8fb010f9f6b5db9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-12-7-20-1-studio',
                  apiId: 'b582652f-a8a8-4df0-954a-907ec1e02e57'
                },
                {
                  buildHookId: '5fce93bd4192ec0cc893dddb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-12-7-20-1',
                  apiId: '1770561e-ada7-4e4b-9e43-35a3ea77cc77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink-12-7-20-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-12-7-20-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
